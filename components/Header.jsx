"use client"
import { GanttChart, Languages, Search, Settings, UsersRound, X } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import Sidebar from './Sidebar';
import { SideBarData } from './Data/Sidebar';
import LinkButton from './LinkButton';

export default function Header() {

    const [menu, setMenu] = useState(false);
    const handleMenu = () => {
        setMenu(!menu)
    }

    return (
        <>
            <div className="sticky top-0 left-0 items-center justify-between hidden w-full px-5 py-4 shadow-sm md:flex bg-background">
                <div className="flex items-center w-full gap-2">
                    <button onClick={handleMenu} className="p-3 transition-colors duration-300 rounded-full lg:hidden hover:bg-gray-50 text-primary-text"><GanttChart size={18} /></button>
                    <form className="relative w-full max-w-lg lg:max-w-xl">
                        <input type="text" placeholder="Search..." className="w-full p-4 pr-16 outline-none bg-secondary text-secondary-text rounded-2xl" />
                        <button className="absolute p-4 duration-300 -translate-y-1/2 rounded-full hover:bg-primary text-primary-text top-1/2 right-1">
                            <Search size={18} />
                        </button>
                    </form>
                </div>
                <div className="flex items-center gap-1">
                    <Link href={"/"} className="p-3 transition-colors duration-300 rounded-full hover:bg-gray-50 text-primary-text"><Languages size={18} /></Link>
                    <Link href={"/Settings"} className="p-3 transition-colors duration-300 rounded-full hover:bg-gray-50 text-primary-text"><Settings size={18} /></Link>
                    <Link href={"/Profile"} className="p-3 transition-colors duration-300 rounded-full hover:bg-gray-50 text-primary-text"><UsersRound size={18} /></Link>
                </div>
            </div>

            <div className="sticky top-0 left-0 flex items-center justify-between w-full px-2 py-3 shadow-sm md:hidden bg-background">
                <div className="flex">
                    <button onClick={handleMenu} className="p-3 transition-colors duration-300 rounded-full hover:bg-gray-50 text-primary-text"><GanttChart size={18} /></button>
                    <button className="p-3 transition-colors duration-300 rounded-full hover:bg-gray-50 text-primary-text"><Search size={18} /></button>
                </div>
                <div className="flex items-center">
                    <Link href={"/"} className="p-3 transition-colors duration-300 rounded-full hover:bg-gray-50 text-primary-text"><Languages size={18} /></Link>
                    <Link href={"/Settings"} className="p-3 transition-colors duration-300 rounded-full hover:bg-gray-50 text-primary-text"><Settings size={18} /></Link>
                    <Link href={"/Profile"} className="p-3 transition-colors duration-300 rounded-full hover:bg-gray-50 text-primary-text"><UsersRound size={18} /></Link>
                </div>
            </div>

            <div className={`fixed text-white lg:hidden h-full bg-white top-0 flex w-full overflow-y-auto gap-10 flex-col transition-all duration-1000 ease-in-out p-5 ${!menu ? "left-[-100%]" : "left-0"}`}>
                <div className="flex items-center justify-between">
                    <img onClick={handleMenu} src="/Logo/psblack.png" alt="Parth Studio" width={80} />
                    <button onClick={handleMenu} className="p-3 transition-colors duration-300 rounded-full hover:bg-gray-50 text-primary-text"><X size={18} /></button>
                </div>
                {SideBarData.map((data, index) => (
                    <div key={index} className="flex flex-col w-full gap-2">
                        <h1 className="text-xs font-bold text-gray-400">{data.Title}</h1>
                        {data.Menu.map((item, index) => (
                            <LinkButton href={item.href} key={index}>{item.Icon}{item.Title}</LinkButton>
                        ))}
                    </div>
                ))}
            </div>

        </>
    )
}