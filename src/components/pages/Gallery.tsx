
import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const photos = [
  "https://images.unsplash.com/photo-1511285560982-1356c11d4606?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1623091410901-00e2d268901f?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1520854221256-17451cc330e7?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1510076857177-be9add1e8431?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1532712938310-34cb3958d425?auto=format&fit=crop&q=80&w=800",
  // Extra photos for testing pagination
  "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800", 
  "https://images.unsplash.com/photo-1522673607200-1645062cd4d2?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1509924603848-2150c9ef57be?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&q=80&w=800",
];

export const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(8);

  const showMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, photos.length));
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev === null || prev === 0 ? photos.length - 1 : prev - 1));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev === null || prev === photos.length - 1 ? 0 : prev + 1));
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'ArrowLeft') {
        setSelectedIndex((prev) => (prev === null || prev === 0 ? photos.length - 1 : prev! - 1));
      } else if (e.key === 'ArrowRight') {
        setSelectedIndex((prev) => (prev === null || prev === photos.length - 1 ? 0 : prev! + 1));
      } else if (e.key === 'Escape') {
        setSelectedIndex(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  return (
    <div className="min-h-screen bg-[#FAF9F4] pt-24 pb-10 px-6">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-serif font-bold text-[#2C3E30] mb-2">Gallery</h2>
        <p className="text-sm text-[#2C3E30]/60 font-light">
          저희 두 사람의 아름다운 순간들
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-8">
        {photos.slice(0, visibleCount).map((photo, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            whileHover={{ y: -5 }}
            onClick={() => setSelectedIndex(idx)}
            className={`
              cursor-pointer bg-white p-3 pb-8 shadow-md hover:shadow-xl transition-all duration-300
              ${idx % 2 === 0 ? 'rotate-[-2deg]' : 'rotate-[2deg]'}
            `}
          >
            <div className="aspect-[3/4] w-full overflow-hidden bg-gray-100">
              <img 
                src={photo} 
                alt={`Gallery ${idx + 1}`} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-3 text-center">
              <span className="font-serif text-[10px] text-[#2C3E30]/40 tracking-widest">
                Moment #{idx + 1}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Show More Button */}
      {visibleCount < photos.length && (
        <div className="text-center">
          <button
            onClick={showMore}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#2C3E30]/5 hover:bg-[#2C3E30]/10 text-[#2C3E30] rounded-full transition-colors text-sm"
          >
            <Plus size={16} />
            <span>더보기</span>
          </button>
        </div>
      )}

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-0 sm:p-4 backdrop-blur-sm"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-4 right-4 text-white/70 hover:text-white p-2 z-50"
            >
              <X size={28} />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-white z-50 bg-black/20 rounded-full"
            >
              <ChevronLeft size={32} />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-white z-50 bg-black/20 rounded-full"
            >
              <ChevronRight size={32} />
            </button>

            {/* Main Image */}
            <motion.div
              key={selectedIndex} // Key change triggers animation
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full max-w-md h-full flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={photos[selectedIndex]}
                alt="Full size"
                className="max-w-full max-h-[80vh] object-contain shadow-2xl"
              />
              <div className="absolute bottom-8 left-0 right-0 text-center text-white/60 text-xs font-serif tracking-widest">
                {selectedIndex + 1} / {photos.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
