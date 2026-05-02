import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  MapPin,
  Star,
  Phone,
  Search,
  ShieldCheck,
  MessageCircle,
  Navigation,
  Globe,
  CheckCircle,
  FileText,
  Settings,
  TrendingUp,
  ArrowRight,
  Utensils,
  Scissors,
  Car,
  Cross,
  Building2,
  Store,
} from "lucide-react";

type CardItem = {
  icon: LucideIcon;
  title: string;
  text: string;
};

type BusinessItem = CardItem & {
  image: string;
  alt: string;
  badge?: string;
};

const services: CardItem[] = [
  {
    icon: MapPin,
    title: "Google Maps Listing",
    text: "Get your business location on Google Maps and help customers find you easily.",
  },
  {
    icon: Star,
    title: "Profile Optimization",
    text: "We optimize your profile with the right info, photos, categories, and keywords.",
  },
  {
    icon: Phone,
    title: "Call & WhatsApp Leads",
    text: "Let customers call or message you directly from your business profile.",
  },
  {
    icon: Search,
    title: "Local SEO Setup",
    text: "Rank higher in local search results and attract more customers in Qatar.",
  },
  {
    icon: MessageCircle,
    title: "Review Strategy",
    text: "Get more positive reviews and build trust with new customers.",
  },
  {
    icon: ShieldCheck,
    title: "Verification Support",
    text: "We help you verify your profile so your business can go live successfully.",
  },
];

const businesses: BusinessItem[] = [
  {
    icon: Utensils,
    title: "Restaurants & Cafes",
    badge: "#1 for Restaurants",
    image: "/images/google/google-business-profile-restaurant-qatar.webp",
    alt: "Restaurant Google Business Profile setup in Qatar",
    text: "Attract dine-in, takeaway, and delivery customers with Google Maps visibility.",
  },
  {
    icon: Scissors,
    title: "Salons & Barbers",
    image: "/images/google/google-maps-salon-barber-qatar.webp",
    alt: "Salon and barber Google Maps listing setup in Qatar",
    text: "Get nearby customers searching for haircuts, grooming, beauty, and salon services.",
  },
  {
    icon: Car,
    title: "Car Garages & Services",
    image: "/images/google/car-garage-google-maps-qatar.webp",
    alt: "Car garage Google Maps business listing in Qatar",
    text: "Show up in urgent searches like car repair, oil change, and car wash near me.",
  },
  {
    icon: Cross,
    title: "Clinics & Medical Centers",
    image: "/images/google/medical-clinic-google-business-qatar.webp",
    alt: "Medical clinic Google Business Profile setup in Qatar",
    text: "Attract more patients with stronger visibility, accurate information, and reviews.",
  },
  {
    icon: Building2,
    title: "Real Estate Offices",
    image: "/images/google/real-estate-office-google-profile-qatar.webp",
    alt: "Real estate office Google Business Profile setup in Qatar",
    text: "Get more property leads from people searching for agents, rental offices, and real estate services.",
  },
  {
    icon: Store,
    title: "Small Local Businesses",
    image: "/images/google/local-shop-google-maps-qatar.webp",
    alt: "Small local business Google Maps listing setup in Qatar",
    text: "Perfect for shops, service providers, startups, and local companies that want more calls and visits.",
  },
];

const steps: CardItem[] = [
  {
    icon: FileText,
    title: "Share Your Details",
    text: "Send us your business name, location, phone, website, services, and opening hours.",
  },
  {
    icon: Settings,
    title: "Profile Creation",
    text: "We create or claim your Google Business Profile and set everything properly.",
  },
  {
    icon: TrendingUp,
    title: "Optimization",
    text: "We optimize your profile with photos, keywords, categories, and contact options.",
  },
  {
    icon: CheckCircle,
    title: "Go Live & Get Leads",
    text: "Your profile goes live and starts appearing on Google Search and Google Maps.",
  },
];

const profileActions = [
  { icon: Phone, label: "CALL" },
  { icon: MessageCircle, label: "WHATSAPP" },
  { icon: Navigation, label: "DIRECTIONS" },
  { icon: Globe, label: "WEBSITE" },
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fbfbff] text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-linear-to-br from-white via-white to-violet-50 px-4 py-14 sm:px-6 sm:py-20 mt-10">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="text-center lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-slate-700 shadow-sm ring-1 ring-slate-200 sm:text-sm">
              <Globe className="h-4 w-4 text-blue-500" />
              Google Business Profile Setup in Qatar
            </div>

            <h1 className="mx-auto max-w-2xl text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl lg:mx-0">
              Get Found on{" "}
              <span className="bg-linear-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
                Google.
              </span>
              <br />
              Grow Your Business in{" "}
              <span className="bg-linear-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
                Qatar.
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 lg:mx-0">
              We create and optimize your Google Business Profile so customers
              can find you on Google Search and Maps, call you, visit you, and
              trust your business.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs font-bold sm:gap-3 sm:text-sm lg:justify-start">
              {[
                "Higher Visibility",
                "More Calls",
                "More Customers",
                "More Reviews",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-violet-50 px-3 py-2 text-violet-700 sm:px-4"
                >
                  ✓ {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <button
                type="button"
                className="rounded-xl bg-linear-to-r from-violet-600 to-pink-500 px-7 py-4 text-sm font-black text-white shadow-lg shadow-pink-200 transition hover:scale-[1.02] sm:text-base"
              >
                Get Started – 199 QAR →
              </button>
              <button
                type="button"
                className="rounded-xl bg-white px-7 py-4 text-sm font-black text-slate-800 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-50 sm:text-base"
              >
                Book Free Consultation
              </button>
            </div>
          </div>

          {/* Google profile mockup */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-8 rounded-full bg-linear-to-br from-blue-100 to-pink-100 blur-3xl" />

            <div className="relative overflow-hidden rounded-[1.7rem] bg-white shadow-2xl ring-1 ring-slate-200 sm:rounded-4xl">
              <div className="relative h-44 w-full sm:h-48">
                <Image
                  src="/images/google/google-business-profile-card-restaurant-qatar.webp"
                  alt="Google Business Profile restaurant listing example in Qatar"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/25 to-transparent" />
              </div>

              <div className="p-5 sm:p-6">
                <h3 className="text-lg font-black sm:text-xl">
                  Your Business Name
                </h3>

                <div className="mt-2 flex items-center gap-2 text-sm">
                  <span className="font-bold">4.8</span>
                  <span className="text-yellow-400">★★★★★</span>
                  <span className="text-slate-500">(128)</span>
                </div>

                <p className="mt-1 text-sm text-slate-500">Restaurant · Open</p>

                <div className="mt-6 grid grid-cols-4 gap-2 text-center text-[10px] font-black text-blue-600 sm:gap-3 sm:text-xs">
                  {profileActions.map((item) => (
                    <div key={item.label}>
                      <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full border border-blue-200 bg-white sm:h-11 sm:w-11">
                        <item.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      {item.label}
                    </div>
                  ))}
                </div>

                <div className="mt-6 space-y-3 rounded-2xl bg-slate-50 p-4 text-sm">
                  <p className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-blue-500" />
                    Doha, Qatar
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Open · Closes 11PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto grid max-w-7xl gap-4 px-4 py-10 sm:px-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {services.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl bg-white p-5 text-center shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg sm:p-6"
          >
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-violet-600 to-pink-500 text-white shadow-lg">
              <item.icon className="h-7 w-7" />
            </div>
            <h3 className="font-black text-slate-900">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
          </div>
        ))}
      </section>

      {/* Business Cards */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-black uppercase tracking-widest text-violet-600">
            Who this is for
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
            Perfect for Local Businesses in Qatar
          </h2>
          <p className="mt-3 text-base leading-7 text-slate-600">
            Every business that relies on local customers can benefit from
            Google Maps visibility.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {businesses.map((item) => (
            <div
              key={item.title}
              className="relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl"
            >
              {item.badge && (
                <div className="absolute left-0 top-0 z-10 rounded-br-2xl bg-pink-500 px-4 py-2 text-xs font-black text-white sm:px-5 sm:py-3 sm:text-sm">
                  {item.badge}
                </div>
              )}

              <div className="relative h-52 w-full sm:h-56">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="p-5 sm:p-6">
                <div className="relative z-10 -mt-12 mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white text-pink-500 shadow-lg ring-1 ring-slate-100">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-black text-blue-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <div className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 lg:grid lg:grid-cols-2">
          <div className="p-6 sm:p-10">
            <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
              Complete Google Business Profile Setup in Qatar
            </h2>
            <p className="mt-3 leading-7 text-slate-600">
              One-time setup price. No monthly fees for the basic package.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Business information setup",
                "Photos & contact details",
                "Categories & services",
                "Review link & optimization",
                "Location & service area",
                "Verification guidance",
              ].map((item) => (
                <p
                  key={item}
                  className="flex items-start gap-3 text-sm font-bold text-slate-700 sm:text-base"
                >
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-violet-600" />
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="bg-linear-to-br from-violet-50 to-pink-100 p-6 text-center sm:p-10">
            <p className="text-xs font-black uppercase tracking-widest text-violet-600">
              Starting Price
            </p>

            <div className="mt-4 flex items-end justify-center gap-2">
              <span className="text-6xl font-black text-blue-950 sm:text-8xl">
                199
              </span>
              <span className="pb-3 text-lg font-black text-violet-600 sm:pb-4 sm:text-xl">
                QAR
              </span>
            </div>

            <p className="mt-3 text-slate-600">One-time payment</p>

            <button
              type="button"
              className="mt-8 w-full rounded-xl bg-linear-to-r from-violet-600 to-pink-500 px-8 py-4 font-black text-white shadow-lg sm:w-auto sm:px-10"
            >
              Get Started Now →
            </button>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-black uppercase tracking-widest text-violet-600">
            How it works
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
            Simple Process, Big Results
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            We make it easy for you to get found online.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-slate-200 sm:p-7"
            >
              <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-violet-600 font-black text-white">
                {index + 1}
              </div>
              <step.icon className="mx-auto mb-4 h-9 w-9 text-blue-500" />
              <h3 className="font-black">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 sm:pb-16">
        <div className="flex flex-col items-center justify-between gap-8 rounded-3xl bg-linear-to-r from-blue-600 via-violet-600 to-pink-500 p-6 text-center text-white shadow-xl sm:p-10 md:flex-row md:text-left">
          <div className="flex flex-col items-center gap-5 sm:flex-row md:items-center">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white/15 sm:h-20 sm:w-20">
              <MapPin className="h-8 w-8 sm:h-10 sm:w-10" />
            </div>

            <div>
              <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
                Ready to Get Found on Google?
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-white/85 sm:text-base">
                Let’s set up your Google Business Profile and bring more
                customers to your business in Qatar.
              </p>
            </div>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <button
              type="button"
              className="rounded-xl bg-white px-7 py-4 font-black text-slate-900"
            >
              Book Free Consultation
            </button>

            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-xl bg-pink-500 px-7 py-4 font-black text-white"
            >
              Get Started – 199 QAR <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
