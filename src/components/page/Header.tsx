import IntegralLimitLogo from '../../assets/integral-limit-logo.png';
import { Menu, X } from 'lucide-react';
import { useState, useRef } from 'react'; 

// Define the content of the Dynamic Island Menu
const NavMenu = ({ className }: { className: string }) => (
    <nav className={`flex items-center justify-between space-x-4 ${className}`}>
        <a href="#contact" className="px-4 py-2 rounded-full text-sm font-medium text-foreground hover:bg-accent hover:text-white transition whitespace-nowrap">Contact Us</a>
        <a href="#pricing" className="px-4 py-2 rounded-full text-sm font-medium text-foreground hover:bg-accent hover:text-white transition whitespace-nowrap">Pricing</a>
        <a href="#about" className="px-4 py-2 rounded-full text-sm font-medium text-foreground hover:bg-accent hover:text-white transition whitespace-nowrap">About Us</a>
        
        {/* CTA Button integrated into the menu area */}
        <button className="px-6 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-accent transition whitespace-nowrap">
          Get started
        </button>
    </nav>
);

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false); 
  const desktopMenuRef = useRef<HTMLDivElement>(null);
  
  const toggleMenu = () => setIsOpen(!isOpen);

  const handleMouseEnter = () => setIsExpanded(true);
  const handleMouseLeave = () => setIsExpanded(false);

  const islandClasses = isExpanded
    ? "w-fit max-w-full p-2" 
    : "w-24 p-2";

  const mobileMenuClasses = isOpen
    ? "h-auto p-4 opacity-100 transition-all duration-300 ease-out"
    : "h-0 p-0 opacity-0 overflow-hidden transition-all duration-300 ease-in";

  return (
    <header className="sticky top-0 bg-background text-foreground z-50 shadow-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          
          {/* Logo with 50px push to the right (flex-shrink-0 -> shrink-0) */}
          <div className="shrink-0" style={{ marginLeft: '50px' }}> 
            <a href="#" className="flex items-center">
              <img src={IntegralLimitLogo} alt="Integral Limit Logo" className="h-10 w-auto" />
            </a>
          </div>

          {/* Desktop Navigation (Dynamic Island Effect) (flex-shrink-0 -> shrink-0) */}
          <div 
            ref={desktopMenuRef}
            className={`hidden md:flex shrink-0 bg-secondary/50 rounded-full transition-all duration-500 ease-in-out transform shadow-lg ${islandClasses}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {isExpanded ? (
                <NavMenu className="flex-1 min-w-0" />
            ) : (
                <div className="text-sm font-medium text-center flex items-center justify-center h-full w-full">
                    <span className="text-foreground/70">Menu</span>
                </div>
            )}
          </div>

          {/* Mobile/Tablet Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            {!isOpen && <span className="text-xs text-foreground/70 mr-2">Expand</span>} 
            <button className="p-2 bg-secondary/50 rounded-full" onClick={toggleMenu}>
              {isOpen ? <X size={24} className="text-foreground" /> : <Menu size={24} className="text-foreground" />}
            </button>
          </div>
          
        </div>
      </div>
      
      {/* Mobile Menu Content (Full width slide down) */}
      <div className={`md:hidden bg-secondary w-full ${mobileMenuClasses}`}>
        <div className="flex flex-col space-y-2 p-4 text-center">
          <a href="#contact" className="py-2 text-foreground hover:bg-accent/10 rounded">Contact Us</a>
          <a href="#pricing" className="py-2 text-foreground hover:bg-accent/10 rounded">Pricing</a>
          <a href="#about" className="py-2 text-foreground hover:bg-accent/10 rounded">About Us</a>
          <button className="mt-4 px-6 py-2 bg-primary text-primary-foreground rounded-full font-medium hover:bg-accent transition">
            Get started
          </button>
        </div>
      </div>
    </header>
  );
}