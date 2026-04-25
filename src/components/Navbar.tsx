import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Studio', path: '/studio' },
  { name: 'Teacher', path: '/teacher' },
  { name: 'Students', path: '/students' },
  { name: 'Lessons', path: '/lessons' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  const isSolid = !isHomePage || scrolled;
  const textColorClass = isSolid ? 'text-brand-dark' : 'text-white';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isSolid 
          ? 'bg-brand-light/95 backdrop-blur-md border-b border-brand-stone/30 py-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)]' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        <Link to="/" className={`font-serif text-2xl font-semibold tracking-wide transition-colors ${textColorClass} hover:text-brand-gold`}>
          Aria Studio
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {LINKS.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`font-sans text-sm font-medium tracking-wide transition-colors ${
                      isActive ? 'text-brand-gold' : `${textColorClass} hover:text-brand-gold`
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            to="/contact"
            className="px-5 py-2.5 bg-brand-gold text-white text-sm font-medium tracking-wide hover:bg-[#b08e4f] transition-all rounded-sm shadow-sm"
          >
            Book a Trial Lesson
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden ${textColorClass}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-light border-b border-brand-stone/50 shadow-lg pb-6 pt-2">
          <ul className="flex flex-col items-center space-y-6">
            {LINKS.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`font-sans text-lg font-medium tracking-wide transition-colors ${
                      isActive ? 'text-brand-gold' : 'text-brand-dark hover:text-brand-gold'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="inline-block mt-2 px-6 py-3 bg-brand-gold text-white text-sm font-medium tracking-wide hover:bg-[#b08e4f] transition-all rounded-sm shadow-sm"
              >
                Book a Trial Lesson
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
