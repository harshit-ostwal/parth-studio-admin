"use client"
import Sidebar from '@/components/Sidebar';
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

export default function Display({ children }) {
    useEffect(() => {
        document.addEventListener("contextmenu", handleContext)
        return () => {
            document.removeEventListener("contextmenu", handleContext)
        }
    }, []);

    const handleContext = (e) => {
        e.preventDefault();
    }

    const pathname = usePathname();
    const path = pathname === "/SignIn"
    return (
        <>
            {path ? (children) : (
                <div className="flex flex-col w-full h-screen gap-2 md:p-5 md:flex-row">
                    <Sidebar />
                    <div className="w-full h-full p-5 overflow-y-auto bg-background-text text-background rounded-3xl">
                        {children}
                    </div>
                </div>
            )}
        </>

    )
}