"use client";

import Link from "next/link";
import { services } from "@/data/services";
import { ArrowRight, Laptop, BarChart3, ShieldCheck, Cpu } from "lucide-react";

// Mapping icons to your actual service slugs for visual clarity
const iconMap: Record<string, any> = {
  "web-development": Laptop,
  "seo-optimization": BarChart3,
  "digital-systems": Cpu,
  "security": ShieldCheck,
};

export default function ServicesSection() {
  return (
    <section 
      aria-labelledby="services-heading"
      className="relative overflow-hidden bg-slate-950 py-24 sm:py-32 border-b border-white/3"
    >
      {/* Premium Atmospheric Lighting - No boxy sections */}
      <div className="absolute top-0 right-0 -z-10 h-150 w-150 rounded-full bg-blue-600/3 blur-[120px]" />
      <div className="absolute bottom-0 left-0 -z-10 h-100 w-100 rounded-full bg-pink-600/2 blur-[100px]" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header - Optimized for Local SEO and Premium Layout */}
        <div className="flex flex-col items-start justify-between gap-x-12 gap-y-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="mb-6 flex h-1 w-12 bg-linear-to-r from-blue-500 to-pink-500 rounded-full" />
            <h2 
              id="services-heading"
              className="text-4xl font-black tracking-tight text-white sm:text-6xl"
            >
              Enterprise <br />
              <span className="bg-linear-to-r from-blue-400 via-blue-500 to-pink-500 bg-clip-text text-transparent">
                Digital Systems
              </span>
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-slate-400">
              Samira Cloud engineers high-performance solutions for the Qatari market. 
              From <span className="text-slate-200">Doha-based startups</span> to international 
              corporations, we scale your digital operations with precision.
            </p>
          </div>
          
          <Link
            href="/services"
            className="group flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.2em] text-blue-400 hover:text-white transition-all"
          >
            View All Services
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-blue-500/20 group-hover:border-white group-hover:bg-white/10 transition-all">
               <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        </div>

        {/* Responsive Grid - Mobile First Optimization */}
        <div className="mt-24 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = iconMap[service.slug] || Laptop;
            
            return (
              <article
                key={service.slug}
                className="group relative flex flex-col justify-between rounded-4xl border border-white/5 bg-white/1 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/30 hover:bg-white/3 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
              >
                {/* Subtle Inner Glow on Hover */}
                <div className="absolute inset-0 rounded-4xl bg-linear-to-br from-blue-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="mb-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900/50 border border-white/5 group-hover:border-blue-500/50 transition-all duration-500 shadow-inner">
                    <Icon className="h-6 w-6 text-slate-400 group-hover:text-blue-400 transition-colors" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="mt-4 text-sm leading-relaxed text-slate-500 group-hover:text-slate-400 transition-colors line-clamp-3">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="relative z-10 mt-12">
                  <Link
                    href={`/services/${service.slug}`}
                    aria-label={`Details for ${service.title}`}
                    className="group/btn inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 transition-all hover:text-white"
                  >
                    Details
                    <ArrowRight size={12} className="transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Structured Data (JSON-LD) for Qatar Local SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Web Development & Digital Solutions Qatar",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Samira Cloud",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Doha",
                "addressCountry": "QA"
              }
            },
            "areaServed": "Qatar",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Samira Cloud Service Catalog",
              "itemListElement": services.map((s, i) => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": s.title,
                  "description": s.shortDescription
                },
                "position": i + 1
              }))
            }
          }),
        }}
      />
    </section>
  );
}