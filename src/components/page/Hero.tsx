import { ArrowRight } from 'lucide-react';
import BackdropLogo from '../../assets/backdrop.png';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center text-center text-primary-foreground overflow-hidden">

      {/* --- LOGO BACKDROP (Full height, properly fitted) --- */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <img
          src={BackdropLogo}
          alt="Integral Limit Backdrop"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Your assignments,<br />
          <span className="text-accent">done right.</span>
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-2xl">
          Stop spending hours on maths and computer science assignments. Let us handle them while you focus on what truly matters—building your business or deepening your knowledge.
        </p>

        {/* Buttons - Stack on mobile, row on larger screens */}
        <div className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto">
          <button className="w-full sm:w-auto px-8 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors flex items-center justify-center gap-2">
            Submit assignment <ArrowRight size={18} />
          </button>

          <button className="w-full sm:w-auto px-8 py-3 bg-background text-foreground rounded-lg font-medium hover:bg-secondary transition-colors">
            Get started
          </button>

          <button className="w-full sm:w-auto px-8 py-3 border-2 border-primary-foreground/30 text-primary-foreground rounded-lg font-medium hover:border-accent hover:bg-accent/10 transition-colors">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
}