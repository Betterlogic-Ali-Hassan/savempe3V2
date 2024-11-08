"use client";
import React, { useState } from "react";
import FaqItem from "./FaqItem";
import { faqs } from "@/constant/faq";

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>();
  return (
    <section className='mt-[100px] mx-auto max-w-[1200px] w-full px-4'>
      <h2 className='text-black text-[48px] mb-4'>FAQs</h2>
      <div className='border border-black flex flex-col '>
        {faqs.map((faq, index) => (
          <FaqItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            index={index}
            totalItem={faqs.length}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Faqs;
