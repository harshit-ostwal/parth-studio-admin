"use client"
import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Display({ children }) {
    const pathname = usePathname();
    const path = pathname === "/SignIn"
    return (
        <>
            {path ? (children) : (
                <div className="flex flex-col h-screen gap-2 md:p-5 md:flex-row">
                    <Sidebar />
                    <div className="w-full h-full p-5 bg-background-text text-background rounded-3xl">
                        {children}
                    </div>
                </div>
            )}
        </>

    )
}