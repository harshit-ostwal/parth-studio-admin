"use client"
import { User2 } from 'lucide-react'
import { useSession } from 'next-auth/react'
import React from 'react'

export default function page() {

  const { data: session } = useSession()

  return (
    <>
      <div className="h-full p-5 w-full flex flex-col items-center justify-center pt-20 pb-20 lg:pt-0 lg:pb-0">
        <span className="bg-primary rounded-full p-5"><User2 size={56} /></span>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-VisbyRoundBold mt-5">Account Information</h1>
        <h2 className="md:text-lg lg:text-xl font-VisbyRoundBold mt-10">Name : <span>{session?.user?.name}</span></h2>
        <h2 className="md:text-lg lg:text-xl font-VisbyRoundBold mt-2">Email : <span>{session?.user?.email}</span></h2>
      </div>
    </>
  )
}