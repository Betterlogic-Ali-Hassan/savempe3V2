import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <>
      <Image src='/logo.webp' alt='logo' width={167} height={38} />
    </>
  );
};

export default Logo;
