"use client";
import React, { useState } from "react";
import FaqItem from "./FaqItem";
import { faqs } from "@/constant/faq";

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>();
  return (
    <section className='my-[100px] mx-auto max-w-[1200px] w-full max-[1200px]:px-4'>
      <h2 className=' font-semibold text-[48px] text-[#D10210]  mb-4'>FAQs</h2>
      <div className=' flex flex-col gap-8 '>
        {faqs.map((faq, index) => (
          <FaqItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Faqs;
