
import React from 'react';
import { UtensilsCrossed, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

const restaurants = [
  {
    name: "환여횟집",
    category: "물회",
    desc: "포항 3대 물회 맛집, 새콤달콤한 육수가 일품입니다. 웨이팅이 있을 수 있으니 서두르세요!",
    address: "경북 포항시 북구 해안로 189-1",
    image: "https://images.unsplash.com/photo-1604661669873-44d77d122542?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "새포항물회집",
    category: "물회",
    desc: "현지인이 사랑하는 전통 고추장 물회 맛집입니다. 비벼 먹는 스타일을 좋아하신다면 추천!",
    address: "경북 포항시 북구 삼호로 65",
    image: "https://images.unsplash.com/photo-1553163147-621957441915?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "죽도시장",
    category: "시장/해산물",
    desc: "동해안 최대 규모의 어시장. 대게, 회, 건어물 등 다양한 먹거리가 가득합니다.",
    address: "경북 포항시 북구 죽도시장13길 13",
    image: "https://images.unsplash.com/photo-1534260164206-2a3a4a72891d?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "빌라드웨이브",
    category: "양식",
    desc: "오션뷰가 멋진 덮밥 맛집. 데이트 코스로도 좋아요.",
    address: "경북 포항시 북구 흥해읍 해안로 1777",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=600"
  }
];

export const FoodGuide = () => {
  return (
    <div className="min-h-screen bg-[#FAF9F4] pt-24 pb-10 px-6">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-serif font-bold text-[#2C3E30] mb-2">Pohang Guide</h2>
        <p className="text-sm text-[#2C3E30]/60 font-light">
          멀리서 와주신 분들을 위한<br/>
          현지인 추천 찐 맛집 리스트
        </p>
      </div>

      <div className="grid gap-6">
        {restaurants.map((place, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-[#2C3E30]/5"
          >
            <div className="flex h-32">
              <div className="w-32 h-full shrink-0">
                <img 
                  src={place.image} 
                  alt={place.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 p-4 flex flex-col justify-center">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="font-bold text-[#2C3E30] text-lg">{place.name}</h3>
                  <span className="text-[10px] px-2 py-1 bg-[#2C3E30]/10 text-[#2C3E30] rounded-full font-medium">
                    {place.category}
                  </span>
                </div>
                <p className="text-xs text-[#2C3E30]/60 line-clamp-2 mb-2 leading-relaxed">
                  {place.desc}
                </p>
                <div className="flex items-center text-[#2C3E30]/50 text-[10px] gap-1 mt-auto">
                  <MapPin size={12} />
                  <span className="truncate">{place.address}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        <div className="mt-8 p-6 bg-[#2C3E30] rounded-xl text-center text-[#FAF9F4]">
          <UtensilsCrossed size={24} className="mx-auto mb-3 opacity-80" />
          <p className="text-sm font-light leading-relaxed">
            식사 맛있게 하시고<br/>
            조심히 돌아가세요.<br/>
            감사합니다.
          </p>
        </div>
      </div>
    </div>
  );
};
