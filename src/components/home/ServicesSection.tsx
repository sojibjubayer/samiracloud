import Link from "next/link";
import {
  Globe2,
  Code2,
  LayoutGrid,
  Clock3,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    title: "Google Business Profile",
    subtitle: "Local SEO Qatar",
    description:
      "Get your business listed on Google Search and Maps to attract more local customers in Qatar.",
    price: "199",
    href: "/services/google-business-profile",
    icon: Globe2,
    features: ["Google Maps Listing", "Profile Optimization", "Local SEO Setup"],
  },
  {
    title: "Web Development",
    subtitle: "Business Website",
    description:
      "Premium business websites built for speed, SEO, mobile users, and lead generation in Qatar.",
    price: "299",
    href: "/services/web-development",
    icon: Code2,
    features: ["SEO-Friendly Website", "Mobile Responsive Design", "WhatsApp & Maps Integration"],
  },
  {
    title: "Custom CRM System",
    subtitle: "Business Management",
    description:
      "Manage leads, clients, payments, staff, and reports with a custom CRM built for your workflow.",
    price: "999",
    href: "/services/crm-systems",
    icon: LayoutGrid,
    features: ["Lead & Client Tracking", "Payment Management", "Admin Dashboard"],
  },
  {
    title: "Staff Attendance & Payroll",
    subtitle: "HR Software",
    description:
      "Track staff attendance, working hours, salary, breaks, and monthly reports from one dashboard.",
    price: "399",
    href: "/services/attendance-systems",
    icon: Clock3,
    features: ["Check-In / Out Tracking", "Payroll Reports", "Admin Control Panel"],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative bg-[#020617] py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl sm:mb-16">
          <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400 sm:text-sm">
            Digital Services in Qatar
          </h2>

          <p className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Affordable Business{" "}
            <span className="bg-linear-to-r from-blue-400 via-cyan-300 to-white bg-clip-text text-transparent">
              Solutions
            </span>
          </p>

          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
            Website development, Google Business Profile, CRM systems, and staff
            attendance software for small businesses and companies in Qatar.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group relative flex min-h-full flex-col rounded-3xl border border-white/10 bg-white/4 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/[0.07] sm:p-7"
              >
                <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400 ring-1 ring-blue-400/20 transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white">
                  <Icon size={24} />
                </div>

                <div className="flex-1">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400">
                    {service.subtitle}
                  </h3>

                  <h4 className="mt-2 text-xl font-bold leading-snug text-white sm:text-2xl">
                    {service.title}
                  </h4>

                  <p className="mt-4 text-sm leading-relaxed text-slate-400">
                    {service.description}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-xs font-medium text-slate-300"
                      >
                        <CheckCircle2
                          size={15}
                          className="shrink-0 text-blue-400"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <div className="mb-5 flex items-end gap-1">
                    <span className="mr-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                      From
                    </span>

                    <span className="text-3xl font-black text-white">
                      {service.price}
                    </span>

                    <span className="pb-1 text-[10px] font-bold uppercase text-slate-400">
                      QAR
                    </span>
                  </div>

                  <Link
                    href={service.href}
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-4 text-[11px] font-black uppercase tracking-widest text-white transition-all duration-300 hover:bg-white hover:text-slate-950"
                  >
                    Explore Service
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}