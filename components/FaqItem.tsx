import { cn } from "@/lib/utils";
import React from "react";
import { FiPlus } from "react-icons/fi";

interface Props {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FaqItem = ({ question, answer, onToggle, isOpen }: Props) => {
  return (
    <>
      <div
        className={cn(
          "flex items-center justify-between gap-4 border rounded-[20px] border-black cursor-pointer text-black px-6 py-[30px]"
        )}
        onClick={onToggle}
      >
        <div className='mt-4'>
          <h2 className=' font-semibold mb-2 text-2xl'>{question}</h2>
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              isOpen ? "max-h-[200px] opacity-100 pt-1" : "max-h-0 opacity-0"
            }`}
          >
            <div className='text-xl font-normal'>{answer}</div>
          </div>
        </div>

        <FiPlus
          size={24}
          className={`flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        />
      </div>
    </>
  );
};

export default FaqItem;
