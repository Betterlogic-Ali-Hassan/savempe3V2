"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import Logo from "./Logo";
import { HiSearch } from "react-icons/hi";
import { MdOutlineLockPerson } from "react-icons/md";

const Header = () => {
  const [hovered, setHovered] = useState("personal");

  return (
    <header className='bg-black min-h-[100px] text-white flex items-center justify-between px-6'>
      <Logo />
      <nav className='relative'>
        <ul className='flex items-center text-2xl font-bold relative'>
          <li className='mr-4'>
            <a
              href='#'
              className={`pb-1 relative ${
                hovered === "personal" ? "text-white" : "opacity-50"
              } transition-all duration-500`}
            >
              Personal
            </a>
          </li>
          <li className='mr-4'>
            <a
              href='#'
              className={`pb-1 relative ${
                hovered === "business" ? "text-white" : "opacity-50"
              } transition-all duration-500`}
              onMouseEnter={() => setHovered("business")}
              onMouseLeave={() => setHovered("personal")}
            >
              Business
            </a>
          </li>
          <li className='mr-4'>
            <a
              href='#'
              className={`pb-1 relative ${
                hovered === "wholesale" ? "text-white" : "opacity-50"
              } transition-all duration-500`}
              onMouseEnter={() => setHovered("wholesale")}
              onMouseLeave={() => setHovered("personal")}
            >
              Wholesale
            </a>
          </li>
          <li>
            <a
              href='#'
              className={`pb-1 relative ${
                hovered === "help" ? "text-white" : "opacity-50"
              } transition-all duration-500`}
              onMouseEnter={() => setHovered("help")}
              onMouseLeave={() => setHovered("personal")}
            >
              Help Centre
            </a>
          </li>
        </ul>

        {/* Underline */}
        <div
          className={`absolute bottom-0 left-0 h-[4px] bg-white transition-all duration-500`}
          style={{
            width:
              hovered === "personal"
                ? "90px"
                : hovered === "business"
                ? "92px"
                : hovered === "wholesale"
                ? "105px"
                : "120px",
            transform:
              hovered === "personal"
                ? "translateX(0) "
                : hovered === "business"
                ? "translateX(108px) " // Adjust spacing
                : hovered === "wholesale"
                ? "translateX(215px) " // Adjust spacing
                : "translateX(340px)", // Adjust spacing for the next item
          }}
        ></div>
      </nav>
      <div className='flex items-center '>
        <a
          href='#'
          className='hover:opacity-100 opacity-50 text-2xl font-bold  mr-4 transition duration-300 ease-in-out'
        >
          About Us
        </a>
        <button aria-label='Search' className=' text-white mr-4'>
          <HiSearch size={40} />
        </button>
        <a href='#' className='text-white urdu_text mr-4'>
          العربية
        </a>
        <Button
          variant='outline'
          className='bg-white text-black hover:bg-[#E9E9E9] text-2xl font-bold transition-all duration-300 ease-in-out px-5 pt-4 pb-[14px] h-[56px] rounded-full gap-0'
        >
          LOG IN
          <MdOutlineLockPerson size={18} className='ml-1' />
        </Button>
      </div>
    </header>
  );
};

export default Header;
