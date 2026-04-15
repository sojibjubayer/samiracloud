"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, Target, Zap, ShieldCheck, ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-slate-950 text-white overflow-x-hidden">
      
      {/* 1. ATMOSPHERIC SEPARATION (The Glows) 
          This sits behind your Navbar and Hero to create depth 
      */}
      <div className="absolute top-0 left-0 -z-10 h-200 w-full overflow-hidden pointer-events-none">
        {/* Blue Glow: Aligned under your Logo area */}
        <div className="absolute -top-32 -left-20 h-150 w-150 rounded-full bg-blue-600/10 blur-[130px]" />
        
        {/* Pink Glow: Aligned under the 'About' nav link area */}
        <div className="absolute top-0 left-[5%] h-100 w-100 rounded-full bg-pink-500/5 blur-[110px]" />
      </div>

      {/* 2. HERO SECTION 
          'pt-32' ensures it starts below your Navbar height 
      */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Eyebrow Tag */}
            <div className="mb-8">
              <span className="inline-block rounded-full border border-pink-500/20 bg-pink-500/5 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.3em] text-pink-400">
                Modern Tech Stack • Qatar
              </span>
            </div>

            {/* Premium Headline */}
            <h1 className="text-5xl font-black tracking-tighter text-white sm:text-7xl lg:leading-[1.1]">
              Engineering the <br />
              <span className="bg-linear-to-r from-blue-400 via-blue-200 to-pink-500 bg-clip-text text-transparent">
                Digital Future
              </span>
            </h1>

            {/* SEO-Optimized Content */}
            <p className="mt-8 text-lg leading-relaxed text-slate-400 sm:text-xl">
              Samira Cloud is a Doha-based digital systems provider specializing in 
              the architecture of high-performance websites, bespoke CRM platforms, 
              and SEO-dominant digital identities for the Qatari market.
            </p>
          </div>
        </div>
      </section>

      {/* 3. CORE VALUES GRID 
          Seamless transition using a faint top border 
      */}
      <section className="relative py-24 border-t border-white/3">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Who We Are
              </h2>
              <div className="mt-6 h-1 w-24 bg-linear-to-r from-blue-600 to-pink-500 rounded-full" />
              <div className="mt-8 space-y-6 text-slate-400 text-lg leading-relaxed">
                <p>
                  Founded with a mission to bridge the gap between aesthetics and 
                  technical performance, Samira Cloud is a trusted partner 
                  for Qatari businesses looking to scale.
                </p>
                <p>
                  Our expertise in a <strong className="text-white">modern tech stack</strong> allows us to 
                  deliver custom-coded solutions that outperform standard templates 
                  in speed, security, and ranking potential.
                </p>
                <div className="pt-4">
                  <Link href="/contact" className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-blue-400 hover:text-white transition-colors">
                    Start a Project <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Value Cards */}
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                { title: "Precision Engineering", desc: "Systems designed to perform under pressure.", icon: Zap },
                { title: "Local SEO Focus", desc: "Architected to dominate search results in Doha.", icon: Target },
                { title: "Premium Design", desc: "Interfaces mirroring Qatari luxury standards.", icon: Sparkles },
                { title: "Enterprise Security", desc: "Data protection built into every line of code.", icon: ShieldCheck },
              ].map((item, i) => (
                <article 
                  key={i} 
                  className="group rounded-4xl border border-white/5 bg-white/1 p-8 transition-all duration-500 hover:border-blue-500/30 hover:bg-white/3"
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

      {/* 4. QATAR-SPECIFIC SEO CONTENT */}
      <section className="py-24 bg-white/1 border-y border-white/3">
        <article className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-black text-white sm:text-4xl mb-10 tracking-tighter">
            Driving Digital Innovation in Doha
          </h2>
          <div className="space-y-6 text-slate-400 text-lg leading-8">
            <p>
              In the rapidly evolving Qatari market, we focus on <strong>Digital Systems</strong>—tools 
              that integrate directly into your business workflow. Whether it is a 
              Staff Management Portal or an automated QR scanning 
              application, we build tools that solve real problems.
            </p>
            <p>
              Our commitment to <strong>100% mobile responsiveness</strong> ensures 
              your brand reflects the luxury and precision associated with 
              Qatar&apos;s leading corporate sectors.
            </p>
          </div>
        </article>
      </section>

      {/* 5. LOCAL BUSINESS SCHEMA (JSON-LD) */}
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
              "description": "Premium Digital Systems and Web Solutions provider in Doha, Qatar.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Doha",
                "addressCountry": "QA"
              },
              "knowsAbout": ["Web Development", "SEO", "Digital Systems", "CRM Architecture"]
            }
          }),
        }}
      />
    </main>
  );
}