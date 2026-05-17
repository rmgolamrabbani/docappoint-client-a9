"use client";

import {
  ShieldCheck,
  Clock3,
  Stethoscope,
  HeartPulse,
  CalendarCheck,
  BadgeCheck,
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
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="rounded-full bg-cyan-100 px-4 py-1 text-sm font-semibold text-cyan-700">
            Why Choose Us
          </span>

          <h2 className="mt-4 text-3xl font-extrabold text-slate-900 md:text-5xl">
            Better Healthcare Experience
          </h2>

          <p className="mt-4 text-slate-600">
            We simplify healthcare appointments with modern technology,
            trusted doctors, and secure healthcare management.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.id}
                className="group rounded-3xl border border-cyan-100 bg-gradient-to-br from-white to-cyan-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-600 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-sky-500 group-hover:text-white">
                  <Icon size={28} />
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-800">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}