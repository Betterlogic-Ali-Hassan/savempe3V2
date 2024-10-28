import Link from "next/link";
import React from "react";
import MenuItem from "./MenuItem";
import Languages from "./Languages";

const Navbar = () => {
  return (
    <header
      className='px-5 bg-white h-[72px] border-b fixed w-full flex items-center justify-between'
      style={{ zIndex: "1000" }}
    >
      <nav className='flex items-center h-full'>
        <Link href='/'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='75'
            height='30'
            fill='none'
          >
            <g fill='#000' clip-path='url(#Logo_svg__a)'>
              <path d='M75 0h-4.142c-1.15 0-2.224.57-2.87 1.52l-5.54 8.174a.372.372 0 0 1-.615 0l-5.54-8.173A3.46 3.46 0 0 0 53.424 0h-4.143l9.87 14.56-9.815 14.477h4.143c1.149 0 2.223-.569 2.868-1.52l5.486-8.093a.372.372 0 0 1 .616 0l5.485 8.093a3.46 3.46 0 0 0 2.87 1.52h4.142L65.131 14.56zM40.758 2.97v26.067h1.98a2.97 2.97 0 0 0 2.97-2.97V0h-1.98a2.97 2.97 0 0 0-2.97 2.97M37.126 0h-1.762a4.15 4.15 0 0 0-4.051 3.233l-3.942 17.328-3.45-16.175c-.638-2.99-3.706-5.006-6.845-4.139-1.999.552-3.481 2.241-3.914 4.27L9.747 20.54 5.813 3.234A4.16 4.16 0 0 0 1.76 0H0l6.604 29.036h2.502a4.81 4.81 0 0 0 4.706-3.808l4.221-19.81a.54.54 0 0 1 .523-.424c.25 0 .471.178.523.423l4.226 19.812a4.81 4.81 0 0 0 4.706 3.807h2.51z'></path>
            </g>
            <defs>
              <clipPath id='Logo_svg__a'>
                <path fill='#fff' d='M0 0h75v29.037H0z'></path>
              </clipPath>
            </defs>
          </svg>
        </Link>
        <ul className='flex items-center gap-4 ml-[40px] text-base h-full'>
          <MenuItem />
          <li className='px-3 '>
            <Link
              href='/about'
              className='hover:font-bold hover:tracking-[-0.4px]'
            >
              Pricing
            </Link>
          </li>
          <li className='mx-3'>
            <div className='h-5 w-[1px] bg-[#c0c2ce]'></div>
          </li>
          <li className='px-3 '>
            <Link
              href='/about'
              className='hover:font-bold font-normal hover:tracking-[-0.4px]'
            >
              Wix Studio
            </Link>
          </li>
          <li className='px-3 '>
            <Link
              href='/about'
              className='hover:font-bold font-normal hover:tracking-[-0.4px]'
            >
              Enterprise
            </Link>
          </li>
        </ul>
      </nav>
      <div className='flex items-center gap-4'>
        <Languages />
        <div className='bg-[#b9b9bd] h-5 w-[1px]'></div>
        <Link
          href='/login'
          className='text-base underline hover:text-[#166aea]'
        >
          Login
        </Link>
        <Link
          href='#'
          className='bg-[#166aea] py-2 px-[30px] rounded-full text-white hover:bg-[#2D83FF]'
        >
          Get Started
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
