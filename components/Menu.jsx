import Link from 'next/link'
import React from 'react'

export default function Menu({ isOpen }) {
    return (
        <>
            <div className={isOpen ? `fixed top-0 left-0 z-[99] duration-1000 bg-primary flex justify-center items-center w-full h-screen` : `fixed flex justify-center items-center top-[-100%] left-0 z-[99] duration-1000 bg-primary w-full h-screen`}>
                <Link href={"/films"} className="bg-secondary px-8 py-4 rounded text-primary">Films</Link>
            </div>
        </>
    )
}