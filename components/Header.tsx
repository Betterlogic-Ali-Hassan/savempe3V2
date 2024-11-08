"use client";
import React, { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";

import { HiSearch } from "react-icons/hi";
import { MdOutlineLockPerson } from "react-icons/md";
import Logo from "./Logo";

const Header = () => {
  const [hovered, setHovered] = useState("personal"); // Active by default
  const [underlineStyle, setUnderlineStyle] = useState({
    width: "0px",
    left: "0px",
  });
  const navRef = useRef<HTMLDivElement | null>(null);

  const handleMouseEnter = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e: any,
    section: React.SetStateAction<string>
  ) => {
    setHovered(section);

    if (navRef.current) {
      const navRect = navRef.current.getBoundingClientRect();
      const linkRect = e.target.getBoundingClientRect();

      const width = linkRect.width;
      const left = linkRect.left - navRect.left;

      setUnderlineStyle({ width: `${width}px`, left: `${left}px` });
    }
  };

  const handleMouseLeave = () => {
    const defaultElement = document.querySelector(`a[data-section="personal"]`);
    if (defaultElement && navRef.current) {
      const navRect = navRef.current.getBoundingClientRect();
      const linkRect = defaultElement.getBoundingClientRect();

      setUnderlineStyle({
        width: `${linkRect.width}px`,
        left: `${linkRect.left - navRect.left}px`,
      });
    }
  };

  useEffect(() => {
    const defaultElement = document.querySelector(`a[data-section="personal"]`);
    if (defaultElement && navRef.current) {
      const navRect = navRef.current.getBoundingClientRect();
      const linkRect = defaultElement.getBoundingClientRect();

      setUnderlineStyle({
        width: `${linkRect.width}px`,
        left: `${linkRect.left - navRect.left}px`,
      });
    }
  }, []);

  return (
    <header className='bg-black min-h-[100px] text-white flex items-center justify-between px-6'>
      <Logo />
      <nav ref={navRef} className='relative'>
        <ul className='flex items-center text-2xl font-bold relative'>
          <li className='mr-4'>
            <a
              href='#'
              data-section='personal'
              className={`pb-1 relative text-white  ${
                hovered === "personal" ? "text-white" : ""
              } transition-all duration-500`}
              onMouseEnter={(e) => handleMouseEnter(e, "personal")}
              onMouseLeave={handleMouseLeave}
            >
              Personal
            </a>
          </li>
          <li className='mr-4'>
            <a
              href='#'
              data-section='business'
              className={`pb-1 relative hover:opacity-100 opacity-50 ${
                hovered === "business" ? "text-white" : ""
              } transition-all duration-500`}
              onMouseEnter={(e) => handleMouseEnter(e, "business")}
              onMouseLeave={handleMouseLeave}
            >
              Business
            </a>
          </li>
          <li className='mr-4'>
            <a
              href='#'
              data-section='wholesale'
              className={`pb-1 relative hover:opacity-100 opacity-50 ${
                hovered === "wholesale" ? "text-white" : ""
              } transition-all duration-500`}
              onMouseEnter={(e) => handleMouseEnter(e, "wholesale")}
              onMouseLeave={handleMouseLeave}
            >
              Wholesale
            </a>
          </li>
          <li>
            <a
              href='#'
              data-section='help'
              className={`pb-1 relative hover:opacity-100 opacity-50 ${
                hovered === "help" ? "text-white" : ""
              } transition-all duration-500`}
              onMouseEnter={(e) => handleMouseEnter(e, "help")}
              onMouseLeave={handleMouseLeave}
            >
              Help Centre
            </a>
          </li>
        </ul>

        {/* Dynamic Underline */}
        <div
          className={`absolute bottom-0 h-[4px] bg-white transition-all duration-500`}
          style={{
            width: underlineStyle.width,
            left: underlineStyle.left,
          }}
        ></div>
      </nav>
      <div className='flex items-center '>
        <a
          href='#'
          data-section='about'
          className={`hover:opacity-100 opacity-50 text-2xl font-bold mr-4 transition duration-300 ease-in-out ${
            hovered === "about" ? "text-white" : ""
          }`}
          onMouseEnter={(e) => handleMouseEnter(e, "about")}
          onMouseLeave={handleMouseLeave}
        >
          About Us
        </a>
        <button aria-label='Search' className='text-white mr-4'>
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
