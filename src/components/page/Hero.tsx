import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="mx-auto px-6 py-20 lg:py-28 text-center">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
          Your assignments,<br />
          <span className="text-primary">done right.</span>
        </h1>
        <p className="text-base lg:text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl">
          Stop spending hours on maths and computer science assignments. Let us handle them while you focus on what truly matters—building your business or deepening your knowledge.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <button className="px-8 py-3 bg-primary text-white rounded font-medium hover:bg-primary/90 transition flex items-center gap-2 whitespace-nowrap">
            Submit assignment <ArrowRight size={18} />
          </button>
          <button className="px-8 py-3 border border-gray-300 rounded font-medium hover:border-accent transition">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
}