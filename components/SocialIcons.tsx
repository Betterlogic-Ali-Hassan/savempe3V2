import { socialIcons } from "@/constant/SocialIconData";
import React from "react";

const SocialIcons = () => {
  return (
    <>
      {socialIcons.map((item, index) => (
        <a
          key={index}
          href='#'
          className=' h-9 w-9 rounded-full hover:bg-[#e5efff] flex items-center justify-center'
        >
          {item.icon}
        </a>
      ))}
    </>
  );
};

export default SocialIcons;
