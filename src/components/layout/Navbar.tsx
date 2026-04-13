import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Demos", href: "/demos" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="rounded-xl bg-blue-600 px-3 py-2 text-sm font-bold text-white">
            SC
          </span>
          <div>
            <p className="text-base font-bold text-slate-900">Samira Cloud</p>
            <p className="text-xs text-slate-500">Digital System for Everyone</p>
          </div>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-700 transition hover:text-blue-600"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
        >
          Get Quote
        </Link>
      </nav>
    </header>
  );
}