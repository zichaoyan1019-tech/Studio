import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Studio from './components/Studio';
import Teacher from './components/Teacher';
import Students from './components/Students';
import Lessons from './components/Lessons';
import Contact from './components/Contact';

// ScrollToTop component to ensure pages start at the top when navigating
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="font-sans min-h-screen flex flex-col bg-brand-light">
        <Navbar />
        <main className="flex-grow flex flex-col">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/studio" element={<Studio />} />
            <Route path="/teacher" element={<Teacher />} />
            <Route path="/students" element={<Students />} />
            <Route path="/lessons" element={<Lessons />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer className="bg-brand-dark text-white text-center py-8 border-t border-white/10 mt-auto">
          <p className="font-sans text-sm font-light text-white/60">
            © {new Date().getFullYear()} Aria Piano Studio. All rights reserved.
          </p>
        </footer>
      </div>
    </BrowserRouter>
  );
}
