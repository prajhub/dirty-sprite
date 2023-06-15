"use client"
import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
    return (
        <div className="bg-[#9754CB]">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link href='/'>
        <div className="flex items-center">
          <Image src="logo.png" alt="Logo" className="w-8 h-8 mr-2" />
          <span className="text-lg text-white font-semibold">Dirtysprite</span>
        </div>
        </Link>
        <ul className="flex items-center space-x-4">
          <li>
            <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
          </li>
          <li>
            <a href="#products" className="text-gray-300 hover:text-white">Products</a>
          </li>
          <li>
            <a href="#products" className="text-gray-300 hover:text-white">Products</a>
          </li>
        </ul>
      </nav>
    </div>
    )
}