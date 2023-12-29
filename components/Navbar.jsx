"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { Slant as Hamburger } from 'hamburger-react'
import { LogOut } from 'lucide-react';
import Menu from './Menu';

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 z-[100] bg-primary text-secondary w-full h-28 flex items-center justify-between p-5">
        <Image src={"/Logo/psblack.png"} quality={100} width={80} height={88} loading="lazy" alt='Parth Studio' />

        <div className="flex gap-2 items-center">
          <button className="px-6 lg:px-8 py-3 bg-secondary hover:bg-white hover:text-secondary text-primary font-GilroySemibold rounded flex gap-2 items-center transition-colors duration-300"><LogOut size={24} />Logout</button>
          <Hamburger color="#222222" duration={0.8} size={24} rounded toggled={isOpen} toggle={setOpen} />
        </div>
      </div>

      {isOpen ? <Menu isOpen={isOpen} /> : <Menu isOpen={isOpen} />}

    </>
  )
}