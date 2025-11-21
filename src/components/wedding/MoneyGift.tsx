
import React from 'react';
import { ChevronDown, Copy } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { toast } from "sonner@2.0.3";

interface AccountProps {
  name: string;
  relation: string;
  bank: string;
  accountNumber: string;
}

const AccountRow = ({ name, relation, bank, accountNumber }: AccountProps) => {
  const handleCopy = async () => {
    const text = `${bank} ${accountNumber}`;
    try {
      await navigator.clipboard.writeText(text);
      toast.success("계좌번호가 복사되었습니다.");
    } catch (err) {
      // Fallback mechanism for environments where Clipboard API is blocked
      try {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed"; // Avoid scrolling to bottom
        textArea.style.left = "-9999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        
        if (successful) {
          toast.success("계좌번호가 복사되었습니다.");
        } else {
          throw new Error("Fallback copy failed");
        }
      } catch (fallbackErr) {
        console.error('Copy failed:', fallbackErr);
        toast.error("복사하기가 지원되지 않는 브라우저입니다.");
      }
    }
  };

  return (
    <div className="flex items-center justify-between py-3 border-b border-[#E5E5E5] last:border-0">
      <div className="flex flex-col">
        <span className="text-sm font-medium text-[#2C3E30]">{relation} {name}</span>
        <span className="text-xs text-gray-500">{bank} {accountNumber}</span>
      </div>
      <button 
        onClick={handleCopy}
        className="px-3 py-1.5 text-xs bg-[#F5F5DC] hover:bg-[#EBEBD0] text-[#2C3E30] rounded-md transition-colors flex items-center gap-1"
      >
        <Copy size={12} />
        복사
      </button>
    </div>
  );
};

export const MoneyGift = () => {
  return (
    <div className="w-full px-6 py-8 bg-white">
      <div className="text-center mb-6">
        <h3 className="text-xl font-serif font-bold text-[#2C3E30] mb-2">마음 전하실 곳</h3>
        <p className="text-xs text-gray-500 leading-relaxed">
          참석하지 못하시는 분들을 위해<br/>
          계좌번호를 안내해 드립니다.
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full space-y-2">
        <AccordionItem value="groom" className="border border-[#E5E5E5] rounded-lg px-4 bg-[#FAF9F4]">
          <AccordionTrigger className="hover:no-underline py-4">
            <span className="font-medium text-[#2C3E30]">신랑측 계좌번호</span>
          </AccordionTrigger>
          <AccordionContent>
            <AccountRow name="김철수" relation="신랑" bank="국민은행" accountNumber="123-456-789012" />
            <AccountRow name="김아버지" relation="부" bank="농협" accountNumber="356-1234-5678-90" />
            <AccountRow name="이어머니" relation="모" bank="우리은행" accountNumber="1002-123-456789" />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="bride" className="border border-[#E5E5E5] rounded-lg px-4 bg-[#FAF9F4]">
          <AccordionTrigger className="hover:no-underline py-4">
            <span className="font-medium text-[#2C3E30]">신부측 계좌번호</span>
          </AccordionTrigger>
          <AccordionContent>
            <AccountRow name="이영희" relation="신부" bank="신한은행" accountNumber="110-123-456789" />
            <AccountRow name="이아버지" relation="부" bank="하나은행" accountNumber="123-123456-12345" />
            <AccountRow name="박어머니" relation="모" bank="국민은행" accountNumber="987-654-321012" />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
