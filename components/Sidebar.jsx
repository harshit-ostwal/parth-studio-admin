"use client"
import React, { useState } from 'react'
import { Separator } from './ui/separator'
import { GanttChart, LogOut, X } from 'lucide-react'
import { signOut, useSession } from 'next-auth/react'
import { SideBarData } from './Data/Sidebar';
import Link from 'next/link';
import { Skeleton } from './ui/skeleton'

export default function Sidebar() {

  const { data: session } = useSession();
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  }

  return (
    <>
      <div className={`fixed top-0 left-0 p-5 md:sticky md:max-w-xs md:p-2 flex duration-1000 flex-col justify-between w-full h-full gap-10 overflow-y-auto bg-background text-background-text ${!menu ? "left-[-100%]" : "left-0"}`}>
        <div className="flex flex-col justify-between gap-10">
          <div className="flex items-center justify-between">
            <Link className="w-auto h-auto" href={"/"} onClick={() => setMenu(false)}>
              <img src="/Logo/ps.png" width={80} alt="Parth Studio" />
            </Link>
            <button onClick={handleMenu} className="flex md:hidden"><X /></button>
          </div>
          <div className="h-full space-y-5">
            {SideBarData.map((data, index) => (
              <div key={index}>
                <h6 className="mb-5 text-xs font-semibold tracking-tighter text-secondary">{data.Title}</h6>
                {data.Menu.map((menu, index) => (
                  <Link href={menu.href} onClick={() => setMenu(false)} key={index} className="flex items-center gap-5 p-4 text-sm hover:bg-hover rounded-xl text-secondary-text">
                    <span>{menu.Icon}</span>
                    <span>{menu.Title}</span>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <button onClick={() => signOut()} className="flex items-center gap-5 p-4 text-sm hover:bg-hover rounded-xl text-secondary-text"><LogOut />Logout</button>
          <Separator />
          <div className="flex gap-3">
            {session ?
              <>
                <img src="/Avatar.jpg" alt={session?.user?.name} loading="eager" className="rounded-full" width={60} />
                <div className="flex flex-col items-start justify-center overflow-hidden">
                  <h1 className="font-semibold capitalize text-secondary-text">{session?.user?.name}</h1>
                  <p className="text-xs lowercase text-secondary">{session?.user?.email}</p>
                </div>
              </> :
              <>
                <Skeleton className="w-[60px] h-[60px] rounded-full" />
                <div className="flex flex-col gap-2 items-center justify-center">
                  <Skeleton className="px-20 py-2 rounded-md" />
                  <Skeleton className="px-20 py-2 rounded-md" />
                </div>
              </>
            }
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-5 px-5 py-4 md:hidden">
        <Link className="w-auto h-auto" href={"/"}>
          <img src="/Logo/ps.png" width={80} alt="Parth Studio" />
        </Link>
        <button onClick={handleMenu} ><GanttChart /></button>
      </div >
    </>
  )
}