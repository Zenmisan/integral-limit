import { FaDiscord, FaWhatsapp, FaInstagram } from 'react-icons/fa'; // Import icons

export default function Footer() {
  return (
       <footer className="bg-background text-foreground text-sm border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col lg:flex-row justify-between items-center gap-4">
       <div className="text-primary font-bold">Integral Limit</div> 
        <div className="flex gap-6">
          
          <a href="#" aria-label="Discord" className="text-tertiary hover:text-accent transition">
            <FaDiscord size={24} />
          </a>
          <a href="#" aria-label="WhatsApp" className="text-tertiary hover:text-accent transition">
            <FaWhatsapp size={24} />
          </a>
          <a href="#" aria-label="Instagram" className="text-tertiary hover:text-accent transition">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}