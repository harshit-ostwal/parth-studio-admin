import React from 'react'

export default function Footer() {
    const todayDate = new Date().getFullYear();
    return (
        <>
            <div className="flex justify-center w-full py-4 bg-background text-background-text rounded-lg font-Nunito">
                <h1 className="font-semibold">Copyright © {todayDate} Built By Harshit Ostwal</h1>
            </div>
        </>
    )
}