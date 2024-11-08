import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const Btn = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <Link
      href='#'
      className={cn(
        "bg-[#166aea] py-2 px-[30px] rounded-full text-white  hover:bg-[#2D83FF] ",
        className
      )}
    >
      {children || "Get Started"}
    </Link>
  );
};

export default Btn;
