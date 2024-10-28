import Link from "next/link";
import React from "react";
import MenuItem from "./MenuItem";
import Languages from "./Languages";
import Logo from "./Logo";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <header
      className='px-5 bg-white h-[72px] border-b fixed w-full flex items-center justify-between'
      style={{ zIndex: "1000" }}
    >
      <nav className='flex items-center h-full '>
        <Logo />
        <ul className='flex items-center gap-4 ml-[40px] text-base h-full max-xl:hidden'>
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
      <div className='flex items-center gap-4 max-xl:hidden'>
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
      <MobileNav />
    </header>
  );
};

export default Navbar;
