"use client";

import {
  Star,
  Quote,
  ShieldCheck,
  HeartPulse,
  Sparkles,
} from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Ahmed",
    role: "Patient",
    review:
      "DocAppoint made booking doctor appointments incredibly easy and fast. The experience was smooth and professional.",
  },
  {
    id: 2,
    name: "Rakib Hasan",
    role: "Patient",
    review:
      "I love the clean interface and instant appointment system. Highly recommended healthcare platform.",
  },
  {
    id: 3,
    name: "Nusrat Jahan",
    role: "Patient",
    review:
      "Very secure and easy to use. Finding specialist doctors has never been this simple.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-sky-100 py-16 md:py-24">

      {/* Blur Effects */}
      <div className="absolute left-0 top-0 h-52 w-52 rounded-full bg-cyan-300/20 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-60 w-60 rounded-full bg-sky-300/20 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/80 px-4 py-1.5 text-xs font-semibold tracking-wide text-cyan-700 shadow-sm backdrop-blur-md">
            <Sparkles
              size={14}
              className="text-cyan-600"
            />
            Patient Testimonials
          </span>

          <h2 className="mt-5 text-3xl font-extrabold text-slate-900 sm:text-4xl md:text-5xl">
            What Patients Say About

            <span className="block bg-gradient-to-r from-cyan-600 to-sky-500 bg-clip-text text-transparent">
              DocAppoint
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600">
            Thousands of patients trust DocAppoint for secure healthcare,
            easy appointment booking, and professional medical support.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-4">

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
              4.9★
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Average Rating
            </p>
          </div>

          <div className="rounded-3xl border border-cyan-100 bg-white/80 p-5 text-center shadow-md backdrop-blur-md">
            <h3 className="text-3xl font-extrabold text-cyan-600">
              250+
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Trusted Doctors
            </p>
          </div>

          <div className="rounded-3xl border border-cyan-100 bg-white/80 p-5 text-center shadow-md backdrop-blur-md">
            <h3 className="text-3xl font-extrabold text-cyan-600">
              99%
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Satisfaction
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">

          {testimonials.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-3xl border border-cyan-100 bg-white/80 p-7 shadow-lg backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-cyan-200 hover:shadow-cyan-100/60"
            >

              {/* Decorative Glow */}
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-200/20 blur-3xl transition-all duration-500 group-hover:bg-cyan-300/30"></div>

              {/* Quote Icon */}
              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-600 to-sky-500 text-white shadow-lg">
                <Quote size={26} />
              </div>

              {/* Stars */}
              <div className="relative z-10 mt-6 flex items-center gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill="currentColor"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="relative z-10 mt-5 text-sm leading-relaxed text-slate-600">
                “{item.review}”
              </p>

              {/* User */}
              <div className="relative z-10 mt-7 flex items-center justify-between">

                <div>
                  <h3 className="text-lg font-bold text-slate-800">
                    {item.name}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {item.role}
                  </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-100 text-cyan-600">
                  <HeartPulse size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Banner */}
        <div className="mt-16 rounded-[32px] border border-cyan-100 bg-white/80 p-7 shadow-xl backdrop-blur-md">

          <div className="flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">

            <div className="flex items-center gap-4">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-600 to-sky-500 text-white shadow-lg">
                <ShieldCheck size={32} />
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  Trusted By Thousands
                </h3>

                <p className="mt-1 text-slate-600">
                  Secure, reliable, and modern healthcare appointment
                  management platform.
                </p>
              </div>
            </div>

            <button className="rounded-2xl bg-gradient-to-r from-cyan-600 to-sky-500 px-7 py-3 font-semibold text-white shadow-lg shadow-cyan-200/50 transition-all duration-300 hover:scale-[1.02]">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


