import { ArrowLeftIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function NotFound() {
    return (
        <>
            <div className="fixed top-0 left-0 z-[1600] h-full w-full font-VisbyRoundBold bg-primary gap-10 flex flex-col items-center justify-center">
                <div className="flex items-center gap-6 text-text">
                    <h1 className="text-2xl">404</h1>
                    <div className="border-r border-solid h-12 border-secondary"></div>
                    <h1>This page could not be found.</h1>
                </div>
                <Link href={"/"} className="flex text-text gap-3 animate-bounce"><ArrowLeftIcon color='#222222' size={24} /> Go back</Link>
            </div>
        </>
    )
}