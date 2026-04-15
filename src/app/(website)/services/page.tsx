import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Globe, Zap, Search, Layout } from "lucide-react";

export const metadata: Metadata = {
  title: "Premium Web Development Company in Qatar | Samira Cloud",
  description: "Samira Cloud builds high-performance, SEO-optimized business websites and digital systems in Doha, Qatar. Premium design meets scalable technology.",
  alternates: {
    canonical: "https://samiracloud.com/services/web-development-qatar",
  },
};

const features = [
  { title: "Corporate Websites", desc: "Premium portals for Qatar's leading enterprises.", icon: Globe },
  { title: "High-Conversion Landing Pages", desc: "Designed to turn Doha traffic into leads.", icon: Zap },
  { title: "Mobile-First Architecture", desc: "100% responsive across all modern devices.", icon: Layout },
  { title: "SEO-Dominant Structure", desc: "Rank high on Google search in the Qatar region.", icon: Search },
  { title: "MERN Stack Performance", desc: "Ultra-fast loading with Node.js and Next.js.", icon: Zap },
  { title: "Scalable Web Platforms", desc: "Digital systems that grow with your business.", icon: CheckCircle2 },
];

export default function WebDevelopmentPage() {
  return (
    <main className="bg-slate-950 text-white">
      
      {/* HERO SECTION - Premium Dark Aesthetic */}
      <section className="relative overflow-hidden pt-32 pb-24 lg:pt-48 lg:pb-32">
        <div className="absolute top-0 left-1/2 -z-10 h-150 w-200 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-pink-400">
              Expertise in Qatar Market
            </span>
            <h1 className="mt-8 text-5xl font-black tracking-tight sm:text-7xl">
              Web Development <br />
              <span className="bg-linear-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent">
                Company in Qatar
              </span>
            </h1>

            <p className="mt-8 text-lg leading-relaxed text-slate-400">
              Samira Cloud engineers high-performance digital identities. From Doha to Lusail, 
              we build websites that combine **premium aesthetics** with **SEO-first technical foundations** to ensure your business dominates the digital landscape.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="group flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-base font-black uppercase tracking-widest text-slate-950 transition-all hover:bg-blue-50 active:scale-95"
              >
                Get a Quote
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/demos"
                className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10"
              >
                View Demos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES - Grid with Glassmorphism */}
      <section className="relative py-24 bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
              Website Development <span className="text-blue-500 underline decoration-pink-500/30 underline-offset-8">Services in Qatar</span>
            </h2>
            <p className="mt-4 text-slate-400 max-w-2xl text-lg">
              We don't just build sites; we build business tools optimized for 
              speed, usability, and local search rankings.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <div
                key={i}
                className="group relative p-8 rounded-3xl border border-white/5 bg-slate-950 transition-all hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-900/20"
              >
                <feature.icon className="h-10 w-10 text-pink-500 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-400">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE SECTION */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-[3rem] bg-linear-to-b from-slate-900 to-slate-950 p-12 border border-white/5 shadow-inner">
            <h2 className="text-3xl font-bold text-white text-center">Why Choose Samira Cloud</h2>
            <div className="mt-16 grid gap-12 md:grid-cols-3">
              {[
                { title: "Premium UI/UX", body: "Clean, modern interfaces that reflect Qatari luxury standards.", color: "text-blue-400" },
                { title: "SEO Native", body: "Built-in schema markup and semantic HTML for immediate ranking.", color: "text-pink-400" },
                { title: "Lead Generation", body: "Smart conversion funnels designed to grow your Doha client base.", color: "text-blue-400" },
              ].map((item, i) => (
                <div key={i} className="text-center md:text-left">
                  <h3 className={`font-black text-lg uppercase tracking-widest ${item.color}`}>
                    {item.title}
                  </h3>
                  <p className="mt-4 text-slate-400 leading-relaxed italic">
                    "{item.body}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEO CONTENT BLOCK - Essential for Ranking */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <article className="prose prose-invert prose-slate mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">
            Professional Web Development in Doha, Qatar
          </h2>
          <p className="text-lg text-slate-400 leading-8">
            As a specialized web development company in Qatar, Samira Cloud bridges the gap 
            between high-end design and complex digital systems. Our MERN-stack expertise 
            allows us to deliver bespoke solutions that outperform typical website builders.
          </p>
          <p className="mt-6 text-lg text-slate-400 leading-8">
            Whether you are a startup in Lusail or an established agency in West Bay, 
            our focus remains on **Core Web Vitals** and **User Experience**. We ensure 
            your digital presence is secure, lightning-fast, and fully optimized for 
            the local and international markets.
          </p>
        </article>
      </section>

      {/* CALL TO ACTION */}
      <section className="relative py-24 overflow-hidden border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -z-10 h-100 w-100 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[100px]" />
        <div className="relative text-center px-6">
          <h2 className="text-4xl font-black text-white sm:text-5xl">
            Ready to Build Your <br />
            <span className="text-blue-500">Digital Legacy?</span>
          </h2>
          <p className="mt-6 text-slate-400 max-w-xl mx-auto text-lg">
            Join the forward-thinking businesses in Qatar choosing Samira Cloud 
            for high-performance web engineering.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-10 rounded-2xl bg-linear-to-r from-blue-600 to-pink-600 px-10 py-5 text-base font-black uppercase tracking-widest text-white transition-all hover:scale-105 shadow-xl shadow-blue-900/20"
          >
            Contact Us Today
          </Link>
        </div>
      </section>

    </main>
  );
}