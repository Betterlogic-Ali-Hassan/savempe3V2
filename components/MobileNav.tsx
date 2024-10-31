import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SlMenu } from "react-icons/sl";
import MobileNavMenu from "./MobileNavMenu";
import Link from "next/link";
import Logo from "./Logo";
import { X } from "lucide-react";
import Languages from "./Languages";
import Btn from "./Btn";
const MobileNav = () => {
  return (
    <div className=' xl:hidden '>
      <Dialog>
        <DialogTrigger>
          <SlMenu size={22} />
        </DialogTrigger>
        <DialogContent
          className='h-screen min-w-full inline-flex flex-col px-0 gap-0 pt-0 max-[400px]:py-5 overflow-y-auto'
          style={{ zIndex: "1100" }}
        >
          <div className='border-b px-5 min-h-[54px] pb-2  flex w-full items-center justify-between'>
            <Logo />
            <DialogClose>
              <X size={24} />
            </DialogClose>
          </div>
          <MobileNavMenu />
          <Link href='#' className=' py-5 px-[4vw] w-full max-sm:text-sm'>
            Pricing
          </Link>
          <Link
            href='#'
            className=' py-5 px-[4vw] w-full border-b max-sm:text-sm'
          >
            Mobile App
          </Link>
          <Link href='#' className=' py-5 px-[4vw] w-full max-sm:text-sm'>
            Wix Studio
          </Link>
          <Link
            href='#'
            className=' py-5 px-[4vw] w-full border-b max-sm:text-sm'
          >
            Enterprise
          </Link>
          <Languages mobile />
          <div className='flex gap-4 px-[4vw] min-[400px]:mt-auto mt-2  min-[400px]:border-t'>
            <Link
              href='#'
              className='border border-black py-2 px-[30px] rounded-full mt-4 hover:bg-[#f2f2f2]'
            >
              Log In
            </Link>
            <Btn className='mt-4' />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MobileNav;
