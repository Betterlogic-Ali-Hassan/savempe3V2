import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { GoArrowRight } from "react-icons/go";

type MenuItem = {
  item: string;
  des: string;
};

type Category = {
  title: string;
  items: MenuItem[];
};

type MenuLinksProps = {
  item: {
    categories: Category[];
  };
  mobile?: boolean;
};

const MenuLinks: React.FC<MenuLinksProps> = ({ item, mobile }) => {
  return (
    <div
      className={cn(
        "flex  px-[4vw]  pt-[32px] pb-[120px] h-full",
        mobile && "pb-[60px]"
      )}
      style={{ width: mobile ? "100%" : "calc(100% - 35vw)" }}
    >
      {item.categories.map((category, categoryIndex) => (
        <div key={categoryIndex} style={{ flex: "3 0 0px" }}>
          <div
            className={cn(
              "border-b pb-[15px] text-sm uppercase text-[#5e5e5e] font-normal",
              mobile && "text-[13px]"
            )}
          >
            <h4>{category.title}</h4>
          </div>
          <div className='mt-[30px] item-grid pr-[30px]'>
            {category.items.map((item, itemIndex) => (
              <Link
                href='#'
                key={itemIndex}
                className='group flex flex-col gap-3'
              >
                <h5
                  className={cn(
                    "text-lg font-bold group-hover:text-[#0F6BEE] flex items-center gap-2",
                    mobile && "text-base"
                  )}
                >
                  {item.item}
                  <GoArrowRight className='group-hover:block hidden' />
                </h5>
                <p
                  className={cn(
                    "text-base text-[#5e5e5e] leading-[24px] font-normal paragraph",
                    mobile && "text-xs"
                  )}
                >
                  {item.des}
                </p>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuLinks;
