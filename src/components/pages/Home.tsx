
import React from 'react';
import { MoneyGift } from '../wedding/MoneyGift';
import { MapSection } from '../wedding/MapSection';
import { NavigationGrid } from '../wedding/NavigationGrid';
import { motion } from 'motion/react';

export const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header / Cover */}
      <section className="relative h-[85vh] w-full overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1630264885183-bca22c72cc1b?auto=format&fit=crop&q=80&w=1200" 
          alt="Wedding Cover" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
        
        <div className="absolute bottom-16 left-0 right-0 text-center text-white p-6 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg font-light tracking-[0.2em] mb-4 opacity-90">WE ARE GETTING MARRIED</p>
            <h1 className="text-4xl font-serif font-bold mb-4 leading-tight">
              김동균<br/>
              <span className="text-2xl align-middle mx-2">&</span><br/>
              김준린
            </h1>
            <div className="w-12 h-[1px] bg-white mx-auto my-6 opacity-70"></div>
            <p className="text-lg font-light tracking-widest">
              2024. 12. 16<br/>
              SATURDAY 12:00 PM
            </p>
            <p className="mt-2 text-sm font-light opacity-80">라한호텔 포항 5층 그랜드볼룸</p>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white/70"
        >
          <div className="flex flex-col items-center gap-1">
            <span className="text-[10px] tracking-widest uppercase">Scroll</span>
            <div className="w-[1px] h-8 bg-white/50"></div>
          </div>
        </motion.div>
      </section>

      {/* Introduction Text */}
      <section className="py-16 px-8 text-center bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-2 text-2xl animate-bounce">💌</div>
          <h2 className="text-xl font-serif font-bold text-[#2C3E30] mb-6">초대합니다</h2>
          <p className="text-sm leading-8 text-gray-600 font-light">
            서로의 이름을 부르는 것만으로도<br/>
            사랑의 깊이를 알 수 있는 두 사람,<br/>
            꽃과 나무처럼 서로의 곁에 서서<br/>
            평생의 숲을 이루려 합니다.<br/><br/>
            저희 두 사람의 약속의 자리에<br/>
            함께하시어 축복해 주시면<br/>
            더없는 기쁨으로 간직하겠습니다.
          </p>
        </motion.div>
      </section>

      {/* Map Section - Immediately Visible */}
      <MapSection />

      {/* Money Gift Section - Immediately Visible */}
      <MoneyGift />

      {/* Navigation Grid */}
      <NavigationGrid />

      {/* Footer */}
      <footer className="py-10 bg-[#2C3E30] text-[#FAF9F4] text-center">
        <p className="text-xs tracking-widest opacity-60 mb-2">THANK YOU</p>
        <h2 className="font-serif text-xl mb-6">Jenny & Jason</h2>
        <p className="text-[10px] opacity-40">Copyright © 2024. All rights reserved.</p>
      </footer>
    </div>
  );
};
