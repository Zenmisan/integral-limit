import { FaDiscord, FaWhatsapp, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-background text-foreground text-sm border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-primary font-bold text-base">Integral Limit</div>

          <div className="flex gap-6">
            <a
              href="#"
              aria-label="Discord"
              className="text-tertiary hover:text-accent transition-colors p-2"
            >
              <FaDiscord size={28} />
            </a>
            <a
              href="#"
              aria-label="WhatsApp"
              className="text-tertiary hover:text-accent transition-colors p-2"
            >
              <FaWhatsapp size={28} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-tertiary hover:text-accent transition-colors p-2"
            >
              <FaInstagram size={28} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}