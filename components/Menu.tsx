"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import React from "react";
import { IoChevronDownOutline } from "react-icons/io5";
const Menu = ({
  trigger,
  children,
}: {
  trigger: string;
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleToggle = () => setIsOpen(true);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger
        className='flex items-center gap-[5px] px-3 h-full'
        onClick={handleToggle}
      >
        <span
          className={cn(
            "flex items-center pt-1 border-b-[4px] border-transparent h-full hover:font-bold hover:tracking-[-0.3px]",
            isOpen && "border-b-[4px] border-black font-bold"
          )}
        >
          {trigger}
        </span>
        <IoChevronDownOutline size={18} className='mt-[3.5px]' />
      </SheetTrigger>

      <SheetContent className='flex '>{children}</SheetContent>
    </Sheet>
  );
};

export default Menu;
