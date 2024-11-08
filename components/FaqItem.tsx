import { cn } from "@/lib/utils";
import React from "react";
import { FiPlus } from "react-icons/fi";

interface Props {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
  totalItem: number;
}

const FaqItem = ({
  question,
  answer,
  index,
  totalItem,
  onToggle,
  isOpen,
}: Props) => {
  return (
    <>
      <div
        className={cn(
          "flex items-center justify-between gap-4 border-b border-black cursor-pointer text-black px-5 py-6",
          index === totalItem - 1 && "border-b-0"
        )}
        onClick={onToggle}
      >
        <div className='mt-4'>
          <h2 className='text-xl font-semibold mb-2'>{question}</h2>
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              isOpen ? "max-h-[200px] opacity-100 pt-1" : "max-h-0 opacity-0"
            }`}
          >
            <div className='text-lg font-normal'>{answer}</div>
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
