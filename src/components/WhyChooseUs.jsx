"use client";

import {
  ShieldCheck,
  Clock3,
  Stethoscope,
  HeartPulse,
  CalendarCheck,
  BadgeCheck,
  Sparkles,
} from "lucide-react";

const features = [
  {
    id: 1,
    icon: Stethoscope,
    title: "Expert Doctors",
    desc: "Consult with experienced and verified specialists.",
  },
  {
    id: 2,
    icon: ShieldCheck,
    title: "Secure Data",
    desc: "Your medical information stays protected and private.",
  },
  {
    id: 3,
    icon: Clock3,
    title: "24/7 Support",
    desc: "Get healthcare assistance anytime you need.",
  },
  {
    id: 4,
    icon: CalendarCheck,
    title: "Easy Scheduling",
    desc: "Book appointments within seconds without hassle.",
  },
  {
    id: 5,
    icon: BadgeCheck,
    title: "Verified Specialists",
    desc: "Only trusted and certified doctors are available.",
  },
  {
    id: 6,
    icon: HeartPulse,
    title: "Patient Care",
    desc: "Providing seamless healthcare experiences for everyone.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-sky-100 py-16 md:py-24">

      {/* Blur Effects */}
      <div className="absolute left-0 top-0 h-52 w-52 rounded-full bg-cyan-300/20 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-60 w-60 rounded-full bg-sky-300/20 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/80 px-4 py-1.5 text-xs font-semibold tracking-wide text-cyan-700 shadow-sm backdrop-blur-md">
            <Sparkles
              size={14}
              className="text-cyan-600"
            />
            Why Patients Trust Us
          </span>

          <h2 className="mt-5 text-3xl font-extrabold text-slate-900 sm:text-4xl md:text-5xl">
            Better & Smarter

            <span className="block bg-gradient-to-r from-cyan-600 to-sky-500 bg-clip-text text-transparent">
              Healthcare Experience
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600">
            We simplify healthcare appointments with trusted doctors,
            secure systems, and modern technology to ensure the best
            patient experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.id}
                className="group relative overflow-hidden rounded-3xl border border-cyan-100 bg-white/80 p-7 shadow-lg backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-cyan-200 hover:shadow-cyan-100/60"
              >

                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-sky-500/0 opacity-0 transition-all duration-500 group-hover:opacity-100"></div>

                {/* Icon */}
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-600 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-sky-500 group-hover:text-white group-hover:shadow-lg">
                  <Icon size={30} />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="mt-6 text-xl font-bold text-slate-800 transition-colors duration-300 group-hover:text-cyan-700">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {feature.desc}
                  </p>
                </div>

                {/* Decorative Glow */}
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-200/20 blur-3xl transition-all duration-500 group-hover:bg-cyan-300/30"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 gap-5 md:grid-cols-4">

          <div className="rounded-3xl border border-cyan-100 bg-white/80 p-5 text-center shadow-md backdrop-blur-md">
            <h3 className="text-3xl font-extrabold text-cyan-600">
              10K+
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Happy Patients
            </p>
          </div>

          <div className="rounded-3xl border border-cyan-100 bg-white/80 p-5 text-center shadow-md backdrop-blur-md">
            <h3 className="text-3xl font-extrabold text-cyan-600">
              250+
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Verified Doctors
            </p>
          </div>

          <div className="rounded-3xl border border-cyan-100 bg-white/80 p-5 text-center shadow-md backdrop-blur-md">
            <h3 className="text-3xl font-extrabold text-cyan-600">
              24/7
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Medical Support
            </p>
          </div>

          <div className="rounded-3xl border border-cyan-100 bg-white/80 p-5 text-center shadow-md backdrop-blur-md">
            <h3 className="text-3xl font-extrabold text-cyan-600">
              99%
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Patient Satisfaction
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}