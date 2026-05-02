"use client";

import React, { useState } from "react";
import {
  Mail,
  MessageSquare,
  Send,
  ArrowRight,
  Sparkles,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const services = [
  "Google Business Profile",
  "Web Development",
  "CRM Systems",
  "QR Attendance",
  "Digital Branding",
];

export default function ContactClient() {
  const whatsappNumber = "+97471294020";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace("+", "")}`;
  const emailAddress = "hello@samiracloud.com";

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Google Business Profile",
    message: "",
    company: "", // anti-spam honeypot
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({
    type: "",
    message: "",
  });

  const updateField = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });

    if (!form.name || !form.phone || !form.email || !form.message) {
      setStatus({
        type: "error",
        message: "Please fill in your name, phone, email, and message.",
      });
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to send message.");
      }

      setStatus({
        type: "success",
        message: "Message sent successfully. We will contact you soon.",
      });

      setForm({
        name: "",
        phone: "",
        email: "",
        service: "Google Business Profile",
        message: "",
        company: "",
      });
    } catch {
      setStatus({
        type: "error",
        message: "Message could not be sent. Please try WhatsApp instead.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute left-0 top-0 -z-10 h-208 w-full overflow-hidden">
        <div className="absolute -left-20 -top-32 h-136 w-136 rounded-full bg-blue-600/10 blur-[130px]" />
        <div className="absolute left-[5%] top-0 h-96 w-[24rem] rounded-full bg-pink-500/5 blur-[110px]" />
      </div>

      <section className="relative pb-20 pt-32 lg:pb-28 lg:pt-44">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.3em] text-blue-400">
                Connect With Doha Team
              </span>

              <h1 className="mt-8 text-5xl font-black tracking-tighter text-white sm:text-6xl lg:text-7xl lg:leading-[1.05]">
                Let’s build smarter{" "}
                <span className="bg-linear-to-r from-blue-400 via-blue-200 to-pink-500 bg-clip-text text-transparent">
                  digital systems
                </span>
              </h1>

              <p className="mt-8 text-lg leading-relaxed text-slate-400 sm:text-xl">
                From Google Business Profile setup to premium websites, custom
                CRM systems, QR-based attendance platforms, and digital branding
                solutions — Samira Cloud helps businesses in Qatar operate
                better and grow with confidence.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                {services.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-4 py-2 text-xs font-semibold tracking-wide text-slate-300"
                  >
                    <Sparkles size={12} className="text-pink-400" />
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-12 space-y-6">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-4xl border border-white/10 bg-white/3 p-6 transition-all hover:border-green-500/30 hover:bg-white/5"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-slate-900">
                    <MessageSquare className="h-6 w-6 text-green-400" />
                  </div>

                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-slate-500">
                      WhatsApp
                    </p>
                    <p className="text-lg font-bold text-white">
                      {whatsappNumber}
                    </p>
                  </div>

                  <ArrowRight className="ml-auto h-5 w-5 text-slate-600 transition-transform group-hover:translate-x-1 group-hover:text-green-400" />
                </a>

                <a
                  href={`mailto:${emailAddress}`}
                  className="group flex items-center gap-4 rounded-4xl border border-white/10 bg-white/3 p-6 transition-all hover:border-pink-500/30 hover:bg-white/5"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-slate-900">
                    <Mail className="h-6 w-6 text-pink-400" />
                  </div>

                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-slate-500">
                      Business Email
                    </p>
                    <p className="text-lg font-bold text-white">
                      {emailAddress}
                    </p>
                  </div>

                  <ArrowRight className="ml-auto h-5 w-5 text-slate-600 transition-transform group-hover:translate-x-1 group-hover:text-pink-400" />
                </a>
              </div>
            </div>

            <div className="rounded-[2.5rem] border border-white/10 bg-white/3 p-8 backdrop-blur-md sm:p-10 lg:p-12">
              <h2 className="mb-8 text-2xl font-bold tracking-tight text-white">
                Start Your Project
              </h2>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={updateField}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="ml-2 text-[10px] font-black uppercase tracking-widest text-slate-500">
                      Full Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={updateField}
                      placeholder="Your Name"
                      className="w-full rounded-2xl border border-white/10 bg-slate-900/60 px-5 py-4 text-white placeholder-slate-600 outline-none transition focus:border-pink-500/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="ml-2 text-[10px] font-black uppercase tracking-widest text-slate-500">
                      Phone
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={updateField}
                      placeholder="+974"
                      className="w-full rounded-2xl border border-white/10 bg-slate-900/60 px-5 py-4 text-white placeholder-slate-600 outline-none transition focus:border-pink-500/50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="ml-2 text-[10px] font-black uppercase tracking-widest text-slate-500">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={updateField}
                    placeholder="your@email.com"
                    className="w-full rounded-2xl border border-white/10 bg-slate-900/60 px-5 py-4 text-white placeholder-slate-600 outline-none transition focus:border-pink-500/50"
                  />
                </div>

                <div className="space-y-2">
                  <label className="ml-2 text-[10px] font-black uppercase tracking-widest text-slate-500">
                    Interested Service
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={updateField}
                    className="w-full rounded-2xl border border-white/10 bg-slate-900/60 px-5 py-4 text-white outline-none transition focus:border-pink-500/50"
                  >
                    {services.map((item) => (
                      <option key={item} value={item} className="bg-slate-950">
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="ml-2 text-[10px] font-black uppercase tracking-widest text-slate-500">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={updateField}
                    placeholder="Tell us about your project..."
                    className="w-full resize-none rounded-2xl border border-white/10 bg-slate-900/60 px-5 py-4 text-white placeholder-slate-600 outline-none transition focus:border-pink-500/50"
                  />
                </div>

                {status.message && (
                  <div
                    className={`flex items-center gap-3 rounded-2xl border px-4 py-3 text-sm ${
                      status.type === "success"
                        ? "border-green-500/20 bg-green-500/10 text-green-300"
                        : "border-red-500/20 bg-red-500/10 text-red-300"
                    }`}
                  >
                    {status.type === "success" ? (
                      <CheckCircle2 size={18} />
                    ) : (
                      <AlertCircle size={18} />
                    )}
                    {status.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="group relative flex h-14 w-full items-center justify-center overflow-hidden rounded-2xl bg-white px-10 text-sm font-black uppercase tracking-widest text-slate-950 transition-all hover:scale-[1.01] active:scale-95 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {loading ? (
                      <>
                        Sending
                        <Loader2 size={16} className="animate-spin" />
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={16} />
                      </>
                    )}
                  </span>

                  <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-pink-100/70 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                </button>

                <p className="text-center text-xs text-slate-500">
                  Prefer faster communication? Contact us directly on WhatsApp.
                </p>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-2xl border border-green-500/20 bg-green-500/5 px-6 py-4 text-sm font-semibold text-green-300 transition hover:bg-green-500/10"
                >
                  Message on WhatsApp
                </a>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}