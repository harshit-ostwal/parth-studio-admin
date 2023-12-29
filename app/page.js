import CardsData from '@/components/Data/Card'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <>
      <div className="h-full p-5 md:p-10 lg:p-20 w-full mt-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-10">
          {CardsData.map((data, index) => (
            <Link href={data.href} key={index} className="max-w-sm rounded overflow-hidden shadow-lg bg-card">
              <div className="flex flex-col items-center justify-center py-10 gap-5">
                <div className="bg-primary p-5 rounded-full">{data.icon}</div>
                <h1 className="text-2xl font-GilroySemibold">{data.title}</h1>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}