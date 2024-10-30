import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import TerminalSection from '@/components/TerminalSection';

/**
 * The main entry point of the application.
 * This component renders the main elements of the page.
 */
export default function Home() {
  return (
    <main id='main'>
      {/* Navigation Bar */}
      <Nav />

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* Terminal Section */}
      <TerminalSection />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Footer Section */}
      <Footer />
    </main>
  );
}
