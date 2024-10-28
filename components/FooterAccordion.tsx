import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { footerSections } from "@/constant/footerData";
import Link from "next/link";

const FooterAccordion = () => {
  return (
    <div className='md:hidden mt-6 order-2'>
      <Accordion type='single' collapsible className='w-full'>
        {footerSections.map((item, index) => (
          <AccordionItem value={`item${index + 1}`} key={index}>
            <AccordionTrigger className='outline-none border-none text-lg font-medium py-6'>
              {item.title}
            </AccordionTrigger>
            <AccordionContent className='flex flex-col gap-6 mt-2'>
              {item.links.map((link, linkIndex) => (
                <Link
                  href='#'
                  key={linkIndex}
                  className='text-base text-[#5e5e5e] mt-1'
                >
                  {link}
                </Link>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FooterAccordion;
