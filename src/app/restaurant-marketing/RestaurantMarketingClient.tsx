import {
  BadgeCheck,
  CheckCircle2,
  Clock3,
  Globe2,
  Headphones,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  TrendingUp,
  Utensils,
  Wallet,
} from "lucide-react";

const WHATSAPP = "https://wa.me/97471294020";

const benefits = [
  {
    icon: TrendingUp,
    title: "More Visibility",
    text: "Show your restaurant on Google and attract more local customers in Qatar.",
  },
  {
    icon: MessageCircle,
    title: "More Orders",
    text: "Customers can view your menu and order directly through WhatsApp.",
  },
  {
    icon: Wallet,
    title: "More Profit",
    text: "Reduce dependency on commission-based food delivery platforms.",
  },
  {
    icon: ShieldCheck,
    title: "More Trust",
    text: "A professional website builds confidence and increases conversions.",
  },
];

const googleFeatures = [
  "Complete Google Business Profile setup",
  "Menu upload and service details",
  "High-quality photos guidance",
  "Business category optimization",
  "Call, WhatsApp, website and direction setup",
  "Local visibility improvement for Google Search & Maps",
];

const phoneMenu = [
  {
    name: "Chicken Pizza",
    price: "25 QAR",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
  },
  {
    name: "Beef Burger",
    price: "20 QAR",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
  },
  {
    name: "Fresh Juice",
    price: "15 QAR",
    image: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8",
  },
];

const packages = [
  {
    name: "Basic",
    subtitle: "Google Setup",
    price: "199",
    color: "from-emerald-500 to-green-700",
    button: "bg-emerald-600 hover:bg-emerald-700",
    features: [
      "Google Business Profile setup",
      "Menu upload",
      "Photos & basic optimization",
      "Call, WhatsApp & direction setup",
      "More visibility on Google",
    ],
  },
  {
    name: "Standard",
    subtitle: "Website + Google Setup",
    price: "499",
    badge: "Most Popular",
    color: "from-blue-500 to-blue-800",
    button: "bg-blue-700 hover:bg-blue-800",
    features: [
      "Responsive website up to 5 pages",
      "Menu page with images",
      "Google Business Profile setup",
      "WhatsApp order button",
      "Basic SEO & speed optimization",
    ],
  },
  {
    name: "Premium",
    subtitle: "Complete Solution",
    price: "599",
    color: "from-orange-500 to-red-600",
    button: "bg-orange-600 hover:bg-orange-700",
    features: [
      "Professional website up to 5 pages",
      "Advanced premium design",
      "Google Business Profile setup",
      "WhatsApp integration",
      "QR menu for tables optional",
      "Basic SEO + 30 days support",
    ],
  },
];

const trustItems = [
  {
    icon: Clock3,
    title: "Fast Delivery",
    text: "1–3 days",
  },
  {
    icon: ShieldCheck,
    title: "100% Secure",
    text: "Reliable setup",
  },
  {
    icon: Headphones,
    title: "Free Support",
    text: "After delivery",
  },
];

export default function RestaurantMarketingClient() {
  return (
    <main className="min-h-screen bg-[#06131b] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_right,#17384a_0%,#06131b_38%,#03080c_100%)]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-yellow-400 blur-3xl" />
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-green-500 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:px-8 lg:py-20">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-white/10 px-4 py-2 text-xs font-bold text-yellow-300 backdrop-blur sm:text-sm">
              <Utensils size={17} />
              Restaurant Website + Google Setup in Qatar
            </div>

            <h1 className="mt-7 text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              Get More
              <span className="block text-yellow-400">Customers</span>
            </h1>

            <p className="mt-6 max-w-xl text-xl font-extrabold uppercase leading-tight text-white sm:text-3xl">
              With a Professional Website +{" "}
              <span className="text-green-400">Google Setup</span>
            </p>

            <div className="mt-8 h-1.5 w-32 rounded-full bg-yellow-400" />

            <div className="mt-10 space-y-5">
              {benefits.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex gap-4 border-b border-white/10 pb-5"
                  >
                    <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl border border-yellow-400/40 bg-yellow-400/10 text-yellow-400 sm:h-14 sm:w-14">
                      <Icon size={28} />
                    </div>

                    <div>
                      <h2 className="text-lg font-black uppercase text-yellow-400 sm:text-xl">
                        {item.title}
                      </h2>
                      <p className="mt-1 max-w-md text-sm leading-7 text-white/85 sm:text-base">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right */}
          <div className="relative min-h-180 sm:min-h-162.5 lg:min-h-0">
            <div className="rounded-4xl border border-white/15 bg-white/10 p-3 shadow-2xl backdrop-blur sm:p-4">
              <div className="rounded-3xl bg-[#101010] p-4 sm:p-5">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400 text-xl">
                      🍽️
                    </div>
                    <div>
                      <p className="font-bold">Tasty Bites</p>
                      <p className="text-xs text-white/50">Restaurant Demo</p>
                    </div>
                  </div>

                  <div className="hidden gap-5 text-xs font-semibold text-white/70 md:flex">
                    <span>Home</span>
                    <span>About</span>
                    <span>Menu</span>
                    <span>Contact</span>
                  </div>
                </div>

                <div className="mt-8 grid gap-8 md:grid-cols-2 md:items-center">
                  <div>
                    <p className="text-sm text-white/75">Delicious Food</p>
                    <h3 className="mt-2 text-3xl font-black leading-tight sm:text-4xl">
                      Good Food
                      <span className="block">Great Moments</span>
                    </h3>

                    <a
                      href={WHATSAPP}
                      className="mt-6 inline-flex rounded-xl bg-yellow-400 px-5 py-3 text-xs font-black uppercase text-black sm:text-sm"
                    >
                      Order on WhatsApp
                    </a>
                  </div>

                  <div className="overflow-hidden rounded-4xl border-4 border-white/10">
                    <img
                      src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
                      alt="Restaurant food website preview"
                      className="h-56 w-full object-cover sm:h-64"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Phone Menu */}
            <div className="mx-auto mt-8 w-full max-w-82.5 rounded-[2.2rem] border border-white/20 bg-white p-5 text-slate-900 shadow-2xl sm:absolute sm:-bottom-8 sm:right-0 sm:mt-0 sm:max-w-[320px] lg:right-6">
              <div className="mx-auto mb-5 h-1.5 w-16 rounded-full bg-slate-300" />

              <h4 className="text-center text-xl font-black text-slate-950">
                Our Menu
              </h4>

              <div className="mt-6 space-y-4">
                {phoneMenu.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-4 rounded-2xl bg-slate-100 p-3"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-16 w-16 shrink-0 rounded-xl object-cover"
                    />
                    <div>
                      <p className="font-black text-slate-950">{item.name}</p>
                      <p className="text-sm font-medium text-blue-900/70">
                        {item.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href={WHATSAPP}
                className="mt-5 flex justify-center rounded-2xl bg-green-600 px-4 py-3 text-sm font-black uppercase text-white transition hover:bg-green-700"
              >
                Order on WhatsApp
              </a>
            </div>

            <a
              href={WHATSAPP}
              className="absolute bottom-20 left-4 flex h-18 w-18 items-center justify-center rounded-full border-4 border-white bg-green-500 text-white shadow-2xl transition hover:scale-105 sm:bottom-0 sm:left-8 sm:h-20 sm:w-20"
            >
              <MessageCircle size={38} />
            </a>
          </div>
        </div>
      </section>

      {/* GOOGLE BUSINESS */}
      <section className="bg-white px-4 py-14 text-slate-900 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-4xl bg-slate-50 p-6 shadow-xl sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white">
                <BadgeCheck size={28} />
              </div>
              <div>
                <p className="text-sm font-bold uppercase text-green-600">
                  Google Business Profile
                </p>
                <h2 className="text-2xl font-black sm:text-3xl">
                  Setup for Restaurants
                </h2>
              </div>
            </div>

            <div className="mt-7 space-y-4">
              {googleFeatures.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-1 shrink-0 text-green-600"
                    size={22}
                  />
                  <p className="text-base font-medium text-slate-700 sm:text-lg">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-4xl border border-slate-200 bg-white p-4 shadow-xl sm:p-5">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-xl font-black">
                    Tasty Bites Restaurant
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    4.8 ⭐⭐⭐⭐⭐ (128) · Restaurant · Open
                  </p>
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white">
                  <CheckCircle2 size={34} />
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  ["Call", Phone],
                  ["Directions", MapPin],
                  ["WhatsApp", MessageCircle],
                  ["Website", Globe2],
                ].map(([label, Icon]) => {
                  const LucideIcon = Icon as typeof Phone;

                  return (
                    <div
                      key={label as string}
                      className="rounded-2xl bg-white p-4 text-center shadow-sm"
                    >
                      <LucideIcon
                        className="mx-auto text-blue-600"
                        size={24}
                      />
                      <p className="mt-2 text-[11px] font-bold uppercase text-slate-600">
                        {label as string}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 rounded-2xl bg-white p-4 shadow-sm">
                <p className="text-sm font-semibold text-slate-700">
                  Dine-in · Takeaway · Delivery
                </p>
                <p className="mt-3 text-sm text-slate-500">
                  Al Sadd, Doha, Qatar
                </p>
                <p className="mt-1 text-sm font-bold text-green-600">
                  Open · Closes 11 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-slate-100 text-slate-900">
        <div className="bg-yellow-400 px-4 py-5 text-center">
          <h2 className="text-xl font-black uppercase tracking-wide sm:text-3xl">
            Complete Online Presence for Your Restaurant
          </h2>
        </div>

        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-8">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className="relative flex overflow-hidden rounded-4xl bg-white shadow-xl ring-1 ring-slate-200"
            >
              <div className="flex w-full flex-col">
                {pkg.badge && (
                  <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 rounded-b-xl bg-yellow-400 px-5 py-2 text-xs font-black uppercase text-slate-900 shadow-md">
                    {pkg.badge}
                  </div>
                )}

                <div
                  className={`bg-linear-to-r ${pkg.color} px-6 py-5 text-center text-white`}
                >
                  <h3 className="text-3xl font-black uppercase">{pkg.name}</h3>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <p className="text-center text-xl font-black uppercase text-slate-700">
                    {pkg.subtitle}
                  </p>

                  <div className="mt-5 flex items-end justify-center gap-2">
                    <span className="text-6xl font-black text-slate-900 sm:text-7xl">
                      {pkg.price}
                    </span>
                    <span className="mb-3 text-xl font-black text-slate-700">
                      QAR
                    </span>
                  </div>

                  <div className="mt-7 flex-1 space-y-4">
                    {pkg.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <CheckCircle2
                          className="mt-0.5 shrink-0 text-green-600"
                          size={20}
                        />
                        <p className="font-medium text-slate-700">{feature}</p>
                      </div>
                    ))}
                  </div>

                  <a
                    href={WHATSAPP}
                    className={`mt-8 flex justify-center rounded-xl px-5 py-4 text-sm font-black uppercase text-white transition ${pkg.button}`}
                  >
                    One-Time Payment
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TRUST CTA */}
      <section className="bg-[#06131b] px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="grid gap-5 sm:grid-cols-3">
            {trustItems.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 text-yellow-400">
                    <Icon size={30} />
                  </div>
                  <div>
                    <h3 className="font-black uppercase text-yellow-400">
                      {item.title}
                    </h3>
                    <p className="text-white/80">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <a
            href={WHATSAPP}
            className="inline-flex items-center justify-center gap-3 rounded-2xl bg-green-600 px-7 py-4 text-center text-base font-black uppercase text-white shadow-xl transition hover:bg-green-500 sm:text-lg"
          >
            <MessageCircle size={28} />
            Let&apos;s Grow Your Restaurant
          </a>
        </div>
      </section>
    </main>
  );
}