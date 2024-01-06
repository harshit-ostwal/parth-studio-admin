"use client";
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Display({ children }) {
    const pathname = usePathname();
    const path = pathname === "/SignIn" || pathname === "/Settings/Users/SignUp"
    return (
        <>
            {path ? (children) : (
                <div className="h-full lg:h-screen w-full font-VisbyRound flex flex-col">
                    <Navbar />
                    <div className="flex-1">
                        {children}
                    </div>
                    <Footer />
                </div>
            )}
        </>
    )
}