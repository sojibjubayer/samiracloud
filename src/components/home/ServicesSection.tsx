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
    href: "/services/google-business-profile",
    icon: Globe2,
    features: ["Google Maps Listing", "Profile Optimization", "Local SEO Setup"],
  },
  {
    title: "Web Development",
    subtitle: "Business Website",
    description:
      "Premium business websites built for speed, SEO, mobile users, and lead generation in Qatar.",
    href: "/services/web-development",
    icon: Code2,
    features: [
      "SEO-Friendly Website",
      "Mobile Responsive Design",
      "WhatsApp & Maps Integration",
    ],
  },
  {
    title: "Immigration CRM System",
    subtitle: "Business Management",
    description:
      "Manage leads, clients, payments, staff, and reports with a custom CRM built for your workflow.",
    href: "/services/immigration-crm-qatar",
    icon: LayoutGrid,
    features: ["Lead & Client Tracking", "Payment Management", "Admin Dashboard"],
  },
  {
    title: "Staff Attendance & Payroll",
    subtitle: "HR Software",
    description:
      "Track staff attendance, working hours, salary, breaks, and monthly reports from one dashboard.",
    href: "/services/attendance-systems",
    icon: Clock3,
    features: ["Check-In / Out Tracking", "Payroll Reports", "Admin Control Panel"],
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#020617] py-16 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14 lg:text-left">
          <h2 className="text-[11px] font-bold uppercase tracking-[0.22em] text-blue-400 sm:text-sm">
            Digital Services in Qatar
          </h2>

          <p className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Smart Business{" "}
            <span className="bg-linear-to-r from-blue-400 via-cyan-300 to-white bg-clip-text text-transparent">
              Solutions
            </span>
          </p>

          <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-lg">
            Website development, Google Business Profile, CRM systems, and staff
            attendance software for small businesses and companies in Qatar.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group flex min-h-full flex-col rounded-3xl border border-white/10 bg-white/4 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/[0.07] sm:p-6 lg:p-7"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-400 ring-1 ring-pink-400/20 transition-all duration-300 group-hover:bg-linear-to-r group-hover:from-pink-500 group-hover:to-violet-600 group-hover:text-white">
                  <Icon size={23} />
                </div>

                <div className="flex flex-1 flex-col">
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
                        className="flex items-start gap-3 text-xs font-medium leading-5 text-slate-300 sm:text-sm"
                      >
                        <CheckCircle2
                          size={16}
                          className="mt-0.5 shrink-0 text-blue-400"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-7">
                    <Link
                      href={service.href}
                      className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-[11px] font-black uppercase tracking-widest text-white transition-all duration-300 hover:bg-white hover:text-slate-950"
                    >
                      Explore Service
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}