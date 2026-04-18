import { Globe, LayoutGrid, Clock, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Digital Presence",
    subtitle: "Web Development",
    description: "Premium business websites designed to rank on Google and capture Qatari leads.",
    price: "299",
    recurring: "",
    icon: <Globe className="text-blue-500" size={24} />,
    features: [
      "SEO-Friendly Structure",
      "WhatsApp & Maps Integration",
      "Google Business Profile Setup"
    ],
    cta: "Explore Service"
  },
  {
    title: "Enterprise CRM",
    subtitle: "Business Management",
    description: "Powerful lead tracking and client management systems tailored for consultancy firms.",
    price: "999",
    recurring: "+ 300 QAR Yearly",
    icon: <LayoutGrid className="text-pink-500" size={24} />,
    features: [
      "Lead & Payment Tracking",
      "Automated Staff Dashboards",
      "Custom Reports & Analytics"
    ],
    cta: "Explore Service"
  },
  {
    title: "Staff Attendance",
    subtitle: "Smart Management",
    description: "QR and mobile-friendly tracking for modern teams and offices.",
    price: "399",
    recurring: "",
    icon: <Clock className="text-blue-400" size={24} />,
    features: [
      "Check-In / Out Tracking",
      "Monthly Attendance Reports",
      "Admin Control Panel"
    ],
    cta: "Explore Service"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative bg-[#020617] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-blue-500">Scale Your Business</h2>
          <p className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Smart Digital <span className="bg-linear-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">Solutions</span>
          </p>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative flex flex-col rounded-3xl border border-white/5 bg-white/2 p-8 transition-all duration-300 hover:bg-white/4 hover:border-white/10"
            >
              {/* Icon */}
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-500 ring-1 ring-blue-500/20">
                {service.icon}
              </div>

              <div className="flex-1">
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400">{service.subtitle}</h3>
                <h4 className="mt-2 text-2xl font-bold text-white">{service.title}</h4>
                <p className="mt-4 text-sm leading-relaxed text-slate-400">
                  {service.description}
                </p>

                {/* Core Features Only */}
                <ul className="mt-6 space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-xs font-medium text-slate-300">
                      <div className="h-1 w-1 rounded-full bg-blue-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price & CTA */}
              <div className="mt-10 pt-6 border-t border-white/5">
                <div className="mb-6 flex items-baseline gap-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mr-2">From</span>
                  <span className="text-3xl font-black text-white">{service.price}</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase">QAR</span>
                  {service.recurring && (
                    <span className="text-[10px] text-slate-500 ml-1">{service.recurring}</span>
                  )}
                </div>

                <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-4 text-[11px] font-black uppercase tracking-widest text-white transition-all hover:bg-white hover:text-slate-950">
                  {service.cta}
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}