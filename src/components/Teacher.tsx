import FadeIn from './FadeIn';

const TEACHERS = [
  {
    id: 'zichao-yan',
    name: 'Zichao Yan',
    title: 'Master of Music in Piano Performance',
    image: '/Zichao.jpg',
    education: 'M.M., Indiana University Jacobs School of Music\nB.M., Renmin University of China\nShenzhen Art School',
    experience: 'Award-winning Soloist & Chamber Musician',
    bio: [
      "Zichao Yan is an accomplished pianist and dedicated educator, currently pursuing his Master of Music in Piano Performance at the prestigious Indiana University Jacobs School of Music under the tutelage of Professor Norman Krieger (Professor and Chair of Piano).",
      "He holds a Bachelor of Music from Renmin University of China, where he studied under the esteemed guidance of Ass. Prof. Fang Zhang, following his rigorous early training at the Shenzhen Art School.",
      "An active and passionate performer, Zichao has graced the stages of the Cross-strait Art Youth Piano Music Festival, the Renmin University New Year's Concert, and numerous chamber music recitals.",
      "His competitive excellence is highlighted by multiple First Place awards, including the Chamber Music divisions of both the Hummingbird Competition and the Twelfth Shenzhen Piano Open Competition.",
      "His comprehensive teaching curriculum spans all levels, offering dedicated instruction for Beginners & Children as well as Intermediate & Advanced pianists. Leveraging his award-winning ensemble experience, Zichao also provides specialized coaching in chamber music, focusing primarily on piano chamber repertoire. He is deeply committed to helping every student unlock their full potential and develop their own unique musical voice."
    ]
  },
  {
    id: 'teacher-2',
    name: 'Teacher Name (Placeholder)',
    title: 'Master of Music in Piano Performance',
    image: 'https://images.unsplash.com/photo-1522204657746-fcbaec64ecdb?auto=format&fit=crop&q=80&w=1500',
    education: 'M.M. Piano Performance\nConservatory of Music',
    experience: '10+ Years Teaching\nInternational Soloist',
    bio: [
      "This is a placeholder for the second teacher's biography. You can easily update this text in the codebase with their actual background, teaching philosophy, and musical journey.",
      "They hold an advanced degree from a top-tier music conservatory and have performed extensively in various renowned venues. Their teaching approach focuses on building a solid technical foundation while nurturing the student's inherent musicality.",
      "Passionate about pedagogical excellence, they tailor their lessons to meet the unique goals of each student, ensuring a supportive and highly inspiring learning environment."
    ]
  },
  {
    id: 'teacher-3',
    name: 'Teacher Name (Placeholder)',
    title: 'Doctor of Musical Arts (Candidate)',
    image: 'https://images.unsplash.com/photo-1552422535-c45813c61732?auto=format&fit=crop&q=80&w=1500',
    education: 'D.M.A. Candidate\nUniversity of Music',
    experience: 'Masterclass Instructor\nConcert Pianist',
    bio: [
      "This is a placeholder for the third teacher's biography. Replace this content with their specific achievements, educational background, and teaching experience.",
      "With an extensive background in both performance and music theory, they provide a well-rounded and deeply enriching curriculum for students of all ages and levels.",
      "Whether preparing for high-stakes competitions, examinations, or simply playing for personal enjoyment, their goal is to foster a lifelong love and appreciation for the piano."
    ]
  }
];

export default function Teacher() {
  return (
    <section id="teacher" className="py-24 md:py-32 px-6 lg:px-12 bg-white relative overflow-hidden">
      {/* Decorative subtle background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-light -z-10 hidden lg:block skew-x-12 transform origin-top"></div>

      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-24">
            <h4 className="text-brand-gold font-sans font-medium tracking-widest uppercase text-xs mb-3">Our Faculty</h4>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-dark">Meet the Teachers</h2>
          </div>
        </FadeIn>

        {TEACHERS.map((teacher, index) => {
          const isEven = index % 2 === 0;
          return (
            <div 
              key={teacher.id} 
              className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 lg:gap-24 items-center mb-32 last:mb-0`}
            >
              
              {/* Photo */}
              <div className="w-full lg:w-5/12 mx-auto">
                <FadeIn delay={0.1}>
                  <div className="relative">
                    <div className={`absolute inset-0 bg-brand-gold/10 transform ${isEven ? '-translate-x-4' : 'translate-x-4'} translate-y-4 rounded-sm`}></div>
                    <img 
                      src={teacher.image} 
                      alt={`${teacher.name} at the piano`} 
                      className="relative z-10 w-full h-[550px] lg:h-[600px] object-cover object-center rounded-sm shadow-md"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </FadeIn>
              </div>

              {/* Bio Text */}
              <div className="w-full lg:w-7/12">
                <FadeIn delay={0.2}>
                  <h2 className="text-3xl md:text-4xl font-serif text-brand-dark mb-2">{teacher.name}</h2>
                  <p className="text-lg md:text-xl font-serif text-brand-dark/60 italic mb-8">{teacher.title}</p>
                  
                  <div className="space-y-5 font-sans text-brand-dark/75 leading-relaxed font-light">
                    {teacher.bio.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>

                  <div className="mt-12 flex flex-col sm:flex-row gap-8">
                     <div>
                       <strong className="block font-sans font-semibold text-brand-dark mb-1">Education</strong>
                       <span className="font-sans text-brand-dark/60 font-light text-sm whitespace-pre-line">{teacher.education}</span>
                     </div>
                     <div>
                       <strong className="block font-sans font-semibold text-brand-dark mb-1">Experience / Awards</strong>
                       <span className="font-sans text-brand-dark/60 font-light text-sm whitespace-pre-line">{teacher.experience}</span>
                     </div>
                  </div>
                </FadeIn>
              </div>

            </div>
          );
        })}

      </div>
    </section>
  );
}
