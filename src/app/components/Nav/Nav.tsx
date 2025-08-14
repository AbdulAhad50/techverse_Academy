"use client";
import Link from "next/link";
import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='bg-[#4B2BAA] px-6 md:px-[100px] flex justify-between items-center max-w-[1440px] h-[70px] font-["Montserrat"] relative'>
      
      {/* Logo */}
      <div>
        <h1 className="text-yellow-500 text-xl font-bold">TechVerse</h1>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:block">
        <ul className="flex gap-[2rem] text-white font-medium">
          <Link href={"/courses"}><li className="cursor-pointer hover:text-yellow-400">Courses</li></Link>
          <Link href={"/price"}><li className="cursor-pointer hover:text-yellow-400">Pricing</li></Link>
          <li className="cursor-pointer hover:text-yellow-400">Login</li>
          <li className="cursor-pointer hover:text-yellow-400">Sign up</li>
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-white text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <HiX /> : <HiMenu />}
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-[#270f71] shadow-lg md:hidden z-50">
          <ul className="flex flex-col items-center gap-4 py-6 text-white font-medium">
            <Link href={"/courses"}><li className="cursor-pointer hover:text-yellow-400">Courses</li></Link>
            <li className="cursor-pointer hover:text-yellow-400">Pricing</li>
            <li className="cursor-pointer hover:text-yellow-400">Login</li>
            <li className="cursor-pointer hover:text-yellow-400">Sign up</li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Nav;
