import Cards from '@/components/Cards'
import CardsData from '@/components/Data/Settings'
import React from 'react'

export default function page() {
  return (
    <>
      <div className="h-full p-5 md:p-10 lg:p-20 w-full">
        <Cards CardsData={CardsData}/>
      </div>
    </>
  )
}