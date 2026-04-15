"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import this hook
import { Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Demos", href: "/demos" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get current route

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200/50 bg-white/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo Section */}
{/* Logo Section */}
<Link href="/" className="group flex items-center gap-3">
  <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-black transition-transform group-hover:scale-105">
    {/* Using Next.js Image Component for the Icon */}
    <Image
      src="/logo.webp" // Path to your logo icon file
      alt="Samira Cloud Icon"
      width={40}
      height={40}
      className="relative z-10 object-contain p-1.5"
    />
    
    {/* Pink Glow - Matches your brand palette */}
    <div className="absolute inset-0 bg-pink-400 opacity-0 blur-md transition-opacity group-hover:opacity-40"></div>
  </div>

  <div className="hidden flex-col sm:flex">
    <p className="text-sm font-bold tracking-tight text-black leading-tight">
      Samira Cloud
    </p>
    <p className="text-[10px] uppercase tracking-widest text-gray-500 leading-tight">
      Digital Systems • Qatar
    </p>
  </div>
</Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const isActive = pathname === link.href; // Check if active
            
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition-colors group ${
                  isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {link.label}
                {/* Active Indicator: Pink line stays full width if active, animate on hover otherwise */}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-pink-400 transition-all ${
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </Link>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="group flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition-all hover:bg-blue-700 hover:shadow-blue-300 active:scale-95"
          >
            Get Quote
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="rounded-lg p-2 text-gray-600 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute inset-x-0 top-full flex flex-col space-y-4 border-b border-gray-200 bg-white p-6 shadow-xl md:hidden">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-medium transition-colors ${
                  isActive ? "border-l-4 border-pink-400 pl-3 text-blue-600" : "text-gray-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="flex items-center justify-center rounded-xl bg-black py-4 text-center font-bold text-white"
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}