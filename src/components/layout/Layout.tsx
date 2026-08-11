import type { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Chatbot from '../ui/Chatbot';
import ScrollToTop from '../ui/ScrollToTop';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-brand-offwhite font-body text-brand-charcoal">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <Chatbot />
      <ScrollToTop />
    </div>
  );
}
