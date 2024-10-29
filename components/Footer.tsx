import Link from "next/link";
import FooterLinks from "./FooterLinks";
import FooterAccordion from "./FooterAccordion";
import SocialIcons from "./SocialIcons";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className='bg-background text-foreground mt-[100px]  '>
      <nav className='flex items-center flex-col'>
        <div className='min-[1366px]:w-[1248px] xl:w-[1184px] xl:gap-[48px]  max-xl:flex-col  min-[1366px]:gap-[66px] flex  py-[54px] max-[1279px]:w-[647px] max-[750px]:w-full max-[750px]:py-[48px] max-[750px]:px-[30px] '>
          <FooterLinks />
          <FooterAccordion />
          <div className='xl:max-w-[224px] w-full'>
            <Logo />
            <p className='md:mt-[36px] mt-6 text-sm text-[#2f2f30] leading-[24px]'>
              The Wix website builder offers a complete solution from
              enterprise-grade infrastructure and business features to advanced
              SEO and marketing tools–enabling anyone to create and grow online.
            </p>
            <ul className='flex flex-col gap-[6px] mt-[30px] text-sm font-medium max-md:hidden'>
              <Link href='#' className='hover:text-[#166aea]'>
                About
              </Link>
              <Link href='#' className='hover:text-[#166aea]'>
                Contact
              </Link>
            </ul>
            <div className='hidden md:flex space-x-4 mb-6 mt-3 xl:hidden'>
              <SocialIcons />
            </div>
          </div>
        </div>
        <div className='border-t w-full'>
          <div className='min-[1366px]:w-[1248px]   min-[1280px]:w-[1184px] min-[750px]:w-[647px] my-[30px] mx-auto flex md:items-center max-md:flex-col '>
            <div className=' xl:flex  mb-3 md:mb-0 md:hidden flex px-[20px]'>
              <SocialIcons />
            </div>
            <div className='flex md:items-center justify-between xl:justify-end px-[30px] max-md:flex-col flex-1 gap-2 md:gap-[42px]'>
              <ul className='flex items-center gap-[18px] flex-wrap'>
                <Link
                  href='#'
                  className='text-sm hover:text-[#166aea] font-medium'
                >
                  Terms of Use
                </Link>
                <Link
                  href='#'
                  className='text-sm hover:text-[#166aea] font-medium'
                >
                  Privacy Policy
                </Link>
              </ul>
              <span className='text-sm  font-medium'>
                © 2006-2024 Wix.com, Inc
              </span>
            </div>
          </div>
        </div>
      </nav>
    </footer>
  );
}
