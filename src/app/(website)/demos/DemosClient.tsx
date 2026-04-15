"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ExternalLink, 
  Monitor, 
  Globe, 
  Layout, 
  Zap, 
  Utensils, 
  BarChart3, 
  Fingerprint, 
  Briefcase,
  Search
} from "lucide-react";

const projects = [
  {
    title: "Restaurant Management System",
    category: "Systems",
    desc: "End-to-end POS, digital menu, and table reservation system for high-volume dining.",
    tags: ["Next.js", "Real-time", "POS"],
    icon: Utensils,
    link: "/demos/restaurant-system",
  },
  {
    title: "Consultancy CRM",
    category: "Systems",
    desc: "Automated client lifecycle management designed specifically for immigration & business consultancies.",
    tags: ["CRM", "Automation", "Security"],
    icon: BarChart3,
    link: "/demos/consultant-crm",
  },
  {
    title: "Premium Restaurant Website",
    category: "Web",
    desc: "Conversion-optimized digital storefront with integrated booking and dynamic menus.",
    tags: ["SEO", "UI/UX", "Responsive"],
    icon: Layout,
    link: "/demos/restaurant-web",
  },
  {
    title: "Digital Attendance Suite",
    category: "Systems",
    desc: "Smart QR-based workforce attendance tracking with instant validation and cloud reporting.",
    tags: ["QR Tech", "Cloud", "Analytics"],
    icon: Fingerprint,
    link: "/demos/attendance-suite",
  },
  {
    title: "Corporate Digital Presence",
    category: "Web",
    desc: "Enterprise-grade digital identity branding for businesses looking to scale in the MENA market.",
    tags: ["Branding", "Strategy", "SEO"],
    icon: Briefcase,
    link: "/demos/digital-presence",
  }
];

export default function DemosClient() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Systems", "Web"];
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <main className="relative min-h-screen bg-slate-950 text-white overflow-x-hidden">
      
      {/* ATMOSPHERIC SEPARATION (The Glows) */}
      <div className="absolute top-0 left-0 -z-10 h-200 w-full overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-20 h-150 w-150 rounded-full bg-blue-600/10 blur-[130px]" />
        <div className="absolute top-0 left-[5%] h-100 w-100 rounded-full bg-pink-500/5 blur-[110px]" />
      </div>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <span className="flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.3em] text-blue-400">
              <Zap size={12} /> Product Showroom
            </span>
          </div>
          <h1 className="text-5xl font-black tracking-tighter text-white sm:text-7xl">
            Live <span className="bg-linear-to-r from-blue-400 via-blue-200 to-pink-500 bg-clip-text text-transparent">Systems</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-slate-400">
            Interactive demonstrations of custom-coded solutions architected 
            for precision, performance, and business growth in Qatar.
          </p>

          {/* Filter Controls */}
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-xl px-6 py-2.5 text-[10px] font-black uppercase tracking-widest transition-all ${
                  filter === cat 
                  ? "bg-white text-slate-950 scale-105 shadow-lg shadow-white/10" 
                  : "bg-white/5 text-slate-500 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* BENTO GRID */}
      <section className="pb-32 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, i) => (
              <article 
                key={i}
                className="group relative flex flex-col overflow-hidden rounded-[2.5rem] border border-white/5 bg-white/1 transition-all duration-500 hover:border-blue-500/30 hover:bg-white/3"
              >
                {/* Visual Placeholder */}
                <div className="aspect-video w-full bg-slate-900/50 relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-linear-to-br from-blue-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <project.icon className="h-16 w-16 text-slate-800 group-hover:text-blue-500/40 transition-all duration-500 group-hover:scale-110" />
                </div>

                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[10px] font-black uppercase tracking-widest text-pink-500">{project.category}</span>
                    <span className="h-1 w-1 rounded-full bg-slate-800" />
                    <div className="flex gap-2">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="text-[9px] font-bold text-slate-500 uppercase">{tag}</span>
                      ))}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm leading-relaxed text-slate-500 mb-8 line-clamp-3">
                    {project.desc}
                  </p>

                  <div className="mt-auto pt-6 flex items-center justify-between border-t border-white/3">
                    <Link 
                      href={project.link}
                      className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white hover:text-blue-400 transition-colors"
                    >
                      Launch Demo <ExternalLink size={12} />
                    </Link>
                    <div className="flex gap-4 text-slate-700">
                       <Layout size={16} />
                       <Globe size={16} />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* JSON-LD SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Samira Cloud Live Systems Showroom",
            "description": "Showcase of digital systems, POS, CRM, and web presence solutions.",
            "url": "https://samiracloud.com/demos",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Samira Cloud",
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