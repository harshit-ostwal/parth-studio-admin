import React from 'react'

export default function Footer() {
  const date = new Date().getFullYear();
  return (
    <>
      <div className="bg-secondary w-full h-20 text-primary font-VisbyRoundMedium flex items-center justify-center">
        <h1 className="text-sm md:text-base">Copyright © {date} Built By Harshit Ostwal</h1>
      </div>
    </>
  )
}
