"use client";

import { useMemo, useState } from "react";

import DoctorCard from "@/components/DoctorCard";

import {
  Stethoscope,
  Sparkles,
  Search,
  X,
} from "lucide-react";

export default function AllAppointmentsClient({ allAppointmentsData }) {

  const [searchTerm, setSearchTerm] = useState("");

  const filteredDoctors = useMemo(() => {

    if (!allAppointmentsData) return [];

    return allAppointmentsData.filter((doctor) =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  }, [allAppointmentsData, searchTerm]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-sky-100 py-5  ">

      {/* Blur */}
      <div className="absolute left-0 top-0 h-56 w-56 rounded-full bg-cyan-300/20 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">

          
          <h1 className="mt-5 text-3xl font-extrabold text-slate-900 sm:text-4xl md:text-5xl">
            Find & Book

            <span className="block bg-gradient-to-r from-cyan-600 to-sky-500 bg-clip-text text-transparent">
              Trusted Doctors
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600">
            Discover experienced specialists and book appointments instantly.
          </p>
        </div>

        {/* Search */}
        <div className="mx-auto mt-12 max-w-2xl">

          <div className="relative overflow-hidden rounded-2xl border border-cyan-100 bg-white/80 shadow-xl backdrop-blur-md">

            <div className="flex items-center">

              <div className="pl-5 text-cyan-600">
                <Search size={22} />
              </div>

              <input
                type="text"
                placeholder="Search doctor by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-transparent px-4 py-4 text-sm text-slate-700 outline-none placeholder:text-slate-400"
              />

              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-cyan-100 text-cyan-600"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-16">

          {filteredDoctors.length === 0 ? (
            <div className="rounded-3xl border border-cyan-100 bg-white/80 py-16 text-center shadow-lg backdrop-blur-md">

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-cyan-100 text-cyan-600">
                <Stethoscope size={40} />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-800">
                No Doctor Found
              </h3>

            </div>
          ) : (
            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">

              {filteredDoctors.map((appointment) => (
                <div
                  key={appointment.id}
                  className="transition-all duration-300 hover:-translate-y-2"
                >
                  <DoctorCard doctor={appointment} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}