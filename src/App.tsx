/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import Letters from './components/Letters';
import Details from './components/Details';
import RSVP from './components/RSVP';
import Footer from './components/Footer';
import MusicToggle from './components/MusicToggle';

export default function App() {
  return (
    <div className="min-h-screen bg-romantic-beige selection:bg-romantic-blush selection:text-romantic-dark">
      <Navbar />
      <MusicToggle />
      <main>
        <Hero />
        <Timeline />
        <Gallery />
        <Letters />
        <Details />
        <RSVP />
      </main>
      <Footer />
    </div>
  );
}
