
import React from 'react';
import { motion } from 'motion/react';

export const OurStory = () => {
  const milestones = [
    {
      year: '2021. 12',
      title: '첫 만남',
      desc: '추운 겨울, 친구들의 소개로 어색하게 마주한 첫 만남. 따뜻한 커피 한 잔으로 시작된 우리의 이야기.',
      icon: '☕️'
    },
    {
      year: '2022. 01',
      title: '첫 데이트',
      desc: '서로의 마음을 확인하고 시작된 우리의 첫 데이트. 눈 내리던 날의 설렘을 잊을 수 없습니다.',
      icon: '❄️'
    },
    {
      year: '2023. 05',
      title: '함께한 첫 여행',
      desc: '제주도 푸른 바다 앞에서 약속한 우리의 미래. 서로에게 더 깊이 빠져들었던 시간들.',
      icon: '✈️'
    },
    {
      year: '2024. 08',
      title: '프러포즈',
      desc: '평생을 함께하고 싶다는 고백. 서로의 손을 잡고 약속한 영원.',
      icon: '💍'
    }
  ];

  const qna = [
    {
      q: "서로의 첫인상은?",
      him: "차분하고 단아한 모습에 눈을 뗄 수 없었어요.",
      her: "웃는 모습이 참 선하고 따뜻한 사람이라고 생각했어요."
    },
    {
      q: "가장 기억에 남는 순간은?",
      him: "처음 손 잡았던 날, 심장이 터질 것 같았던 떨림.",
      her: "아플 때 밤새 간호해주던 듬직한 뒷모습."
    },
    {
      q: "서로에게 하고 싶은 말",
      him: "평생 당신의 웃음을 지켜주는 든든한 남편이 될게.",
      her: "언제나 당신 편이 되어주는 지혜로운 아내가 될게."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F4] pt-20 pb-10">
      {/* Hero Image */}
      <div className="relative h-64 mb-12 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1522673607200-1645062cd4d2?auto=format&fit=crop&q=80&w=1200" 
          alt="Couple" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <h2 className="text-3xl font-serif text-white tracking-widest">OUR STORY</h2>
        </div>
      </div>

      <div className="px-6">
        {/* Intro */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#2C3E30] leading-8 font-serif">
              우연이 인연이 되고,<br/>
              인연이 운명이 되기까지.<br/>
              <span className="text-xs text-[#2C3E30]/60 mt-2 block font-sans">
                FROM THE FIRST MOMENT TO FOREVER
              </span>
            </p>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="relative mb-20 pl-4">
          <div className="absolute left-[27px] top-0 bottom-0 w-[1px] bg-[#2C3E30]/20"></div>
          
          {milestones.map((item, idx) => (
            <motion.div 
              key={idx}
              className="relative pl-16 mb-10 last:mb-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="absolute left-0 top-1 w-[54px] h-[54px] bg-[#FAF9F4] flex items-center justify-center z-10">
                <div className="w-10 h-10 rounded-full bg-[#2C3E30]/5 flex items-center justify-center text-xl shadow-sm border border-[#2C3E30]/10">
                  {item.icon}
                </div>
              </div>
              
              <div className="pt-2">
                <span className="text-xs font-bold text-[#2C3E30]/50 tracking-wider block mb-1">{item.year}</span>
                <h3 className="text-lg font-serif font-bold text-[#2C3E30] mb-2">{item.title}</h3>
                <p className="text-sm text-[#2C3E30]/80 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Q&A Section */}
        <div className="bg-white p-6 rounded-2xl shadow-sm mb-12">
          <div className="text-center mb-8">
            <h3 className="text-xl font-serif font-bold text-[#2C3E30]">Interview</h3>
            <p className="text-xs text-[#2C3E30]/50 mt-1">신랑 & 신부의 속마음</p>
          </div>

          <div className="space-y-8">
            {qna.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="text-center mb-4">
                  <h4 className="text-sm font-bold text-[#2C3E30] bg-[#2C3E30]/5 inline-block px-3 py-1 rounded-full">
                    Q. {item.q}
                  </h4>
                </div>
                
                <div className="grid gap-4">
                  <div className="bg-[#FAF9F4] p-4 rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold text-[#2C3E30] uppercase">Groom</span>
                      <div className="h-[1px] flex-1 bg-[#2C3E30]/10"></div>
                    </div>
                    <p className="text-sm text-[#2C3E30]/80 font-light">"{item.him}"</p>
                  </div>

                  <div className="bg-[#2C3E30]/5 p-4 rounded-tr-2xl rounded-bl-2xl rounded-tl-sm rounded-br-sm text-right">
                    <div className="flex items-center gap-2 mb-2 justify-end">
                      <div className="h-[1px] flex-1 bg-[#2C3E30]/10"></div>
                      <span className="text-xs font-bold text-[#2C3E30] uppercase">Bride</span>
                    </div>
                    <p className="text-sm text-[#2C3E30]/80 font-light">"{item.her}"</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Image */}
        <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
           <img 
            src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800" 
            alt="Wedding hands" 
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};
