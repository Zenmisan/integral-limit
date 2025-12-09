import { ArrowRight, Zap, BookOpen, Code2, Clock } from 'lucide-react';

export default function Features() {
  return (
    <>
      {/* Weird Column Display with Benefits */}
      <section id="benefits" className="bg-secondary py-20 lg:py-28">
        <div className="mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold mb-2">Why choose Integral Limit?</h2>
          <p className="text-gray-600 mb-16">Built for people who value their time.</p>

          {/* 3-column layout with offset positioning */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Column 1 */}
            <div className="space-y-8">
              <div>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="text-primary" size={24} />
                </div>
                <h3 className="text-lg lg:text-xl font-bold mb-3">Fast turnaround</h3>
                <p className="text-gray-600 text-sm lg:text-base">Get your assignments completed in days, not weeks. No delays, no excuses.</p>
              </div>
              <div className="pt-8 border-t border-gray-200">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Code2 className="text-primary" size={24} />
                </div>
                <h3 className="text-lg lg:text-xl font-bold mb-3">Expert solutions</h3>
                <p className="text-gray-600 text-sm lg:text-base">Our team specializes in maths and CS. Every solution is verified and battle-tested.</p>
              </div>
            </div>

            {/* Column 2 - offset and different styling */}
            <div className="space-y-8">
              <div className="pt-8 border-t border-gray-200 md:border-t-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="text-primary" size={24} />
                </div>
                <h3 className="text-lg lg:text-xl font-bold mb-3">Reclaim your time</h3>
                <p className="text-gray-600 text-sm lg:text-base">Stop wasting hours on repetitive assignments. Spend those hours building or learning what you're passionate about.</p>
              </div>
              <div className="pt-8 border-t border-gray-200">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="text-primary" size={24} />
                </div>
                <h3 className="text-lg lg:text-xl font-bold mb-3">Transparent process</h3>
                <p className="text-gray-600 text-sm lg:text-base">Real-time updates and clear communication. You always know where your project stands.</p>
              </div>
            </div>

            {/* Column 3 */}
            <div className="space-y-8">
              <div>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <ArrowRight className="text-primary" size={24} />
                </div>
                <h3 className="text-lg lg:text-xl font-bold mb-3">Entrepreneur's edge</h3>
                <p className="text-gray-600 text-sm lg:text-base">More working hours. More client time. More growth. While others are stuck on homework, you're building.</p>
              </div>
              <div className="pt-8 border-t border-gray-200">
                <p className="text-gray-600 text-sm lg:text-base italic">
                  "For entrepreneurs, it's not about cutting corners—it's about focusing on what generates value. Your time is your most expensive resource."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 lg:py-28">
        <div className="mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold mb-16">How it works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="relative">
              <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mb-6">1</div>
              <h3 className="text-lg lg:text-xl font-bold mb-3">Submit</h3>
              <p className="text-gray-600 text-sm lg:text-base">Upload your assignment details, requirements, and deadline. We review everything carefully.</p>
            </div>
            <div className="relative">
              <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mb-6">2</div>
              <h3 className="text-lg lg:text-xl font-bold mb-3">Get assigned</h3>
              <p className="text-gray-600 text-sm lg:text-base">We match your project with an expert in maths or computer science who specializes in your field.</p>
            </div>
            <div className="relative">
              <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mb-6">3</div>
              <h3 className="text-lg lg:text-xl font-bold mb-3">Receive & review</h3>
              <p className="text-gray-600 text-sm lg:text-base">Get your completed assignment with clear explanations. Ask for revisions if needed—we deliver until it's perfect.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Student vs Entrepreneur CTA */}
      <section className="bg-secondary py-20 lg:py-28">
        <div className="mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="p-6 lg:p-8 bg-white border border-gray-200 rounded-lg">
              <h3 className="text-xl lg:text-2xl font-bold mb-4">For students</h3>
              <p className="text-gray-600 text-sm lg:text-base mb-6">
                More time to understand the concepts that matter. Get your assignments done while you focus on the courses you love and the skills that define you.
              </p>
              <ul className="space-y-3 text-sm lg:text-base">
                <li className="flex gap-3">
                  <span className="text-primary">✓</span>
                  <span>More time for deep reading</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">✓</span>
                  <span>Learn from expert solutions</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">✓</span>
                  <span>Reduce stress during exam season</span>
                </li>
              </ul>
            </div>
            <div className="p-6 lg:p-8 bg-white border border-gray-200 rounded-lg">
              <h3 className="text-xl lg:text-2xl font-bold mb-4">For entrepreneurs</h3>
              <p className="text-gray-600 text-sm lg:text-base mb-6">
                Keep up with your degree while scaling your business. No late nights torn between code and coursework.
              </p>
              <ul className="space-y-3 text-sm lg:text-base">
                <li className="flex gap-3">
                  <span className="text-primary">✓</span>
                  <span>More hours to dedicate to your company</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">✓</span>
                  <span>Stay on track with your degree</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">✓</span>
                  <span>No more trade-offs between growth and grades</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}