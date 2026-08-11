import type { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingWhatsApp from '../ui/FloatingWhatsApp';

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
      <FloatingWhatsApp />
    </div>
  );
}
