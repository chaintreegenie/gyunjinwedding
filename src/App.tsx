
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MobileLayout } from './components/layout/MobileLayout';
import { Home } from './components/pages/Home';
import { OurStory } from './components/pages/OurStory';
import { Gallery } from './components/pages/Gallery';
import { Guestbook } from './components/pages/Guestbook';
import { FoodGuide } from './components/pages/FoodGuide';
import { Toaster } from 'sonner@2.0.3';

export default function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" richColors />
      <Routes>
        <Route element={<MobileLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/guestbook" element={<Guestbook />} />
          <Route path="/food-guide" element={<FoodGuide />} />
          {/* Catch-all route to handle preview environment paths */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
