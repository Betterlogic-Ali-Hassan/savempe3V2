import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className='flex items-center gap-6'>
      <Image src='/logo.webp' alt='logo' width={167} height={38} />
      <span className='text-sm font-semibold border-2 border-white p-2 rounded-full'>
        Ad-Free Always
      </span>
    </div>
  );
};

export default Logo;
