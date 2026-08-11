import { MessageCircle } from 'lucide-react';
import { contact } from '../../data/contact';
import { useState } from 'react';

export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={contact.whatsapp}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-full bg-[#25D366] p-4 text-white shadow-lg transition-transform hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Chat with us on WhatsApp"
    >
      <div className="flex items-center gap-2">
        <MessageCircle className="h-6 w-6" />
        <span
          className={`overflow-hidden whitespace-nowrap text-sm font-medium transition-all duration-300 ease-in-out ${
            isHovered ? 'w-24 max-w-full opacity-100 pl-1' : 'w-0 max-w-0 opacity-0'
          }`}
        >
          LET'S TALK
        </span>
      </div>
    </a>
  );
}
