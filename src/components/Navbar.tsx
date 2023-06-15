"use client"
import Image from "next/image"
import Link from "next/link"
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
            <a href="#contact" className="text-gray-300 hover:text-white">Home</a>
          </li>
          <li>
            <a href="#products" className="text-gray-300 hover:text-white">Products</a>
          </li>
          <li>
            <a href="#products" className="text-gray-300 hover:text-white">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
    )
}