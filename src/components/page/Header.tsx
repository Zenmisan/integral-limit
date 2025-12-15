import IntegralLimitLogo from '../../assets/integral-limit-logo.png';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '../ui/sheet';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-background text-foreground z-50 shadow-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">

          {/* Logo */}
          <div className="shrink-0">
            <a href="#" className="flex items-center">
              <img src={IntegralLimitLogo} alt="Integral Limit Logo" className="h-10 w-auto" />
            </a>
          </div>

          {/* Desktop Navigation - Always visible, no animations */}
          <nav className="hidden md:flex items-center gap-2">
            <a
              href="#contact"
              className="px-4 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-secondary transition-colors"
              aria-label="Contact Us"
            >
              Contact Us
            </a>
            <a
              href="#pricing"
              className="px-4 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-secondary transition-colors"
              aria-label="Pricing"
            >
              Pricing
            </a>
            <a
              href="#about"
              className="px-4 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-secondary transition-colors"
              aria-label="About Us"
            >
              About Us
            </a>

            {/* CTA Button */}
            <button
              className="ml-2 px-6 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
              aria-label="Get started"
            >
              Get started
            </button>
          </nav>

          {/* Mobile Menu - Sheet Component */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button
                  className="p-3 rounded-lg hover:bg-secondary transition-colors"
                  aria-label="Open menu"
                >
                  <Menu size={24} className="text-foreground" />
                </button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-8">
                  <a
                    href="#contact"
                    className="px-4 py-3 text-base font-medium text-foreground hover:bg-secondary rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact Us
                  </a>
                  <a
                    href="#pricing"
                    className="px-4 py-3 text-base font-medium text-foreground hover:bg-secondary rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Pricing
                  </a>
                  <a
                    href="#about"
                    className="px-4 py-3 text-base font-medium text-foreground hover:bg-secondary rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    About Us
                  </a>

                  <button
                    className="mt-4 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Get started
                  </button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </div>
    </header>
  );
}