"use client";

import { Star } from "lucide-react";

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
    <section className="bg-gradient-to-br from-cyan-50 via-white to-sky-100 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="rounded-full bg-cyan-100 px-4 py-1 text-sm font-semibold text-cyan-700">
            Testimonials
          </span>

          <h2 className="mt-4 text-3xl font-extrabold text-slate-900 md:text-5xl">
            What Patients Say
          </h2>

          <p className="mt-4 text-slate-600">
            Thousands of patients trust DocAppoint for seamless healthcare
            appointments and medical support.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl border border-cyan-100 bg-white/80 p-7 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Stars */}
              <div className="mb-4 flex items-center gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              {/* Review */}
              <p className="text-sm leading-relaxed text-slate-600">
                “{item.review}”
              </p>

              {/* User */}
              <div className="mt-6">
                <h3 className="font-bold text-slate-800">
                  {item.name}
                </h3>

                <p className="text-sm text-slate-500">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}