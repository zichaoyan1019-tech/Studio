import FadeIn from './FadeIn';

export default function Lessons() {
  return (
    <section id="lessons" className="py-24 md:py-32 px-6 lg:px-12 bg-brand-dark text-white relative">
      <div className="max-w-7xl mx-auto">
        
        <FadeIn>
          <div className="text-center mb-20">
            <h4 className="text-brand-gold font-sans font-medium tracking-widest uppercase text-xs mb-3">Structured Learning</h4>
            <h2 className="text-4xl md:text-5xl font-serif">Piano Lessons</h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Who I Teach */}
          <FadeIn delay={0.2}>
            <div className="p-8 md:p-12 border border-white/10 rounded-sm bg-white/5 h-full">
              <h3 className="text-2xl font-serif mb-6 text-brand-gold">Who I Teach</h3>
              <p className="font-sans font-light text-white/80 leading-relaxed mb-8">
                Music is a lifelong journey. I cultivate a welcoming, encouraging environment tailored to each demographic's unique learning needs, spanning all ages and skill levels.
              </p>
              
              <ul className="space-y-6">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 mr-4 flex-shrink-0"></span>
                  <div>
                    <strong className="block font-medium tracking-wide mb-1 font-sans">Beginners & Children</strong>
                    <p className="text-sm font-light text-white/60">Fostering a fun, engaging introduction to music, focusing on basic literacy, rhythm, and hand coordination.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 mr-4 flex-shrink-0"></span>
                  <div>
                    <strong className="block font-medium tracking-wide mb-1 font-sans">Intermediate & Advanced</strong>
                    <p className="text-sm font-light text-white/60">Refining technique, exploring complex repertoire, and preparing for exams, recitals, and collegiate auditions.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 mr-4 flex-shrink-0"></span>
                  <div>
                    <strong className="block font-medium tracking-wide mb-1 font-sans">Adults & Hobbyists</strong>
                    <p className="text-sm font-light text-white/60">Relaxed, goal-oriented sessions aimed at stress relief, re-learning forgotten skills, or mastering favorite pieces.</p>
                  </div>
                </li>
              </ul>
            </div>
          </FadeIn>

          {/* Lesson Structure */}
          <FadeIn delay={0.4}>
            <div className="p-8 md:p-12 border border-white/10 rounded-sm bg-white/5 h-full">
              <h3 className="text-2xl font-serif mb-6 text-brand-gold">Lesson Structure</h3>
              <p className="font-sans font-light text-white/80 leading-relaxed mb-8">
                Private, weekly lessons are offered in varying formats based on age, level, and individual goals.
              </p>
              
              <div className="flex gap-4 mb-8">
                <div className="px-4 py-2 border border-white/20 rounded-sm text-sm font-medium tracking-wider text-white/90">30 Min</div>
                <div className="px-4 py-2 border border-white/20 rounded-sm text-sm font-medium tracking-wider text-white/90">45 Min</div>
                <div className="px-4 py-2 border border-white/20 rounded-sm text-sm font-medium tracking-wider text-white/90">60 Min</div>
              </div>

              <h4 className="font-sans font-medium mb-4 text-white">Comprehensive Curriculum Includes:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 font-sans font-light text-white/70 text-sm">
                <li className="flex items-center"><span className="text-brand-gold mr-2">›</span> Proper Technique & Posture</li>
                <li className="flex items-center"><span className="text-brand-gold mr-2">›</span> Diverse Repertoire</li>
                <li className="flex items-center"><span className="text-brand-gold mr-2">›</span> Music Theory & Analysis</li>
                <li className="flex items-center"><span className="text-brand-gold mr-2">›</span> Sight-Reading Skills</li>
                <li className="flex items-center"><span className="text-brand-gold mr-2">›</span> Ear Training & Pitch</li>
                <li className="flex items-center"><span className="text-brand-gold mr-2">›</span> Performance Preparation</li>
              </ul>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
