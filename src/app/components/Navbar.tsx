"use client"
import Link from "next/link"
import { useState } from "react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-secondary text-secondary-content p-4 font-inter tracking-tighter">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="#home" className="font-bold text-2xl">Team Aedura</Link>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-6 items-center font-semibold">
          <Link href="#about-us" className="rounded-lg p-2">About Us</Link>
          <Link href="#offerings" className="rounded-lg p-2">Offerings</Link>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <div className="flex flex-col gap-4 items-center font-semibold">
            <Link href="#about-us" className="rounded-lg p-2" onClick={() => setIsOpen(false)}>About Us</Link>
            <Link href="#offerings" className="rounded-lg p-2" onClick={() => setIsOpen(false)}>Offerings</Link>
          </div>
        </div>
      )}
    </header>
  )
}
export default Navbar