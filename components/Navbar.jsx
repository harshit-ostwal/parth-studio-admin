"use client"
import Image from 'next/image'
import React from 'react'
import { LogOut } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {

  return (
    <>
      <div className="fixed top-0 left-0 z-[100] bg-primary text-secondary w-full h-28 flex items-center justify-between p-5">
        <Link href={"/"}><Image src={"/Logo/psblack.png"} quality={100} width={80} height={88} loading="lazy" alt='Parth Studio' /></Link>
        <button className="px-6 lg:px-8 py-3 bg-secondary hover:bg-white hover:text-secondary text-primary font-VisbyRoundMedium rounded flex gap-2 items-center transition-colors duration-300"><LogOut size={24} />Logout</button>
      </div>
    </>
  )
}