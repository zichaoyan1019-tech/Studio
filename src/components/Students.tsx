import FadeIn from './FadeIn';
import { Play } from 'lucide-react';

const STUDENTS = [
  {
    id: 1,
    name: "Student Performance",
    level: "Showcase",
    piece: "Piano Performance",
    youtubeId: "CX5ol7aBpug",
  },
  {
    id: 2,
    name: "James T.",
    level: "Intermediate",
    piece: "Debussy - Clair de Lune",
    thumbnail: "https://images.unsplash.com/photo-1605020420620-20c943cc4669?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    name: "Sophia L.",
    level: "Beginner",
    piece: "Bach - Minuet in G",
    thumbnail: "https://images.unsplash.com/photo-1460036521480-a3854832ebce?auto=format&fit=crop&q=80&w=800",
  }
];

export default function Students() {
  return (
    <section id="students" className="py-24 md:py-32 px-6 lg:px-12 bg-brand-light">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h4 className="text-brand-gold font-sans font-medium tracking-widest uppercase text-xs mb-3">Student Showcase</h4>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-dark">Celebrating Musical Growth</h2>
            <p className="mt-4 text-brand-dark/60 font-sans font-light max-w-2xl mx-auto">
              A glimpse into the hard work, dedication, and joy our students experience as they build their musical repertoire.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {STUDENTS.map((student, index) => (
            <FadeIn key={student.id} delay={0.2 * (index + 1)}>
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-sm bg-brand-dark aspect-video mb-4">
                  {student.youtubeId ? (
                    <iframe 
                      className="absolute top-0 left-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${student.youtubeId}`} 
                      title={student.piece}
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <>
                      <img 
                        src={student.thumbnail} 
                        alt={student.piece}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-60"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 transition-transform duration-300 group-hover:scale-110">
                          <Play className="text-white ml-1 fill-white" size={24} />
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-serif text-xl text-brand-dark">{student.name}</h3>
                    <span className="font-sans text-xs tracking-wider text-brand-gold uppercase">{student.level}</span>
                  </div>
                  <p className="font-sans text-brand-dark/60 text-sm font-light">{student.piece}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
