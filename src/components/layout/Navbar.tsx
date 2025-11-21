
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../lib/utils'; // We might need to create this utility or just use template literals

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full max-w-md z-50 transition-all duration-300 ease-in-out px-6 py-4
        ${scrolled 
          ? 'bg-white/85 backdrop-blur-md shadow-sm text-[#2C3E30]' 
          : 'bg-[#EEEEEE]/0 backdrop-blur-[1px] text-[#2C3E30]' // Initially transparent/subtle
        }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="font-serif font-semibold text-sm tracking-[0.25em]">
            DG & EJ
          </Link>
        </div>

        <nav className="flex gap-4 sm:gap-6">
          {[
            { name: 'HOME', path: '/' },
            { name: 'STORY', path: '/our-story' },
            { name: 'GALLERY', path: '/gallery' },
            { name: 'GUEST', path: '/guestbook' },
            { name: 'POHANG', path: '/food-guide' }, // Assuming /pohang maps to food-guide
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`relative text-[10px] sm:text-xs font-medium tracking-widest transition-colors
                ${pathname === item.path ? 'text-[#2C3E30]' : 'text-[#2C3E30]/60 hover:text-[#2C3E30]'}
              `}
            >
              {item.name}
              <span className={`absolute -bottom-1 left-0 right-0 h-[1px] bg-[#2C3E30] transform transition-transform duration-300 origin-left
                ${pathname === item.path ? 'scale-x-100' : 'scale-x-0'}
              `} />
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
