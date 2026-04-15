import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8">
          
          {/* Brand & SEO Description */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Samira <span className="text-blue-500">Cloud</span>
            </h2>
            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
              Leading digital systems provider in Qatar. Specializing in 
              MERN stack development, custom CRM systems, and SEO-optimized 
              business platforms.
            </p>
            <div className="mt-6 flex gap-4">
              {/* Subtle Social Accents */}
              <div className="h-1 w-12 bg-linear-to-r from-blue-600 to-pink-500 rounded-full" />
            </div>
          </div>

          {/* SEO-Boosted Navigation Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white">Services</h3>
            <ul className="mt-6 space-y-4">
              <li>
                <Link href="/services/web-development" className="text-sm text-slate-400 hover:text-pink-400 transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/crm-systems" className="text-sm text-slate-400 hover:text-pink-400 transition-colors">
                  Custom CRM Systems
                </Link>
              </li>
              <li>
                <Link href="/services/seo-qatar" className="text-sm text-slate-400 hover:text-pink-400 transition-colors">
                  SEO Optimization
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact / Local Signal */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white">Connect</h3>
            <ul className="mt-6 space-y-4">
              <li className="text-sm text-slate-400">
                <span className="block text-white font-medium">Location</span>
                Doha, Qatar
              </li>
              <li>
                <Link href="mailto:hello@samiracloud.com" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">
                  hello@samiracloud.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-500">
            © {currentYear} Samira Cloud • Digital Systems • Qatar. All rights reserved.
          </p>
          
          <div className="flex gap-8">
            <Link href="/privacy" className="text-xs text-slate-500 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-slate-500 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}