import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import React from 'react'

export default function Display({ children }) {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex flex-col w-full h-full">
                <Header />
                <div className="p-5">
                    {children}
                </div>
                <Footer />
            </div>
        </div>
    )
}