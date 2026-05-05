"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ExternalLink,
  Layout,
  Globe,
  Zap,
  Utensils,
  BarChart3,
  Fingerprint,
  Briefcase,
  MapPinned,
} from "lucide-react";

const projects = [
  {
    title: "Restaurant Website & Digital Menu",
    category: "Web Development",
    desc: "Premium restaurant website with digital menu, responsive layout, booking-friendly structure, and modern UI for food businesses.",
    tags: ["Restaurant", "Website", "Menu"],
    icon: Utensils,
    link: "https://restro.samiracloud.com",
    external: true,
  },
  {
    title: "Google Business Profile Setup",
    category: "Google Profile",
    desc: "Google Maps listing setup and profile optimization to help local businesses improve search visibility in Qatar.",
    tags: ["Google Maps", "Local SEO", "Profile"],
    icon: MapPinned,
    link: "/services/google-business-profile",
    external: false,
  },
  {
    title: "Consultancy CRM",
    category: "CRM Systems",
    desc: "Automated client lifecycle management designed specifically for immigration, service, and business consultancies.",
    tags: ["CRM", "Automation", "Security"],
    icon: BarChart3,
    link: "/demos/consultant-crm",
    external: false,
  },
  {
    title: "Digital Attendance Suite",
    category: "Attendance Systems",
    desc: "Smart QR-based workforce attendance tracking with instant validation, staff reports, and cloud dashboard access.",
    tags: ["QR Tech", "Cloud", "Reports"],
    icon: Fingerprint,
    link: "/demos/attendance-suite",
    external: false,
  },
  {
    title: "Corporate Digital Presence",
    category: "Web Development",
    desc: "Enterprise-grade digital identity and business website solution for companies looking to scale their online presence.",
    tags: ["Branding", "Strategy", "SEO"],
    icon: Briefcase,
    link: "/demos/digital-presence",
    external: false,
  },
];

export default function ProjectsClient() {
  const [filter, setFilter] = useState("All");

  const categories = [
    "All",
    "Web Development",
    "CRM Systems",
    "Attendance Systems",
    "Google Profile",
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-slate-950 text-white">
      {/* BACKGROUND GLOWS */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 -left-24 h-130 w-130 rounded-full bg-blue-600/15 blur-[140px]" />
        <div className="absolute top-20 right-0 h-115 w-115 rounded-full bg-violet-600/15 blur-[140px]" />
        <div className="absolute bottom-0 left-1/3 h-105 w-105 rounded-full bg-indigo-500/10 blur-[130px]" />
      </div>

      {/* HERO */}
      <section className="relative px-5 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-24 lg:pt-48">
        <div className="mx-auto max-w-7xl text-center">
          <div className="mb-6 flex justify-center">
            <span className="flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.3em] text-blue-300">
              <Zap size={12} />
              Project Showcase
            </span>
          </div>

          <h1 className="text-5xl font-black tracking-tighter text-white sm:text-6xl lg:text-7xl">
            Real Business{" "}
            <span className="bg-linear-to-r from-blue-400 via-violet-300 to-white bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Websites, CRM systems, Google Business Profile setup, and attendance
            software designed for business growth in Qatar.
          </p>

          {/* FILTERS */}
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`rounded-xl border px-5 py-2.5 text-[10px] font-black uppercase tracking-widest transition-all ${
                  filter === cat
                    ? "scale-105 border-blue-400 bg-linear-to-r from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-500/20"
                    : "border-white/10 bg-white/5 text-slate-400 hover:border-blue-400/40 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT GRID */}
      <section className="px-5 pb-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project) => {
              const Icon = project.icon;

              const cardContent = (
                <article className="group relative flex h-full flex-col overflow-hidden rounded-4xl border border-white/10 bg-linear-to-b from-white/5 to-white/2 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/40 hover:shadow-2xl hover:shadow-blue-500/10">
                  {/* VISUAL AREA */}
                  <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden bg-slate-900/70">
                    <div className="absolute inset-0 bg-linear-to-br from-blue-600/10 via-violet-600/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl" />
                    <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />

                    <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl border border-white/10 bg-white/5 text-blue-300 transition-all duration-500 group-hover:scale-110 group-hover:bg-linear-to-r group-hover:from-blue-600 group-hover:to-violet-600 group-hover:text-white group-hover:shadow-xl group-hover:shadow-blue-500/20">
                      <Icon size={34} />
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <div className="mb-4 flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-blue-500/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-blue-300">
                        {project.category}
                      </span>

                      <span className="rounded-full bg-violet-500/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-violet-300">
                        Doha, Qatar
                      </span>
                    </div>

                    <h3 className="mb-3 text-xl font-bold tracking-tight text-white transition-colors group-hover:text-blue-300 sm:text-2xl">
                      {project.title}
                    </h3>

                    <p className="mb-7 line-clamp-3 text-sm leading-7 text-slate-400">
                      {project.desc}
                    </p>

                    <div className="mb-7 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-slate-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-6">
                      <span className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white transition-colors group-hover:text-blue-300">
                        {project.external ? "Visit Live Project" : "View Project"}
                        <ExternalLink
                          size={12}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </span>

                      <div className="flex gap-4 text-slate-600 transition-colors group-hover:text-violet-300">
                        <Layout size={16} />
                        <Globe size={16} />
                      </div>
                    </div>
                  </div>
                </article>
              );

              if (project.external) {
                return (
                  <a
                    key={project.title}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    {cardContent}
                  </a>
                );
              }

              return (
                <Link key={project.title} href={project.link} className="block h-full">
                  {cardContent}
                </Link>
              );
            })}
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
            name: "Samira Cloud Project Showcase",
            description:
              "Showcase of digital projects including restaurant websites, CRM systems, Google Business Profile setup, and attendance systems.",
            url: "https://samiracloud.com/projects",
            provider: {
              "@type": "LocalBusiness",
              name: "Samira Cloud",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Doha",
                addressCountry: "QA",
              },
            },
          }),
        }}
      />
    </main>
  );
}