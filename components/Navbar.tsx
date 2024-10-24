import { Button } from "./ui/button";
import Logo from "./Logo";
import { HiSearch } from "react-icons/hi";
import { MdOutlineLockPerson } from "react-icons/md";

const Navbar = () => {
  return (
    <header className='bg-black min-h-[100px] text-white flex items-center relative justify-between px-6 header'>
      <Logo />
      <nav className='relative'>
        <ul className='flex items-center text-2xl font-bold relative'>
          <li className='mr-4'>
            <a
              href='#'
              className='opacity-50 hover:opacity-100 transition-all duration-500'
            >
              Personal
            </a>
          </li>
          <li className='mr-4'>
            <a
              href='#'
              className='opacity-50 hover:opacity-100 transition-all duration-500 item2 '
            >
              Business
            </a>
          </li>
          <li className='mr-4'>
            <a
              href='#'
              className='opacity-50 hover:opacity-100 transition-all duration-500'
            >
              Wholesale
            </a>
          </li>
          <li>
            <a
              href='#'
              className='opacity-50 hover:opacity-100 transition-all duration-500'
            >
              Help Centre
            </a>
          </li>
        </ul>
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

export default Navbar;
