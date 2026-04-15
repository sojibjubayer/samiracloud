"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, Target, Zap, ShieldCheck, ArrowRight, TrendingUp, Laptop, BarChart3 } from "lucide-react";

export default function AboutClient() {
  return (
    <main className="relative min-h-screen bg-slate-950 text-white overflow-x-hidden">
      
      {/* 1. ATMOSPHERIC SEPARATION */}
      <div className="absolute top-0 left-0 -z-10 h-200 w-full overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-20 h-150 w-150 rounded-full bg-blue-600/10 blur-[130px]" />
        <div className="absolute top-0 left-[5%] h-100 w-100 rounded-full bg-pink-500/5 blur-[110px]" />
      </div>

      {/* 2. HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-8">
              <span className="inline-block rounded-full border border-pink-500/20 bg-pink-500/5 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.3em] text-pink-400">
                Digital Systems Partner • Doha
              </span>
            </div>

            <h1 className="text-5xl font-black tracking-tighter text-white sm:text-7xl lg:leading-[1.1]">
              Architecting <br />
              <span className="bg-linear-to-r from-blue-400 via-blue-200 to-pink-500 bg-clip-text text-transparent">
                Business Success
              </span>
            </h1>

            <p className="mt-8 text-lg leading-relaxed text-slate-400 sm:text-xl">
              Samira Cloud is a Doha-based strategic partner. We engineer 
              <span className="text-white font-medium"> high-performance digital solutions</span>, 
              automated management platforms, and premium web presences 
              designed specifically to help Qatari businesses scale with ease.
            </p>
          </div>
        </div>
      </section>

      {/* 3. CORE VALUES GRID */}
      <section className="relative py-24 border-t border-white/3">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                The Samira Standard
              </h2>
              <div className="mt-6 h-1 w-24 bg-linear-to-r from-blue-600 to-pink-500 rounded-full" />
              <div className="mt-8 space-y-6 text-slate-400 text-lg leading-relaxed">
                <p>
                  We bridge the gap between world-class design and operational 
                  efficiency. For Qatari businesses, we provide the 
                  secure foundations needed to grow in an increasingly digital economy.
                </p>
                <p>
                  By focusing on <strong className="text-white font-semibold">Workflow Automation</strong> and 
                  <strong className="text-white font-semibold"> Local Search Authority</strong>, we deliver assets 
                  that save you time and bring your brand directly to your ideal customers in Doha.
                </p>
                <div className="pt-4">
                  <Link href="/contact" className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-blue-400 hover:text-white transition-colors">
                    Start a Project <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Value Cards - Now focused purely on Benefits */}
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                { title: "Smart Automation", desc: "Replace manual tasks with systems that work while you sleep.", icon: Zap },
                { title: "Peak Performance", desc: "Instant-load experiences that keep your customers engaged.", icon: TrendingUp },
                { title: "Local Presence", desc: "Dominant visibility in the Qatari market for key services.", icon: Target },
                { title: "Business Security", desc: "Private, enterprise-grade data protection for your peace of mind.", icon: ShieldCheck },
              ].map((item, i) => (
                <article 
                  key={i} 
                  className="group rounded-[2.5rem] border border-white/5 bg-white/1 p-8 transition-all duration-500 hover:border-blue-500/30 hover:bg-white/3"
                >
                  <item.icon className="h-6 w-6 text-blue-500 mb-6 transition-colors group-hover:text-pink-500" />
                  <h3 className="text-lg font-bold text-white mb-3 tracking-tight">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors">
                    {item.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. REPLACED TECH STACK WITH SERVICE PILLARS */}
      <section className="py-24 border-y border-white/3 bg-white/1">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
             <div className="flex flex-col items-center gap-4">
                <Laptop className="text-blue-400 h-8 w-8" />
                <span className="text-sm font-black uppercase tracking-widest text-slate-400">Custom Web Design</span>
             </div>
             <div className="flex flex-col items-center gap-4">
                <BarChart3 className="text-pink-400 h-8 w-8" />
                <span className="text-sm font-black uppercase tracking-widest text-slate-400">Management Systems</span>
             </div>
             <div className="flex flex-col items-center gap-4">
                <Sparkles className="text-blue-400 h-8 w-8" />
                <span className="text-sm font-black uppercase tracking-widest text-slate-400">Digital Branding</span>
             </div>
          </div>
        </div>
      </section>

      {/* 5. LOCAL BUSINESS SCHEMA (Keep this, it's invisible to users but good for Google) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "mainEntity": {
              "@type": "Organization",
              "name": "Samira Cloud",
              "url": "https://samiracloud.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Doha",
                "addressCountry": "QA"
              }
            }
          }),
        }}
      />
    </main>
  );
}