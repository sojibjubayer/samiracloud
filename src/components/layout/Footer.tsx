import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-slate-950 pb-10 pt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Samira <span className="text-blue-500">Cloud</span>
            </h2>

            <p className="mt-4 max-w-md text-sm leading-6 text-slate-400">
              Samira Cloud delivers premium digital solutions for businesses in
              Qatar, including responsive websites, custom CRM systems, and
              QR-based attendance platforms designed for modern operations.
            </p>

            <div className="mt-6 flex gap-4">
              <div className="h-1 w-16 rounded-full bg-linear-to-r from-blue-600 to-pink-500" />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white">
              Services
            </h3>

            <ul className="mt-6 space-y-4">
              <li>
                <Link
                  href="/services/web-development"
                  className="text-sm text-slate-400 transition-colors hover:text-pink-400"
                >
                  Web Development
                </Link>
              </li>

              <li>
                <Link
                  href="/services/crm-systems"
                  className="text-sm text-slate-400 transition-colors hover:text-pink-400"
                >
                  CRM Systems
                </Link>
              </li>

              <li>
                <Link
                  href="/services/attendance-systems"
                  className="text-sm text-slate-400 transition-colors hover:text-pink-400"
                >
                  QR Attendance Systems
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  className="text-sm text-slate-400 transition-colors hover:text-pink-400"
                >
                  All Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white">
              Connect
            </h3>

            <ul className="mt-6 space-y-4">
              <li className="text-sm text-slate-400">
                <span className="block font-medium text-white">Location</span>
                Doha, Qatar
              </li>

              <li>
                <Link
                  href="mailto:hello@samiracloud.com"
                  className="text-sm text-slate-400 transition-colors hover:text-blue-400"
                >
                  hello@samiracloud.com
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-sm text-slate-400 transition-colors hover:text-blue-400"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-8 md:flex-row">
          <p className="text-center text-xs text-slate-500 md:text-left">
            © {currentYear} Samira Cloud • Digital Solutions • Qatar. All rights
            reserved.
          </p>

          <div className="flex gap-8">
            <Link
              href="/privacy"
              className="text-xs text-slate-500 transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-slate-500 transition-colors hover:text-white"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}