"use client";

import React from "react";
import { Mail, MessageSquare, Send, ArrowRight } from "lucide-react";

export default function ContactClient() {
  const whatsappNumber = "+97471294020";
  const emailAddress = "hello@samiracloud.com";

  return (
    <main className="relative min-h-screen bg-slate-950 text-white overflow-x-hidden">
      
      {/* 1. ATMOSPHERIC SEPARATION (Blue/Pink Glow) */}
      <div className="absolute top-0 left-0 -z-10 h-200 w-full overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-20 h-150 w-150 rounded-full bg-blue-600/10 blur-[130px]" />
        <div className="absolute top-0 left-[5%] h-100 w-100 rounded-full bg-pink-500/5 blur-[110px]" />
      </div>

      {/* 2. CONTACT HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
            
            {/* Left Side: Direct Contact Methods */}
            <div className="max-w-2xl">
              <span className="inline-block rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.3em] text-blue-400">
                Connect with Doha Team
              </span>
              <h1 className="mt-8 text-5xl font-black tracking-tighter text-white sm:text-7xl lg:leading-[1.1]">
                Let’s build your <br />
                <span className="bg-linear-to-r from-blue-400 via-blue-200 to-pink-500 bg-clip-text text-transparent">
                  Digital Legacy
                </span>
              </h1>
              <p className="mt-8 text-lg leading-relaxed text-slate-400">
                Whether you need a high-performance website, a custom CRM, or a 
                scaled digital system, Samira Cloud is ready to engineer 
                your success in the Qatari market.
              </p>

              {/* Direct Links */}
              <div className="mt-12 space-y-6">
                <a 
                  href={`https://wa.me/${whatsappNumber.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-3xl border border-white/5 bg-white/2 p-6 transition-all hover:border-blue-500/40 hover:bg-white/4"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 border border-white/5 group-hover:border-blue-500/50">
                    <MessageSquare className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-slate-500">WhatsApp Us</p>
                    <p className="text-xl font-bold text-white">{whatsappNumber}</p>
                  </div>
                  <ArrowRight className="ml-auto h-5 w-5 text-slate-700 group-hover:text-blue-400 transition-transform group-hover:translate-x-1" />
                </a>

                <a 
                  href={`mailto:${emailAddress}`}
                  className="group flex items-center gap-4 rounded-3xl border border-white/5 bg-white/2 p-6 transition-all hover:border-pink-500/40 hover:bg-white/4"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 border border-white/5 group-hover:border-pink-500/50">
                    <Mail className="h-6 w-6 text-pink-500" />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-slate-500">Email Inquiry</p>
                    <p className="text-xl font-bold text-white">{emailAddress}</p>
                  </div>
                  <ArrowRight className="ml-auto h-5 w-5 text-slate-700 group-hover:text-pink-400 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Right Side: Seamless Contact Form */}
            <div className="relative rounded-[2.5rem] border border-white/10 bg-white/2 p-8 backdrop-blur-md sm:p-12">
               <h2 className="text-2xl font-bold text-white mb-8 tracking-tight">Project Brief</h2>
               <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-2">Full Name</label>
                      <input type="text" placeholder="Your Name" className="w-full rounded-2xl border border-white/5 bg-slate-900/50 px-5 py-4 text-white placeholder-slate-600 outline-none focus:border-blue-500/50 transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-2">Phone</label>
                      <input type="tel" placeholder="+974" className="w-full rounded-2xl border border-white/5 bg-slate-900/50 px-5 py-4 text-white placeholder-slate-600 outline-none focus:border-blue-500/50 transition-all" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-2">Message</label>
                    <textarea rows={4} placeholder="Describe your digital project..." className="w-full rounded-2xl border border-white/5 bg-slate-900/50 px-5 py-4 text-white placeholder-slate-600 outline-none focus:border-blue-500/50 transition-all resize-none"></textarea>
                  </div>
                  <button className="group relative flex h-14 w-full items-center justify-center overflow-hidden rounded-2xl bg-white px-10 text-sm font-black uppercase tracking-widest text-slate-950 transition-all hover:scale-[1.02] active:scale-95">
                    <span className="relative z-10 flex items-center gap-2">Send Message <Send size={16} /></span>
                    <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-blue-100/60 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  </button>
               </form>
            </div>

          </div>
        </div>
      </section>

      {/* 3. LOCAL BUSINESS SCHEMA (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "mainEntity": {
              "@type": "LocalBusiness",
              "name": "Samira Cloud",
              "telephone": whatsappNumber,
              "email": emailAddress,
              "url": "https://samiracloud.com/contact",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Doha",
                "addressCountry": "QA"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "25.276987",
                "longitude": "51.520008"
              }
            }
          }),
        }}
      />
    </main>
  );
}