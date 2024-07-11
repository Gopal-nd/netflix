import Image from "next/image";
import React from "react";
import logo from '../../public/netflix_logo.svg'
import background from "../../public/login_background.jpg";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative  flex h-screen w-screen flex-col bg-black md:justify-center md:bg-transparent md:items-center">
      <Image
        alt="bacground-image"
        fill
        src={background}
        priority
        className="hidden sm:flex -z-10 brightness-50  sm:object-cover  md:flex"
      />
      <Image
        alt="logo"
       width={120}
       height={120}
        src={logo}
        priority
        className=" absolute left-4 top-4 object-contain md:left-10 md:top-10 "
      />

      {children}
    </div>
  );
}
