import FadeIn from './FadeIn';

const STUDENTS = [
  {
    id: 1,
    name: "Student Performance",
    level: "Advanced",
    piece: "Piano Performance",
    type: "youtube",
    url: "https://www.youtube.com/embed/sPb47w6uQZY",
  },
  {
    id: 2,
    name: "Student Performance",
    level: "Intermediate",
    piece: "Piano Performance",
    type: "youtube",
    url: "https://www.youtube.com/embed/F8Run_N7PKI",
  },
  {
    id: 3,
    name: "Student Performance",
    level: "Intermediate",
    piece: "Piano Performance",
    type: "youtube",
    url: "https://www.youtube.com/embed/M_DKK1rxs-4",
  },
  {
    id: 4,
    name: "Student Performance",
    level: "Advanced",
    piece: "Jazz Performance",
    type: "local",
    url: "Jazz.mov",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {STUDENTS.map((student, index) => (
            <FadeIn key={student.id} delay={0.2 * (index + 1)}>
              <div className="group">
                <div className="relative overflow-hidden rounded-sm bg-brand-dark aspect-video mb-4">
                  {student.type === 'youtube' ? (
                    <iframe 
                      className="w-full h-full absolute top-0 left-0"
                      src={student.url} 
                      title={student.piece}
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      referrerPolicy="strict-origin-when-cross-origin" 
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <video 
                      className="w-full h-full object-cover absolute top-0 left-0"
                      controls
                      src={`${import.meta.env.BASE_URL}${student.url}`}
                    >
                      Your browser does not support the video tag.
                    </video>
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
