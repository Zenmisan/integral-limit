import { ArrowRight } from 'lucide-react';
import BackdropLogo from '../../assets/backdrop.png'; // Import the backdrop logo image

export default function Hero() {
  return (
    <section className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28 text-center text-primary-foreground overflow-hidden">
      
      {/* --- LOGO BACKDROP --- */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        {/* Using your provided logo image  */}
        <img 
          src={BackdropLogo} 
          alt="Integral Limit Backdrop" 
          className="w-full h-full object-cover transform scale-150 motion-safe:animate-[pan_60s_linear_infinite]" 
        />
      </div>

      {/* Hero Content (z-10 ensures it's above the backdrop) */}
      <div className="relative z-10 flex flex-col items-center"> 
        <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
          Your assignments,<br />
          <span className="text-accent">done right.</span>
        </h1>
        <p className="text-base lg:text-lg text-primary-foreground mb-8 leading-relaxed max-w-2xl">
          Stop spending hours on maths and computer science assignments. Let us handle them while you focus on what truly matters—building your business or deepening your knowledge.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <button className="px-8 py-3 bg-accent text-primary-foreground rounded font-medium hover:bg-accent/90 transition flex items-center gap-2 whitespace-nowrap">
            Submit assignment <ArrowRight size={18} />
          </button>
          
          {/* Missing "Get Started" Button */}
          <button className="px-8 py-3 bg-background text-foreground rounded font-medium hover:bg-accent hover:text-white transition">
            Get started
          </button>

          <button className="px-8 py-3 border border-gray-300 rounded font-medium hover:border-accent transition">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
}