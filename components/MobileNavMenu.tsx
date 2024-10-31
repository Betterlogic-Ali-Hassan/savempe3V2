"use client";
import React from "react";
import { menuData } from "@/constant/menuData";
import MenuLinks from "./MenuLinks";
import Link from "next/link";
import { IoChevronDownOutline } from "react-icons/io5";
import { cn } from "@/lib/utils";

const MobileNavMenu = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);
  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className='w-full '>
      {menuData.map((item, index) => (
        <div key={index}>
          <div
            className={cn(
              " flex items-center justify-between w-full py-5 px-[4vw] max-sm:text-sm",
              openIndex === index && "font-bold"
            )}
            onClick={() => handleToggle(index)}
          >
            {item.label}
            <IoChevronDownOutline size={18} />
          </div>
          {openIndex === index && (
            <div className=' mt-2'>
              <MenuLinks item={item} mobile />
              <div className='w-full bg-[#F7F7FD] pt-[30px] px-[4vw] pb-[40px]'>
                <div className='border-b pb-[15px] text-[13px] uppercase text-[#5e5e5e] font-normal'>
                  <h4>ESSENTIALS</h4>
                </div>
                <div className='mt-[30px]  flex sm:items-center gap-[30px] max-sm:flex-col '>
                  {item.categories[0].items.map((category, itemIndex) => (
                    <div key={itemIndex}>
                      <Link href='#' className='group flex flex-col gap-3'>
                        <h5 className='text-base font-bold group-hover:text-[#0F6BEE]'>
                          {category.item}
                        </h5>
                        <p className='text-xs text-[#5e5e5e] leading-[24px] font-normal paragraph'>
                          {category.des}
                        </p>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MobileNavMenu;
