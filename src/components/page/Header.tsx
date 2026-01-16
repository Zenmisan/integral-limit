import IntegralLimitLogo from '../../assets/integral-limit-logo.png';
import { Menu, X } from 'lucide-react';
import { useState, useRef } from 'react'; 

// Define the content of the Dynamic Island Menu
const NavMenu = ({ className }: { className: string }) => (
    <nav className={`flex items-center justify-between space-x-4 ${className}`}>
        <a href="#contact" className="px-4 py-2 rounded-full text-sm font-medium text-foreground hover:bg-accent hover:text-white transition whitespace-nowrap">Home</a>
        <a href="#pricing" className="px-4 py-2 rounded-full text-sm font-medium text-foreground hover:bg-accent hover:text-white transition whitespace-nowrap">Team</a>
        <a href="#about" className="px-4 py-2 rounded-full text-sm font-medium text-foreground hover:bg-accent hover:text-white transition whitespace-nowrap">Start Solving</a>
        <a href="#about" className="px-4 py-2 rounded-full text-sm font-medium text-foreground hover:bg-accent hover:text-white transition whitespace-nowrap">Enquires</a>
    </nav>
);

export default function Header() {
  const [isExpanded, setIsExpanded] = useState(false); 
  const desktopMenuRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => setIsExpanded(true);
  const handleMouseLeave = () => setIsExpanded(false);

  const islandClasses = isExpanded
    ? "w-fit max-w-full p-2" 
    : "w-32 p-2";

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
            className={`flex shrink-0 bg-secondary/50 rounded-full transition-all duration-500 ease-in-out transform shadow-lg ${islandClasses}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {isExpanded ? (
                <NavMenu className="flex-1 min-w-0" />
            ) : (
                <div className="text-sm font-medium text-center flex items-center justify-center h-full w-full">
                    <span className="text-foreground/70">Get started</span>
                </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}