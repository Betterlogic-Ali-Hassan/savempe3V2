import React from "react";
import Menu from "./Menu";
import { menuData } from "@/constant/menuData";
import Link from "next/link";
import MenuLinks from "./MenuLinks";

const MenuItem = () => {
  return (
    <>
      {menuData.map((item, index) => (
        <Menu trigger={item.label} key={index}>
          <MenuLinks item={item} />
          <div className='w-[35vw] bg-[#F7F7FD] pt-[32px] px-[5vw] pb-[120px] '>
            <div className='border-b pb-[15px] text-sm uppercase text-[#5e5e5e] font-normal'>
              <h4>ESSENTIALS</h4>
            </div>
            <div className='mt-[30px]  item-grid '>
              {item.categories[0].items.map((category, itemIndex) => (
                <div key={itemIndex}>
                  <Link href='#' className='group flex flex-col gap-3'>
                    <h5 className='text-lg font-bold group-hover:text-[#0F6BEE]'>
                      {category.item}
                    </h5>
                    <p className='text-base text-[#5e5e5e] leading-[24px] font-normal paragraph'>
                      {category.des}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </Menu>
      ))}
    </>
  );
};

export default MenuItem;
