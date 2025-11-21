
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Heart, Image as ImageIcon, MessageSquare, Utensils } from 'lucide-react';

const CardItem = ({ title, subtitle, icon: Icon, path, image }: any) => {
  const navigate = useNavigate();
  
  return (
    <div 
      onClick={() => navigate(path)}
      className="group relative w-full aspect-[3/4] overflow-hidden rounded-2xl cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
    >
      <img 
        src={image} 
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
      
      <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
        <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <div className="bg-white/20 w-fit p-2 rounded-full backdrop-blur-sm mb-3">
            <Icon size={20} className="text-white" />
          </div>
          <h3 className="text-xl font-serif font-bold mb-1">{title}</h3>
          <p className="text-xs opacity-90 font-light mb-4">{subtitle}</p>
          <div className="flex items-center text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
            View Detail <ArrowRight size={12} className="ml-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const NavigationGrid = () => {
  // Mock images for cards
  const images = {
    story: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=600",
    gallery: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=600",
    guestbook: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=600",
    food: "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?auto=format&fit=crop&q=80&w=600"
  };

  return (
    <div className="px-4 py-10 bg-[#FAF9F4]">
      <h3 className="text-center text-xl font-serif font-bold text-[#2C3E30] mb-8">Wedding Details</h3>
      <div className="grid grid-cols-2 gap-4">
        <CardItem 
          title="Our Story" 
          subtitle="신랑 & 신부 이야기" 
          icon={Heart} 
          path="/our-story" 
          image={images.story}
        />
        <CardItem 
          title="Gallery" 
          subtitle="우리의 순간들" 
          icon={ImageIcon} 
          path="/gallery" 
          image={images.gallery}
        />
        <CardItem 
          title="Guestbook" 
          subtitle="축하 메시지" 
          icon={MessageSquare} 
          path="/guestbook" 
          image={images.guestbook}
        />
        <CardItem 
          title="Pohang" 
          subtitle="맛집 추천 가이드" 
          icon={Utensils} 
          path="/food-guide" 
          image={images.food}
        />
      </div>
    </div>
  );
};
