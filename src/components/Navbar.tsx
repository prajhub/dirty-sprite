"use client"

import Link from "next/link"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

import { Inter } from 'next/font/google'
 
const inter = Inter({ subsets: ['latin'] })


export default function Navbar() {
    return (
        <div className="bg-[#9754CB]">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link href='/'>
        <div  className={inter.className} >

          <h1 className="text-3xl tracking-wide text-white font-semibold">DirtySprite</h1>
        </div>
        </Link>
        <ul className="flex items-center space-x-4">
          <li>
            <Link href="#contact" className="text-gray-300 hover:text-white">Home</Link>
          </li>
          <li>
          <HoverCard>
  <HoverCardTrigger className="text-gray-300 hover:text-white hover:cursor-pointer">Products</HoverCardTrigger>
  <HoverCardContent>
   <div>
    <h3 className="text-md font-semibold">All products</h3>

    <div className="flex mt-1 flex-col gap-1 group">
      <Link href='/electronics'>
      <span className="text-sm text-gray-900 hover:text-gray-600 hover:cursor-pointer hover:underline">Electronics</span>
      </Link>
      <Link href='/jewelery'>
      <span className="text-sm text-gray-900 hover:text-gray-600 hover:cursor-pointer hover:underline">Jewelery</span>
      </Link>
      <Link href='/menwear'>
      <span className="text-sm text-gray-900 hover:text-gray-600 hover:cursor-pointer hover:underline">Men's wear</span>
      </Link>
      <Link href='/womenwear'>
      <span className="text-sm text-gray-900 hover:text-gray-600 hover:cursor-pointer hover:underline">Women's wear</span>
      </Link>
      
    </div>
   </div>
  </HoverCardContent>
</HoverCard>

</li>


          <li>
            <Link href="#products" className="text-gray-300 hover:text-white">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
    )
}