
import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';

export const MobileLayout = () => {
  const { pathname } = useLocation();

  // Scroll to top whenever the route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[#2C3E30] flex justify-center">
      <div className="w-full max-w-md min-h-screen bg-[#FAF9F4] shadow-2xl relative overflow-x-hidden font-sans text-[#2C3E30]">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};
