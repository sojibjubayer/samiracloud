"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Text Color logic based on scroll state
  const textColor = scrolled ? "text-white" : "text-slate-900";
  const subTextColor = scrolled ? "text-slate-400" : "text-slate-500";
  const navLinkColor = scrolled ? "text-slate-300 hover:text-white" : "text-slate-600 hover:text-blue-600";
  const logoBg = scrolled ? "bg-white" : "bg-slate-950";

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-100 transition-all duration-500 ${
        scrolled 
          ? "border-b border-white/10 bg-slate-950/90 backdrop-blur-xl py-3 shadow-2xl" 
          : "bg-transparent py-6"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        
        {/* Logo Section */}
        <Link href="/" className="group flex items-center gap-3">
          <div className={`relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl transition-all duration-300 group-hover:scale-110 ${logoBg}`}>
            <Image
              src="/logo.webp"
              alt="Samira Cloud Icon"
              width={32}
              height={32}
              className={`relative z-10 object-contain p-1 ${!scrolled && "invert"}`}
            />
            <div className="absolute inset-0 bg-pink-500 opacity-0 blur-md transition-opacity group-hover:opacity-20" />
          </div>

          <div className="flex flex-col">
            <p className={`text-sm font-black tracking-tight leading-tight uppercase transition-colors duration-300 ${textColor}`}>
              <span className="text-pink-500">Samira</span> <span className="text-blue-500">Cloud</span>
            </p>
            <p className={`text-[9px] font-bold uppercase tracking-[0.2em] leading-tight transition-colors duration-300 ${subTextColor}`}>
              Qatar • Digital
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-10 md:flex">
          {links.map((link) => {
            const isActive = pathname === link.href;
            
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-[13px] font-bold uppercase tracking-widest transition-all duration-300 ${
                  isActive ? "text-blue-500" : navLinkColor
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1.5 left-0 h-0.5 bg-linear-to-r from-blue-500 to-pink-500 transition-all duration-300 ${
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </Link>
            );
          })}
        </div>

        {/* Action Button - Inverts colors based on scroll */}
        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/contact"
            className={`group relative flex items-center gap-2 overflow-hidden rounded-xl px-6 py-2.5 text-xs font-black uppercase tracking-widest transition-all active:scale-95 ${
              scrolled 
                ? "bg-white text-slate-950" 
                : "bg-slate-950 text-white shadow-xl shadow-slate-200"
            }`}
          >
            <span className="relative z-10">Get Quote</span>
            <ArrowRight size={14} className="relative z-10 transition-transform group-hover:translate-x-1" />
            <div className="absolute inset-0 -translate-x-full bg-blue-500/10 transition-transform duration-300 group-hover:translate-x-0" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`rounded-xl p-2 transition-colors md:hidden ${
            scrolled ? "text-white bg-white/5" : "text-slate-900 bg-slate-100"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute inset-x-0 top-full flex flex-col space-y-4 border-b border-white/10 bg-slate-950 p-8 shadow-2xl md:hidden animate-in slide-in-from-top duration-300">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-xl font-bold uppercase tracking-tighter ${
                pathname === link.href ? "text-blue-400" : "text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center rounded-xl bg-linear-to-r from-blue-600 to-pink-600 py-4 text-center font-black uppercase tracking-widest text-white"
          >
            Start Your Project
          </Link>
        </div>
      )}
    </header>
  );
}