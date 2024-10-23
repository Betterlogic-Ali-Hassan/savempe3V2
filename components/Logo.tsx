import Image from "next/image";

export default function Logo() {
  return (
    <div>
      <Image src='/logo.webp' alt='logo' height={38} width={167} />
    </div>
  );
}
