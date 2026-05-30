"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
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
    desc: "Premium restaurant website with digital menu, responsive layout, food menu sections, contact flow, and modern UI for restaurant businesses in Qatar.",
    tags: ["Restaurant", "Website", "Digital Menu"],
    icon: Utensils,
    image: "/images/projects/restaurant-website.webp",
    imageAlt: "Restaurant website and digital menu demo project by Samira Cloud",
    link: "https://restro.samiracloud.com",
    external: true,
    cta: "Visit Live Project",
  },
  {
    title: "Google Business Profile Setup",
    category: "Google Profile",
    desc: "Google Business Profile setup and optimization to help local businesses appear on Google Search and Google Maps in Qatar.",
    tags: ["Google Maps", "Local SEO", "Profile Setup"],
    icon: MapPinned,
    image: "/images/projects/google-business-profile.webp",
    imageAlt: "Google Business Profile setup and Google Maps listing project in Qatar",
    link: "/contact",
    external: false,
    cta: "Request Setup",
  },
  {
    title: "Immigration Consultancy CRM",
    category: "CRM Systems",
    desc: "Custom Immigration CRM system for managing visa leads, clients, documents, payments, refunds, consultant follow-ups, and reports.",
    tags: ["Immigration CRM", "Visa Leads", "Reports"],
    icon: BarChart3,
    image: "/images/projects/immigration-crm.webp",
    imageAlt: "Immigration CRM dashboard demo for visa consultancy in Qatar",
    link: "/services/immigration-crm-qatar",
    external: false,
    cta: "View Details",
  },
  {
    title: "QR Attendance System",
    category: "Attendance Systems",
    desc: "QR-based staff attendance system for check-in, check-out, break tracking, monthly reports, and admin dashboard access.",
    tags: ["QR Attendance", "Staff Tracking", "Reports"],
    icon: Fingerprint,
    image: "/images/projects/qr-attendance-system.webp",
    imageAlt: "QR attendance system dashboard demo project",
    link: "/services/attendance-systems",
    external: false,
    cta: "View Details",
  },
  {
    title: "Corporate Business Website",
    category: "Web Development",
    desc: "Business website solution for companies that need a professional online presence, SEO-friendly structure, and strong lead generation flow.",
    tags: ["Business Website", "SEO", "Branding"],
    icon: Briefcase,
    image: "/images/projects/business-website.webp",
    imageAlt: "Corporate business website demo project in Qatar",
    link: "/services/web-development",
    external: false,
    cta: "View Details",
  },
];

const categories = [
  "All",
  "Web Development",
  "Google Profile",
  "CRM Systems",
  "Attendance Systems",
];

export default function ProjectsClient() {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white pt-16">
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -left-28 -top-28 h-96 w-96 rounded-full bg-blue-600/15 blur-[130px]" />
        <div className="absolute right-0 top-28 h-96 w-96 rounded-full bg-violet-600/15 blur-[130px]" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      {/* Hero */}
      <section className="relative px-4 pb-12 pt-16 sm:px-6 sm:pb-16 sm:pt-20 lg:px-8 lg:pb-20 lg:pt-28">
        <div className="mx-auto max-w-7xl text-center">
          <div className="mb-6 flex justify-center">
            <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-blue-300 backdrop-blur sm:text-xs">
              <Zap size={14} className="shrink-0" />
              <span className="truncate">Project Showcase Qatar</span>
            </span>
          </div>

          <h1 className="mx-auto max-w-5xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">
            Real Business{" "}
            <span className="bg-linear-to-r from-blue-400 via-violet-300 to-white bg-clip-text text-transparent">
              Digital Solutions
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
            Explore websites, CRM systems, Google Business Profile setup, and
            attendance solutions designed for business visibility, workflow, and
            growth in Qatar.
          </p>

          <div className="mx-auto mt-8 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Business Websites",
              "Google Maps Setup",
              "Immigration CRM",
              "QR Attendance",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/4 p-4"
              >
                <p className="text-sm font-semibold text-slate-300">{item}</p>
              </div>
            ))}
          </div>

          {/* Filters */}
          <div className="mt-10 overflow-x-auto pb-2">
            <div className="flex min-w-max gap-3 sm:min-w-0 sm:flex-wrap sm:justify-center">
              {categories.map((cat) => {
                const isActive = filter === cat;

                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setFilter(cat)}
                    className={`rounded-xl border px-4 py-3 text-[10px] font-black uppercase tracking-widest transition-all sm:px-5 ${
                      isActive
                        ? "border-blue-400 bg-linear-to-r from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-500/20"
                        : "border-white/10 bg-white/5 text-slate-400 hover:border-blue-400/40 hover:text-white"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project) => {
              const Icon = project.icon;

              const cardContent = (
                <article className="group relative flex h-full flex-col overflow-hidden rounded-4xl border border-white/10 bg-linear-to-b from-white/6 to-white/2.5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:shadow-2xl hover:shadow-blue-500/10">
                  {/* Project Image */}
                  <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-900">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                      priority={project.title === "Restaurant Website & Digital Menu"}
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                    <div className="absolute inset-0 bg-linear-to-br from-blue-600/10 via-violet-600/10 to-transparent opacity-80" />

                    <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/60 px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-white backdrop-blur-md">
                      <Icon size={14} className="text-blue-300" />
                      {project.category}
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="inline-flex rounded-full bg-violet-500/20 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-violet-100 backdrop-blur-md">
                        Doha, Qatar
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <h2 className="text-xl font-bold tracking-tight text-white transition-colors group-hover:text-blue-300 sm:text-2xl">
                      {project.title}
                    </h2>

                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {project.desc}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-slate-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto border-t border-white/10 pt-6">
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <span className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white transition-colors group-hover:text-blue-300">
                          {project.cta}
                          {project.external ? (
                            <ExternalLink
                              size={13}
                              className="transition-transform group-hover:translate-x-1"
                            />
                          ) : (
                            <ArrowRight
                              size={13}
                              className="transition-transform group-hover:translate-x-1"
                            />
                          )}
                        </span>

                        <div className="flex gap-4 text-slate-600 transition-colors group-hover:text-violet-300">
                          <Layout size={16} />
                          <Globe size={16} />
                        </div>
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
                    aria-label={`Open ${project.title}`}
                  >
                    {cardContent}
                  </a>
                );
              }

              return (
                <Link
                  key={project.title}
                  href={project.link}
                  className="block h-full"
                  aria-label={`Open ${project.title}`}
                >
                  {cardContent}
                </Link>
              );
            })}
          </div>

          {filteredProjects.length === 0 && (
            <div className="rounded-3xl border border-white/10 bg-white/4 p-8 text-center">
              <p className="text-sm text-slate-400">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-4xl border border-white/10 bg-linear-to-r from-slate-900 via-blue-950 to-slate-900 px-6 py-10 shadow-2xl shadow-black/20 sm:px-10 sm:py-14">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                  Need a similar solution?
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Let’s build a digital solution for your business
                </h2>

                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                  Whether you need a website, Google Business Profile setup,
                  Immigration CRM, QR attendance system, or custom dashboard,
                  Samira Cloud can help you plan and build it.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-2xl bg-white px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100 sm:w-auto"
              >
                Discuss Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}