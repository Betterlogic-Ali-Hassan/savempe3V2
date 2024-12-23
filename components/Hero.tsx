"use client";
import React from "react";
import { Input } from "./ui/input";
import { HiSearch } from "react-icons/hi";
import { MdCancel } from "react-icons/md";
import { cn } from "@/lib/utils";

const Hero = () => {
  const [search, setSearch] = React.useState("");
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <section className=' pb-[90px] pt-[40px]   bg-[#ffe9ec]'>
      <div className=' flex flex-col items-center justify-center px-6'>
        <div className=' py-[55px] flex flex-col items-center justify-center'>
          <h1 className='min-[1440px]:text-[96px] text-[56px] font-bold text-[#D10210] pb-[7px] text-center leading-[110%] tracking-[-0.5px]'>
            Turn your Video into MP3
          </h1>
          <p className='min-[1440px]:text-[32px] text-2xl mt-[17px] text-center leading-[120%] w-[70%] max-[1440px]:w-[75%]'>
            Convert YouTube videos to MP3 effortlessly on SaveMP3. Paste your
            link, and download with ease!
          </p>
        </div>
        <div className='bg-white max-w-[1248px] h-[100px] min-[1440px]:h-[114px] flex items-center w-full border border-[#c4c4c4] px-6 py-3 rounded-[20px]'>
          <HiSearch size={48} className='mr-6 text-[#384048]' />
          <Input
            className='bg-transparent border-none outline-none shadow-none min-[1440px]:text-[28px] text-2xl font-normal h-full '
            placeholder='Paste your single video, Channel, or Playlist link here'
            value={search}
            onChange={handleSearchChange}
          />
          <button
            className={cn(
              " transition duration-300 transform scale-0",
              search !== "" && "scale-100"
            )}
            onClick={() => setSearch("")}
          >
            <MdCancel size={48} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
