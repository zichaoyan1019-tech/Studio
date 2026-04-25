import { Link } from 'react-router-dom';
import FadeIn from './FadeIn';

export default function Studio() {
  return (
    <section id="studio" className="py-24 md:py-32 px-6 lg:px-12 bg-brand-light">
      <div className="max-w-7xl mx-auto flex flex-col gap-16 lg:gap-24">
        
        {/* Image Gallery - Now taking up full width at the top */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <FadeIn>
            <img 
              src={`${import.meta.env.BASE_URL}Studio1.jpg`} 
              alt="Aria Studio View 1" 
              className="w-full h-auto aspect-square object-cover rounded-sm shadow-xl"
              referrerPolicy="no-referrer"
            />
          </FadeIn>
          <FadeIn delay={0.2}>
            <img 
              src={`${import.meta.env.BASE_URL}Studio2.jpg`} 
              alt="Aria Studio View 2" 
              className="w-full h-auto aspect-square object-cover rounded-sm shadow-xl"
              referrerPolicy="no-referrer"
            />
          </FadeIn>
          <FadeIn delay={0.4}>
            <img 
              src={`${import.meta.env.BASE_URL}Studio3.jpg`} 
              alt="Aria Studio View 3" 
              className="w-full h-auto aspect-square object-cover rounded-sm shadow-xl"
              referrerPolicy="no-referrer"
            />
          </FadeIn>
        </div>

        {/* Text Content - Now below the images */}
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h4 className="text-brand-gold font-sans font-medium tracking-widest uppercase text-xs mb-3">About the Studio</h4>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-8 leading-tight">
              A meticulously crafted space for musical growth.
            </h2>
            <div className="space-y-6 font-sans text-brand-dark/70 leading-relaxed font-light text-left md:text-center text-lg">
              <p>
                The studio is designed to be a sanctuary for sound—a warm, inspiring environment where students can focus entirely on their musical journey away from the distractions of daily life. 
              </p>
              <p>
                Equipped with a meticulously maintained, concert-grade grand piano, the space offers unparalleled acoustic clarity. The ambient natural light and serene aesthetic combine to foster creativity, deep focus, and an appreciation for artistic nuance.
              </p>
              <p>
                From absolute beginners taking their first steps, to advanced musicians preparing for auditions or recitals, every student receives private, undivided attention in a highly supportive setting.
              </p>
            </div>
            
            <div className="mt-12">
              <Link 
                to="/lessons" 
                className="inline-flex items-center justify-center px-8 py-3.5 bg-brand-gold text-white text-sm font-medium tracking-wide hover:bg-[#b08e4f] transition-all rounded-sm shadow-sm"
              >
                Learn about lessons
              </Link>
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
