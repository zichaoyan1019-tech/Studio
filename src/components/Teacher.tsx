import FadeIn from './FadeIn';

const TEACHERS = [
  {
    id: 'zichao-yan',
    name: 'Zichao Yan',
    title: 'Master of Music in Piano Performance',
    image: `${import.meta.env.BASE_URL}Zichao.jpg`,
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
    id: 'yutong-guo',
    name: 'Yutong Guo',
    title: 'Master of Music in Piano Performance',
    image: `${import.meta.env.BASE_URL}Yutong Guo.jpg`,
    education: 'M.M., Indiana University Jacobs School of Music\nB.M., Renmin University of China',
    experience: 'Active Concert Performer & Experienced Educator',
    bio: [
      "Yutong Guo is a dedicated pianist and passionate educator, currently pursuing advanced musical training with a strong foundation in piano performance.",
      "He holds a Bachelor of Music in Music Performance, majoring in Piano, from the School of Arts at Renmin University of China, where he studied under Associate Professor Kang Yuchun. During his undergraduate studies, he maintained strong academic performance and developed extensive experience in solo performance, collaborative piano, accompaniment, and teaching. Currently he is pursuing his Master of Music in Piano Performance at Indiana University Jacobs School of Music under Associate Professor Dinara Klinton.",
      "As an active performer, Yutong has appeared in numerous concerts, including the Renmin University New Year's Concert, the \"Encountering Masters\" concert series, the Capital Universities Piano Exchange Concert, and solo recitals at Renmin University of China Concert Hall. His performance experience spans both classical piano repertoire and selected jazz-influenced works.",
      "Yutong's teaching focuses primarily on classical piano, with instruction available for beginners, children, intermediate students, and advanced learners. In addition, he also offers introductory coaching in simple Jazz improvisation piano, helping students explore harmony, rhythm, and creative expression at the keyboard.",
      "With experience as a part-time piano teacher and accompanist, Yutong is committed to helping students build solid technique, musical sensitivity, confidence, and their own individual musical voice."
    ]
  },
  {
    id: 'yan-tong',
    name: 'Yan Tong',
    title: 'Master of Music in Piano Performance',
    image: `${import.meta.env.BASE_URL}Yan Tong.jpg`,
    education: 'M.M., Indiana University Jacobs School of Music\nB.M., Indiana University Jacobs School of Music\nWuhan Conservatory of Music Affiliated Schools',
    experience: 'Competition Laureate & Active Performer',
    bio: [
      "Yan Tong is a pianist and educator currently pursuing his Master of Music in Piano Performance at the Indiana University Jacobs School of Music.",
      "He received his Bachelor of Music in Piano Performance from the Jacobs School of Music. Before that, he received long-term and systematic pre-college musical training at the Wuhan Conservatory of Music Affiliated Primary School, Secondary School, and High School, where he focused on piano performance. Yan has studied with distinguished piano teachers including Jian Wang, André Watts, Edward Auer, Jungwa Moon Auer, and Chi-Hao Han.",
      "In addition to his piano studies, Yan has also studied harpsichord, conducted musical research and study in Taiwan, participated in an international competition in South Korea, and attended a program at Interlochen Arts Academy. These experiences have broadened his artistic perspective and helped him develop a deeper understanding of music across different cultural and educational settings.",
      "As an active performer, Yan has presented and participated in performances at venues including Recital Hall, Auer Hall, Xianning TV Station, and Bianzhong Concert Hall in Wuhan. His repertoire has included works by Mozart, Bach, Beethoven, Chopin, Schumann, and Rachmaninoff.",
      "Yan has also received recognition in several competitions and evaluations, including the Silver Piano Award at the Taiwan Cup Music Competition, the Gold Award at the Korea-China International Youth Music Competition, the Silver Award at the Shanghai International Youth Competition, and First Prize at the Global Outstanding Young Pianists Competition, Hubei Division. These experiences have contributed to his growth as both a performer and musician.",
      "In his teaching, Yan works with students of different ages and levels, including children, adult beginners, early-level students, and advanced pianists. He believes that each student learns at a different pace, and he designs his teaching approach according to each student’s progress, personality, and musical goals rather than relying on a single fixed method.",
      "In lessons, Yan not only helps students build a solid technical foundation, but also introduces music theory, harmony, structure, and stylistic understanding through the pieces they are studying. By connecting technical training with musical context, he helps students understand how to shape phrases, control tone color, create musical layers, and express the character of each work more naturally.",
      "Yan believes that good piano teaching is not only about helping students play the correct notes, but also about guiding them to understand and express music with confidence. He is committed to helping every student grow at their own pace, develop independent musical thinking, and discover their own unique musical voice."
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
