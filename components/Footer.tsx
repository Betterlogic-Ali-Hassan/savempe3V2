import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import Logo from "./Logo";

export default function Component() {
  return (
    <footer className='bg-black  py-[60px]  text-white flex justify-center flex-col px-6'>
      <div className='flex items-start justify-between'>
        <Logo footerLogo />
        <nav className='flex items-center flex-col '>
          <ul className='flex items-center gap-6 mb-6 mt-3.5 font-semibold'>
            <Link
              href='/privacy-policy'
              className='hover:text-[#ddd] transition-colors'
            >
              Privacy Policy
            </Link>
            <Link href='/eula' className='hover:text-[#ddd] transition-colors'>
              EULA
            </Link>
            <Link
              href='/terms-of-service'
              className='hover:text-[#ddd] transition-colors'
            >
              Terms of Service
            </Link>
            <Link
              href='/contact-us'
              className='hover:text-[#ddd] transition-colors'
            >
              Contact Us
            </Link>
          </ul>
          <p>© 2024 Savemp3.net All rights reserved</p>
        </nav>

        <Link
          href='#'
          className=' transition p-2 hover:bg-white hover:text-black rounded-lg duration-200'
        >
          <FaFacebookF size={24} />

          <span className='sr-only'>Facebook</span>
        </Link>
      </div>
    </footer>
  );
}
