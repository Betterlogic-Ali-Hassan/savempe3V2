"use client";
import React from "react";
import { Button } from "./ui/button";

import Logo from "./Logo";
import { HiSearch } from "react-icons/hi";
import { MdOutlineLockPerson } from "react-icons/md";

const Header = () => {
  const [offset, setOffset] = React.useState("675px");
  const [width, setWidth] = React.useState("90px");
  return (
    <header className='bg-black relative px-4'>
      <style jsx>{`
        .header::before {
          content: "";
          display: block;
          position: absolute;
          bottom: 24px;
          height: 4px;
          width: ${width};
          transform: translateX(${offset});
          background-color: #fff;
          transition: transform 0.5s ease;
          left: 0;
        }
      `}</style>
      <div
        className={`min-h-[100px] flex justify-between text-white items-center px-2 header `}
        style={{}}
      >
        <Logo />
        <nav className='min-[1440px]:ml-[120px]'>
          <ul className='flex items-center justify-center text-2xl font-bold'>
            <li className='mr-4'>
              <a href='#' className=' transition duration-300 ease-in-out'>
                Personal
              </a>
            </li>
            <li className='mr-4 '>
              <a
                onMouseEnter={() => setOffset("780px")}
                onMouseLeave={() => {
                  setOffset("675px");
                  setWidth("0px");
                  setWidth("90px");
                }}
                href='#'
                className='hover:opacity-100 opacity-50 transition duration-300 ease-in-out '
              >
                Business
              </a>
            </li>
            <li className='mr-4'>
              <a
                href='#'
                onMouseEnter={() => {
                  setOffset("890px");
                  setWidth("110px");
                }}
                onMouseLeave={() => {
                  setOffset("675px");
                  setWidth("90px");
                }}
                className='hover:opacity-100 opacity-50  transition duration-300 ease-in-out'
              >
                Wholesale
              </a>
            </li>
            <li>
              <a
                onMouseEnter={() => {
                  setOffset("1012px");
                  setWidth("122px");
                }}
                onMouseLeave={() => {
                  setOffset("675px");
                  setWidth("90px");
                }}
                href='#'
                className='hover:opacity-100 opacity-50  transition duration-300 ease-in-out'
              >
                Help Centre
              </a>
            </li>
          </ul>
        </nav>
        <div className='flex items-center '>
          <a
            onMouseEnter={() => {
              setOffset("1500px");
              setWidth("95px");
            }}
            onMouseLeave={() => {
              setOffset("675px");
              setWidth("90px");
            }}
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
            className='bg-white text-black hover:bg-[#E9E9E9] text-2xl font-bold transition-all duration-300 ease-in-out px-5 pt-4 pb-[14px] h-[56px] rounded-full gap-0 leading-[110%] tracking-[1px]'
          >
            LOG IN
            <MdOutlineLockPerson size={18} className='ml-1' />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
