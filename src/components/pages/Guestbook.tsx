
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Send, MessageSquare, PenLine, User, ChevronLeft, ChevronRight } from 'lucide-react';
import { toast } from "sonner@2.0.3";
import { motion } from 'motion/react';

interface GuestMessage {
  id: number;
  name: string;
  message: string;
  date: string;
  style: 'clean' | 'paper' | 'tape';
}

export const Guestbook = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isWriting, setIsWriting] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Enhanced mock data for pagination testing
  const [messages, setMessages] = useState<GuestMessage[]>([
    { id: 1, name: "철수", message: "결혼 축하해! 행복하게 잘 살아~", date: "2024.11.20", style: 'paper' },
    { id: 2, name: "영희", message: "너무 아름다운 커플이에요 ❤️", date: "2024.11.21", style: 'clean' },
    { id: 3, name: "민수", message: "포항까지 달려갑니다! 맛있는거 기대할게!", date: "2024.11.21", style: 'tape' },
    { id: 4, name: "지민", message: "세상에서 제일 예쁜 신부! 축하해!", date: "2024.11.22", style: 'paper' },
    { id: 5, name: "준호", message: "둘이 너무 잘 어울려요. 행복하세요!", date: "2024.11.22", style: 'clean' },
    { id: 6, name: "서연", message: "결혼 진심으로 축하드립니다~", date: "2024.11.23", style: 'tape' },
    { id: 7, name: "동현", message: "드디어 가는구나! 축하한다 친구야", date: "2024.11.23", style: 'paper' },
    { id: 8, name: "유진", message: "알콩달콩 예쁘게 사세요 :)", date: "2024.11.24", style: 'clean' },
  ]);

  const totalPages = Math.ceil(messages.length / itemsPerPage);
  const currentMessages = messages.slice(
    (currentPage - 1) * itemsPerPage, 
    currentPage * itemsPerPage
  );

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) {
      toast.error("이름과 메시지를 모두 입력해주세요.");
      return;
    }
    
    const styles: ('clean' | 'paper' | 'tape')[] = ['clean', 'paper', 'tape'];
    const randomStyle = styles[Math.floor(Math.random() * styles.length)];

    const newMessage = {
      id: Date.now(),
      name,
      message,
      date: new Date().toLocaleDateString(),
      style: randomStyle
    };

    setMessages([newMessage, ...messages]);
    setName("");
    setMessage("");
    setIsWriting(false);
    setCurrentPage(1); // Go to first page to see new message
    toast.success("방명록이 등록되었습니다!");
  };

  return (
    <div className="min-h-screen bg-[#FAF9F4] pt-24 pb-10 px-6">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-2xl font-serif font-bold text-[#2C3E30] mb-2">Guestbook</h2>
        <p className="text-sm text-[#2C3E30]/60 font-light">
          신랑 신부에게 축복의 한마디를 남겨주세요
        </p>
      </div>

      {/* Write Button */}
      <motion.div 
        className="mb-8 flex justify-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {!isWriting ? (
          <button
            onClick={() => setIsWriting(true)}
            className="flex items-center gap-2 px-6 py-3 bg-[#2C3E30] text-[#FAF9F4] rounded-full shadow-lg hover:bg-[#3a523f] transition-colors"
          >
            <PenLine size={18} />
            <span>메시지 작성하기</span>
          </button>
        ) : (
          <motion.form 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full bg-white p-6 rounded-xl shadow-xl border border-[#2C3E30]/10"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label className="block text-xs font-bold text-[#2C3E30]/70 mb-1 uppercase tracking-wider">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border-b border-[#2C3E30]/20 bg-transparent focus:border-[#2C3E30] focus:outline-none transition-colors"
                placeholder="이름을 입력하세요"
              />
            </div>
            <div className="mb-6">
              <label className="block text-xs font-bold text-[#2C3E30]/70 mb-1 uppercase tracking-wider">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-2 border border-[#2C3E30]/20 rounded-md bg-[#FAF9F4]/50 focus:border-[#2C3E30] focus:outline-none transition-colors h-24 resize-none"
                placeholder="축하 메시지를 남겨주세요..."
              />
            </div>
            <div className="flex gap-2 justify-end">
              <button
                type="button"
                onClick={() => setIsWriting(false)}
                className="px-4 py-2 text-sm text-[#2C3E30]/60 hover:text-[#2C3E30]"
              >
                취소
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-[#2C3E30] text-white text-sm rounded-full hover:bg-[#3a523f]"
              >
                등록
              </button>
            </div>
          </motion.form>
        )}
      </motion.div>

      {/* Messages Grid */}
      <div className="space-y-4 min-h-[400px]">
        {currentMessages.map((msg, index) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`relative p-6 rounded-sm shadow-sm ${
              msg.style === 'paper' 
                ? 'bg-white border border-stone-200' 
                : msg.style === 'tape'
                  ? 'bg-[#fffdf0] shadow-md rotate-1 mx-2'
                  : 'bg-[#2C3E30]/5'
            }`}
          >
            {/* Tape Effect */}
            {msg.style === 'tape' && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#e8e8e8]/40 backdrop-blur-[1px] rotate-[-2deg] shadow-sm"></div>
            )}

            <p className="text-[#2C3E30] leading-relaxed whitespace-pre-wrap font-serif text-sm mb-4">
              "{msg.message}"
            </p>
            
            <div className="flex justify-between items-center border-t border-[#2C3E30]/10 pt-3">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#2C3E30]/10 flex items-center justify-center">
                  <User size={12} className="text-[#2C3E30]" />
                </div>
                <span className="text-xs font-bold text-[#2C3E30]">{msg.name}</span>
              </div>
              <span className="text-[10px] text-[#2C3E30]/40 font-mono">{msg.date}</span>
            </div>
          </motion.div>
        ))}

        {messages.length === 0 && (
          <div className="text-center py-10 text-[#2C3E30]/40">
            <MessageSquare size={40} className="mx-auto mb-4 opacity-50" />
            <p className="text-sm">아직 등록된 메시지가 없습니다.<br/>첫 번째 주인공이 되어주세요!</p>
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-8 pb-8">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 rounded-full hover:bg-[#2C3E30]/5 disabled:opacity-30 disabled:hover:bg-transparent text-[#2C3E30] transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          
          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <button
                key={pageNum}
                onClick={() => handlePageChange(pageNum)}
                className={`w-8 h-8 rounded-full text-xs font-medium transition-all
                  ${currentPage === pageNum 
                    ? 'bg-[#2C3E30] text-white shadow-md' 
                    : 'text-[#2C3E30]/60 hover:bg-[#2C3E30]/5'
                  }`}
              >
                {pageNum}
              </button>
            ))}
          </div>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 rounded-full hover:bg-[#2C3E30]/5 disabled:opacity-30 disabled:hover:bg-transparent text-[#2C3E30] transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
};
