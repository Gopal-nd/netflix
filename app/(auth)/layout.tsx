import React from 'react'
export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
<div className='relative  flex h-screen w-screen flex-col bg-black md:justify-center md:bg-transparent md:items-center'>{children}</div>
    );
  }
  