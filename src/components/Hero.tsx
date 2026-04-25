import { Link } from 'react-router-dom';
import FadeIn from './FadeIn';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative h-screen min-h-[600px] flex items-center justify-center pt-20"
    >
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1552422535-c45813c61732?auto=format&fit=crop&q=80&w=2070" 
          alt="Elegant Grand Piano" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Soft gradient overlay for bottom seamless transition */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brand-light to-transparent"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <FadeIn delay={0.2}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-8">
            Discover the Joy of Music <br className="hidden md:block" /> Through Piano
          </h1>
        </FadeIn>
        
        <FadeIn delay={0.4}>
          <p className="font-sans text-xl md:text-2xl text-white/95 max-w-2xl mx-auto mb-6 font-light leading-relaxed">
            Creating a warm and inviting space where students of all ages can simply enjoy making music.
          </p>
          <div className="font-sans text-base md:text-lg text-white/80 max-w-3xl mx-auto mb-10 font-light space-y-4 hidden sm:block">
            <p>
              Here, music is not just something to practice—it’s something to explore, to play with, and to truly experience. Curiosity is encouraged, creativity is welcomed, and every small discovery becomes part of the journey.
            </p>
            <p>
              Over time, the piano becomes more than an instrument. It becomes a way to express, to connect, and to find a voice that feels completely your own.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link 
              to="/contact" 
              className="w-full sm:w-auto px-8 py-3.5 bg-brand-gold text-white text-sm font-medium tracking-wide hover:bg-[#b08e4f] transition-colors rounded-sm"
            >
              Book a Trial Lesson
            </Link>
            <Link 
              to="/contact" 
              className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-white/80 text-white text-sm font-medium tracking-wide hover:bg-white hover:text-brand-dark transition-all rounded-sm"
            >
              Contact Me
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
