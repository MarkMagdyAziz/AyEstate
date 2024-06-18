import Image from 'next/image'
import React from 'react'
import { Playball } from 'next/font/google'

const playPoll = Playball({
  weight: '400',
   subsets: ['latin']
  })

function Navbar() {
  return (
    <nav className={`flex justify-between bg-white p-5 w-full`} style={playPoll.style}>
        <h5 className='text-[28px] leading-9'>
        AyEstate
            </h5>
            <img
              width={24}
              height={24}
              src="/menu.svg"
              alt="menu icon"
            />
            </nav>
  )
}

export default Navbar