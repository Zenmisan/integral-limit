import { ArrowRight, Zap, BookOpen, Code2, Clock } from 'lucide-react';

export default function Features() {
  return (
    <>
      {/* Benefits Section */}
      <section id="benefits" className="bg-secondary py-16 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 text-foreground">Why choose Integral Limit?</h2>
          <p className="text-muted-foreground mb-12 sm:mb-16 text-base sm:text-lg">Built for people who value their time.</p>

          {/* Grid: Single column on mobile, 2 on tablet, 3 on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Feature Card 1 */}
            <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-tertiary/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="text-tertiary" size={24} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 text-foreground">Fast turnaround</h3>
              <p className="text-muted-foreground text-sm sm:text-base">Get your assignments completed in days, not weeks. No delays, no excuses.</p>
            </div>

            {/* Feature Card 2 */}
            <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-tertiary/10 rounded-lg flex items-center justify-center mb-4">
                <Code2 className="text-tertiary" size={24} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 text-foreground">Expert solutions</h3>
              <p className="text-muted-foreground text-sm sm:text-base">Our team specializes in maths and CS. Every solution is verified and battle-tested.</p>
            </div>

            {/* Feature Card 3 */}
            <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-tertiary/10 rounded-lg flex items-center justify-center mb-4">
                <Clock className="text-tertiary" size={24} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 text-foreground">Reclaim your time</h3>
              <p className="text-muted-foreground text-sm sm:text-base">Stop wasting hours on repetitive assignments. Spend those hours building or learning what you're passionate about.</p>
            </div>

            {/* Feature Card 4 */}
            <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-tertiary/10 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="text-tertiary" size={24} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 text-foreground">Transparent process</h3>
              <p className="text-muted-foreground text-sm sm:text-base">Real-time updates and clear communication. You always know where your project stands.</p>
            </div>

            {/* Feature Card 5 */}
            <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-tertiary/10 rounded-lg flex items-center justify-center mb-4">
                <ArrowRight className="text-tertiary" size={24} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 text-foreground">Entrepreneur's edge</h3>
              <p className="text-muted-foreground text-sm sm:text-base">More working hours. More client time. More growth. While others are stuck on homework, you're building.</p>
            </div>

            {/* Quote Card */}
            <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <p className="text-muted-foreground text-sm sm:text-base italic">
                "For entrepreneurs, it's not about cutting corners—it's about focusing on what generates value. Your time is your most expensive resource."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 sm:py-20 lg:py-28 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 sm:mb-16 text-primary-foreground">How it works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="p-6 bg-secondary/20 rounded-lg">
              <div className="w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold mb-6">1</div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 text-primary-foreground">Submit</h3>
              <p className="text-primary-foreground/90 text-sm sm:text-base">Upload your assignment details, requirements, and deadline. We review everything carefully.</p>
            </div>
            <div className="p-6 bg-secondary/20 rounded-lg">
              <div className="w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold mb-6">2</div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 text-primary-foreground">Get assigned</h3>
              <p className="text-primary-foreground/90 text-sm sm:text-base">We match your project with an expert in maths or computer science who specializes in your field.</p>
            </div>
            <div className="p-6 bg-secondary/20 rounded-lg">
              <div className="w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold mb-6">3</div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 text-primary-foreground">Receive & review</h3>
              <p className="text-primary-foreground/90 text-sm sm:text-base">Get your completed assignment with clear explanations. Ask for revisions if needed—we deliver until it's perfect.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Student vs Entrepreneur CTA */}
      <section className="bg-primary py-16 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

            {/* For students */}
            <div className="p-6 lg:p-8 bg-tertiary text-tertiary-foreground rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-accent">For students</h3>
              <p className="text-sm sm:text-base mb-6">
                More time to understand the concepts that matter. Get your assignments done while you focus on the courses you love and the skills that define you.
              </p>
              <ul className="space-y-3 text-sm sm:text-base">
                <li className="flex gap-3">
                  <span className="text-primary-foreground">✓</span>
                  <span>More time for deep reading</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary-foreground">✓</span>
                  <span>Learn from expert solutions</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary-foreground">✓</span>
                  <span>Reduce stress during exam season</span>
                </li>
              </ul>
            </div>

            {/* For entrepreneurs */}
            <div className="p-6 lg:p-8 bg-tertiary text-tertiary-foreground rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-accent">For entrepreneurs</h3>
              <p className="text-sm sm:text-base mb-6">
                Keep up with your degree while scaling your business. No late nights torn between code and coursework.
              </p>
              <ul className="space-y-3 text-sm sm:text-base">
                <li className="flex gap-3">
                  <span className="text-primary-foreground">✓</span>
                  <span>More hours to dedicate to your company</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary-foreground">✓</span>
                  <span>Stay on track with your degree</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary-foreground">✓</span>
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