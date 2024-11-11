import { cn } from "@/lib/utils";
// import Image from "next/image";
import React from "react";

const Logo = ({ footerLogo }: { footerLogo?: boolean }) => {
  return (
    <div className='flex items-center gap-6'>
      <div className='flex items-center gap-2'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          xmlSpace='preserve'
          viewBox='0 0 447.9 447.9'
          height={40}
          width={40}
          color='red'
          fill='#ffff'
        >
          <path d='M203.8.5C184.1-3 168 11.6 168 31.5v206.2a108.5 108.5 0 1 0 47.1 169.7l-49.6-49.6c-15.1-15.1-11.7-28.9-9.5-34.1 2.1-5.3 9.5-17.4 30.9-17.4h18v-57a45.2 45.2 0 0 1 34.3-43.7v-81.8c140.2 0 131.8 84 115.4 132.2-6.5 18.9-2.6 22 10.9 7.4C536.5 77 298.4 16.6 203.8.4z'></path>
          <path d='M301 223.9h-51a25.4 25.4 0 0 0-25.5 25.5v76.5H187c-14.1 0-17.5 8-7.5 18l46.9 47 31.2 31.2a25.4 25.4 0 0 0 36 0l78.2-78.2c10-10 6.7-18-7.4-18h-37.7v-76.5c0-14.1-11.5-25.5-25.5-25.5z'></path>
        </svg>
        <span className='uppercase text-xl text-[white]'>
          Save <strong>MP3</strong>
        </span>
      </div>
      <span
        className={cn(
          "text-sm font-semibold border-2 border-white p-2 rounded-full max-[1500px]:hidden",
          footerLogo && "hidden"
        )}
      >
        Ad-Free Always
      </span>
    </div>
  );
};

export default Logo;
