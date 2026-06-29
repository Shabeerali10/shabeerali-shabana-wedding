# RSVP Setup — Google Sheets + Email Notifications

The RSVP form sends each submission to a Google Apps Script Web App, which:
1. Adds a row to a Google Sheet (open it anytime, or File → Download → Microsoft Excel).
2. Emails you (mkshabeeralimk@gmail.com) only when the response count hits a milestone (100, 200, 300, ... 1000, ...) — not on every single submission.
3. Rejects a second submission from the same email address — each guest can only respond once.

## Steps

1. Open your sheet: https://docs.google.com/spreadsheets/d/1timGd22ICqlRxzqsnf3sCSivI_7U7pzsiSAiM31slpA/edit
2. In the sheet, go to **Extensions → Apps Script**.
3. Delete any placeholder code and paste this:

   ```javascript
   const NOTIFY_EMAIL = "mkshabeeralimk@gmail.com";
   const MILESTONE_STEP = 100; // email every 100th response (100, 200, 300, ...)

   function doPost(e) {
     const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
     const data = JSON.parse(e.postData.contents);
     const email = (data.email || "").trim().toLowerCase();

     if (sheet.getLastRow() === 0) {
       sheet.appendRow(["Timestamp", "Name", "Email", "Attending", "Message"]);
     }

     // Reject a second submission from the same email address.
     const existingEmails = sheet.getLastRow() > 1
       ? sheet.getRange(2, 3, sheet.getLastRow() - 1, 1).getValues().flat()
       : [];
     const alreadyResponded = existingEmails.some(
       (e) => String(e).trim().toLowerCase() === email
     );
     if (alreadyResponded) {
       return ContentService.createTextOutput(
         JSON.stringify({ result: "duplicate" })
       ).setMimeType(ContentService.MimeType.JSON);
     }

     sheet.appendRow([
       new Date(),
       data.name || "",
       data.email || "",
       data.attending || "",
       data.message || "",
     ]);

     const responseCount = sheet.getLastRow() - 1; // minus header row
     if (responseCount > 0 && responseCount % MILESTONE_STEP === 0) {
       MailApp.sendEmail({
         to: NOTIFY_EMAIL,
         subject: `Wedding RSVP milestone: ${responseCount} responses!`,
         body: `Your RSVP sheet just reached ${responseCount} responses.\n\nView it here: ${SpreadsheetApp.getActiveSpreadsheet().getUrl()}`,
       });
     }

     return ContentService.createTextOutput(
       JSON.stringify({ result: "success" })
     ).setMimeType(ContentService.MimeType.JSON);
   }
   ```

4. Click **Deploy → New deployment**.
   - Click the gear icon next to "Select type" → choose **Web app**.
   - Description: anything (e.g. "RSVP endpoint").
   - Execute as: **Me**.
   - Who has access: **Anyone**.
   - Click **Deploy**.
5. Google will ask you to authorize the script (it's your own script, so click through "Advanced" → "Go to ... (unsafe)" if warned — this warning appears for all self-authored scripts).
6. Copy the **Web app URL** it gives you (ends in `/exec`).
7. Open [src/components/RSVP.tsx](src/components/RSVP.tsx) and replace:

   ```ts
   const RSVP_ENDPOINT = 'PASTE_YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
   ```

   with your actual URL, e.g.:

   ```ts
   const RSVP_ENDPOINT = 'https://script.google.com/macros/s/AKfycbx.../exec';
   ```

8. Save, and test the RSVP form on your site — a new row should appear in the Sheet and you should get an email.

## Notes
- If you ever update the script code, you must create a **new deployment version** (Deploy → Manage deployments → Edit → New version) for changes to take effect.
- The Sheet is your live guest list — anytime before the wedding you can open it and export to Excel (`File → Download → Microsoft Excel (.xlsx)`).
