
import React from 'react';
import { MapPin } from 'lucide-react';

export const MapSection = () => {
  return (
    <div className="w-full bg-[#FAF9F4] py-10 px-6">
      <div className="text-center mb-8">
        <h3 className="text-xl font-serif font-bold text-[#2C3E30] mb-2">오시는 길</h3>
        <p className="text-sm text-[#2C3E30]">경상북도 포항시 북구 해안로 123</p>
        <p className="text-sm font-semibold mt-1">라한호텔 포항 5층 그랜드볼룸</p>
      </div>

      {/* Map Placeholder */}
      <div className="w-full aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden mb-6 relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3235.816875356997!2d129.3706973763593!3d36.05437497247181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356703bd3b10a4ad%3A0xc3a24d7e5c2e31e3!2z65287ZWc7Zi47YWUIO2PrO2VrQ!5e0!3m2!1sko!2skr!4v1709221234567!5m2!1sko!2skr" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale opacity-90"
        ></iframe>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <button className="flex flex-col items-center justify-center py-3 bg-white border border-[#E5E5E5] rounded-lg text-xs text-[#2C3E30] hover:bg-gray-50 transition-colors">
          <span className="font-bold mb-1">NAVER</span>
          네이버지도
        </button>
        <button className="flex flex-col items-center justify-center py-3 bg-white border border-[#E5E5E5] rounded-lg text-xs text-[#2C3E30] hover:bg-gray-50 transition-colors">
          <span className="font-bold text-yellow-400 mb-1">Kakao</span>
          카카오맵
        </button>
        <button className="flex flex-col items-center justify-center py-3 bg-white border border-[#E5E5E5] rounded-lg text-xs text-[#2C3E30] hover:bg-gray-50 transition-colors">
          <span className="font-bold text-red-500 mb-1">TMAP</span>
          티맵
        </button>
      </div>

      <div className="mt-8 text-xs text-gray-500 space-y-4 text-left leading-relaxed">
        <div>
          <strong className="text-[#2C3E30] block mb-1">버스 이용시</strong>
          <p>209, 700, 900번 버스 탑승 후 영일대 해수욕장 하차</p>
        </div>
        <div>
          <strong className="text-[#2C3E30] block mb-1">자가용 이용시</strong>
          <p>호텔 내 지하주차장 이용 가능 (하객 3시간 무료)</p>
        </div>
      </div>
    </div>
  );
};
