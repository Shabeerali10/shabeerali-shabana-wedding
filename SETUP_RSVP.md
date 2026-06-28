# RSVP Setup — Google Sheets + Email Notifications

The RSVP form sends each submission to a Google Apps Script Web App, which:
1. Adds a row to a Google Sheet (open it anytime, or File → Download → Microsoft Excel).
2. Emails you (mkshabeeralimk@gmail.com) the details.

## Steps

1. Open your sheet: https://docs.google.com/spreadsheets/d/1timGd22ICqlRxzqsnf3sCSivI_7U7pzsiSAiM31slpA/edit
2. In the sheet, go to **Extensions → Apps Script**.
3. Delete any placeholder code and paste this:

   ```javascript
   const NOTIFY_EMAIL = "mkshabeeralimk@gmail.com";

   function doPost(e) {
     const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
     const data = JSON.parse(e.postData.contents);

     if (sheet.getLastRow() === 0) {
       sheet.appendRow(["Timestamp", "Name", "Email", "Attending", "Guests", "Message"]);
     }

     sheet.appendRow([
       new Date(),
       data.name || "",
       data.email || "",
       data.attending || "",
       data.guests || "",
       data.message || "",
     ]);

     MailApp.sendEmail({
       to: NOTIFY_EMAIL,
       subject: `New RSVP: ${data.name} (${data.attending === "yes" ? "Attending" : "Not Attending"})`,
       body:
         `Name: ${data.name}\n` +
         `Email: ${data.email}\n` +
         `Attending: ${data.attending}\n` +
         `Guests: ${data.guests}\n` +
         `Message: ${data.message}`,
     });

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
