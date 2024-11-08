import type { Metadata } from "next";
import "./globals.css";
import { Wix_Madefor_Display as Wix } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import { Cabin } from "next/font/google";

// const cabin = Cabin({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
// });
const wix = Wix({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${wix.className} antialiased min-h-screen flex flex-col  `}
      >
        <Navbar />
        <main className='flex-grow mb-[100px]  text-white'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
