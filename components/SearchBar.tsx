import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const SearchBar = () => {
  return (
    <div className='mt-10 flex items-center justify-between bg-white  min-h-[6rem] rounded-[12px] px-6'>
      <Input
        placeholder='Paste your single video, Channel and Playlist link here'
        className='text-black text-xl bg-transparent w-full border-none shadow-none'
      />
      <Button className='bg-[#166aea]  text-white h-[52px] px-[30px]  hover:bg-[#2D83FF] '>
        Paste Link
      </Button>
    </div>
  );
};

export default SearchBar;
