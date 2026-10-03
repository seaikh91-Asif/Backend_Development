import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Shudhu feed page e scroll hide/show hobe
      if (location.pathname === '/feed' || location.pathname === '/') {
        const currentScrollY = window.scrollY;
        
        // Nicher dike scroll korle ar scroll position 50px er beshi hole hide koro
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
          setIsVisible(false);
        } else {
          // Uporer dike scroll korle show koro
          setIsVisible(true);
        }
        
        setLastScrollY(currentScrollY);
      } else {
        // Onno page e (jemon create-post) sob somoy show koro
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, location.pathname]);

  return (
    <nav 
      className={`fixed left-1/2 -translate-x-1/2 z-50 flex justify-center gap-10 px-8 py-4 rounded-full bg-white/60 backdrop-blur-lg shadow-[0_8px_32px_rgb(0,0,0,0.08)] border border-white/50 w-[90%] max-w-sm transition-all duration-500 ease-in-out ${
        isVisible ? 'bottom-6 opacity-100' : '-bottom-24 opacity-0'
      }`}
    >
      <Link
        to="/feed"
        className={`text-lg transition-all duration-300 ${
          location.pathname === '/feed' || location.pathname === '/' 
            ? 'text-black font-bold scale-105' 
            : 'text-gray-500 font-medium hover:text-black'
        }`}
      >
        Feed
      </Link>
      <Link
        to="/create-post"
        className={`text-lg transition-all duration-300 ${
          location.pathname === '/create-post' 
            ? 'text-black font-bold scale-105' 
            : 'text-gray-500 font-medium hover:text-black'
        }`}
      >
        Create Post
      </Link>
    </nav>
  );
}