import { footerSections } from "@/constant/footerData";
import React from "react";

const FooterLinks = () => {
  return (
    <div className='max-md:hidden xl:flex w-full xl:justify-between max-xl:order-2 flex-wrap max-xl:grid max-xl:grid-cols-3 max-xl:gap-[54px] '>
      {footerSections.map((section) => (
        <div key={section.title}>
          <h3 className=' text-base font-medium '>{section.title}</h3>
          <ul className='space-y-2 mt-3'>
            {section.links.map((link) => (
              <li key={link}>
                <a
                  href='#'
                  className='text-black text-sm font-normal hover:text-[#166aea] mt-3'
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterLinks;
