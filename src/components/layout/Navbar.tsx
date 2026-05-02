"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";

const mainLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Web Development", href: "/services/web-development" },
  { label: "CRM Systems", href: "/services/crm-systems" },
  { label: "QR Attendance Systems", href: "/services/attendance-systems" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  const isServicesActive =
    pathname === "/services" || pathname.startsWith("/services/");

  const textColor = scrolled ? "text-white" : "text-slate-900";
  const subTextColor = scrolled ? "text-slate-400" : "text-slate-500";

  const navLinkColor = scrolled
    ? "text-slate-300 hover:text-white"
    : "text-slate-600 hover:text-blue-600";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-100 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-slate-950/90 py-3 shadow-2xl backdrop-blur-xl"
          : "bg-transparent py-5 sm:py-6"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* LOGO */}
        <Link href="/" className="group flex min-w-0 items-center gap-3">
          <div
            className={`relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl border transition-all duration-300 group-hover:scale-105 ${
              scrolled
                ? "border-white/10 bg-white/5"
                : "border-white/20 bg-slate-950/90 shadow-lg"
            }`}
          >
            <Image
              src="/logo.png"
              alt="Samira Cloud Logo"
              width={44}
              height={44}
              priority
              className="relative z-10 h-9 w-9 object-contain"
            />

            <div className="absolute inset-0 bg-linear-to-tr from-blue-500 to-pink-500 opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
          </div>

          <div className="flex min-w-0 flex-col">
            <p
              className={`truncate text-base font-black uppercase leading-tight tracking-tight transition-colors duration-300 ${textColor}`}
            >
              <span className="text-pink-500">Samira</span>{" "}
              <span className="text-blue-500">Cloud</span>
            </p>

            <p
              className={`text-[10px] font-bold uppercase leading-tight tracking-[0.25em] transition-colors duration-300 ${subTextColor}`}
            >
              QATAR
              <span className="mx-1 text-pink-500/50">•</span>
              DIGITAL
            </p>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden items-center gap-8 lg:flex">
          {/* HOME */}
          <Link
            href="/"
            className={`group relative text-[13px] font-bold uppercase tracking-widest transition-all duration-300 ${
              pathname === "/" ? "text-blue-500" : navLinkColor
            }`}
          >
            Home
            <span
              className={`absolute -bottom-1.5 left-0 h-0.5 bg-linear-to-r from-blue-500 to-pink-500 transition-all duration-300 ${
                pathname === "/" ? "w-full" : "w-0 group-hover:w-full"
              }`}
            />
          </Link>

          {/* SERVICES */}
          <div className="group relative">
            <div className="flex items-center gap-1">
              <Link
                href="/services"
                className={`group relative text-[13px] font-bold uppercase tracking-widest transition-all duration-300 ${
                  isServicesActive ? "text-blue-500" : navLinkColor
                }`}
              >
                Services
                <span
                  className={`absolute -bottom-1.5 left-0 h-0.5 bg-linear-to-r from-blue-500 to-pink-500 transition-all duration-300 ${
                    isServicesActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>

              <ChevronDown
                size={16}
                className={`transition-transform duration-300 group-hover:rotate-180 ${
                  isServicesActive
                    ? "text-blue-500"
                    : scrolled
                    ? "text-slate-300"
                    : "text-slate-600"
                }`}
              />
            </div>

            {/* DROPDOWN */}
            <div className="invisible absolute left-0 top-full z-50 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <div className="w-72.5 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl shadow-slate-200/80">
                {serviceLinks.map((link) => {
                  const isActive = pathname === link.href;

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block rounded-xl px-4 py-3 transition-colors ${
                        isActive ? "bg-blue-50" : "hover:bg-slate-50"
                      }`}
                    >
                      <p
                        className={`text-sm font-bold ${
                          isActive ? "text-blue-600" : "text-slate-900"
                        }`}
                      >
                        {link.label}
                      </p>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        {link.href === "/services/web-development" &&
                          "Responsive websites built for business growth"}

                        {link.href === "/services/crm-systems" &&
                          "Custom CRM platforms for leads and workflows"}

                        {link.href === "/services/attendance-systems" &&
                          "QR-based staff attendance with reporting"}
                      </p>
                    </Link>
                  );
                })}

                <div className="my-2 h-px bg-slate-100" />

                <Link
                  href="/services"
                  className="block rounded-xl px-4 py-3 transition-colors hover:bg-slate-50"
                >
                  <p className="text-sm font-bold text-slate-900">
                    All Services
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Explore Samira Cloud solutions
                  </p>
                </Link>
              </div>
            </div>
          </div>

          {/* OTHER LINKS */}
          {mainLinks.slice(1).map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative text-[13px] font-bold uppercase tracking-widest transition-all duration-300 ${
                  isActive ? "text-blue-500" : navLinkColor
                }`}
              >
                {link.label}

                <span
                  className={`absolute -bottom-1.5 left-0 h-0.5 bg-linear-to-r from-blue-500 to-pink-500 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* CTA BUTTON */}
        <div className="hidden items-center lg:flex">
          <Link
            href="/contact"
            className={`group relative flex items-center gap-2 overflow-hidden rounded-xl px-6 py-2.5 text-xs font-black uppercase tracking-widest transition-all active:scale-95 ${
              scrolled
                ? "bg-white text-slate-950"
                : "bg-slate-950 text-white shadow-xl shadow-slate-200"
            }`}
          >
            <span className="relative z-10">Get Quote</span>

            <ArrowRight
              size={14}
              className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
            />

            <div className="absolute inset-0 -translate-x-full bg-blue-500/10 transition-transform duration-300 group-hover:translate-x-0" />
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className={`rounded-xl p-2 transition-colors lg:hidden ${
            scrolled
              ? "bg-white/5 text-white"
              : "bg-slate-100 text-slate-900"
          }`}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="absolute inset-x-0 top-full border-b border-white/10 bg-slate-950 shadow-2xl lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-5 sm:px-6">
            <Link
              href="/"
              className={`rounded-xl px-3 py-3 text-base font-bold uppercase tracking-wide ${
                pathname === "/"
                  ? "bg-white/5 text-blue-400"
                  : "text-white"
              }`}
            >
              Home
            </Link>

            <div className="mt-1 rounded-2xl border border-white/10 bg-white/5">
              <div className="flex items-center justify-between">
                <Link
                  href="/services"
                  className={`flex-1 px-3 py-3 text-base font-bold uppercase tracking-wide ${
                    isServicesActive ? "text-blue-400" : "text-white"
                  }`}
                >
                  Services
                </Link>

                <button
                  type="button"
                  onClick={() =>
                    setMobileServicesOpen((prev) => !prev)
                  }
                  className="px-3 py-3 text-white"
                  aria-label="Toggle services submenu"
                  aria-expanded={mobileServicesOpen}
                >
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 ${
                      mobileServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {mobileServicesOpen && (
                <div className="space-y-1 border-t border-white/10 px-2 pb-2 pt-2">
                  {serviceLinks.map((link) => {
                    const isActive = pathname === link.href;

                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`block rounded-xl px-3 py-3 text-sm font-semibold ${
                          isActive
                            ? "bg-white/10 text-blue-400"
                            : "text-slate-300"
                        }`}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {mainLinks.slice(1).map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`mt-1 rounded-xl px-3 py-3 text-base font-bold uppercase tracking-wide ${
                    isActive
                      ? "bg-white/5 text-blue-400"
                      : "text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link
              href="/contact"
              className="mt-4 flex items-center justify-center rounded-xl bg-linear-to-r from-blue-600 to-pink-600 px-4 py-4 text-center text-sm font-black uppercase tracking-widest text-white"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

