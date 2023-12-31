"use client"
import Image from 'next/image'
import React from 'react'
import { LogOut } from 'lucide-react';
import Link from 'next/link';
import Button from './Button';
import { signOut } from 'next-auth/react';

export default function Navbar() {

  return (
    <>
      <div className="sticky top-0 left-0 z-[100] bg-primary w-full h-28 flex items-center justify-between p-5">
        <Link href={"/"}><Image src={"/Logo/psblack.png"} quality={100} width={80} height={88} priority alt='Parth Studio' /></Link>
        <Button onClick={() => signOut()} variant="secondary" size={"lg"} ><LogOut size={18} />Logout</Button>
      </div>
    </>
  )
}