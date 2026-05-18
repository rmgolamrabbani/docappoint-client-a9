"use client";

import { MapPin, BriefcaseMedical, Clock } from "lucide-react";

export default function DoctorCard({ doctor }) {
  const {
    name,
    specialty,
    image,
    experience,
    hospital,
    location,
    fee,
  } = doctor;

  return (
    <div className="group overflow-hidden rounded-[30px] border border-cyan-100 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      
      {/* Image */}
      <div className="relative h-[250px] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />

        {/* Rating */}
        <div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-yellow-500 shadow">
          ⭐ 4.8
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4 p-5">
        
        {/* Doctor Info */}
        <div>
          <h2 className="text-xl font-bold text-slate-800">
            {name}
          </h2>

          <p className="bg-gradient-to-r from-cyan-600 to-sky-500 bg-clip-text text-sm font-semibold text-transparent">
            {specialty}
          </p>
        </div>

        {/* Experience */}
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <BriefcaseMedical size={16} />
          <span>{experience} Experience</span>
        </div>

        {/* Hospital */}
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <Clock size={16} />
          <span>{hospital}</span>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <MapPin size={16} />
          <span>{location}</span>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-slate-100 pt-4">
          
          <div>
            <p className="text-sm text-slate-500">
              Consultation Fee
            </p>

            <h3 className="bg-gradient-to-r from-cyan-600 to-sky-500 bg-clip-text text-2xl font-extrabold text-transparent">
              ৳{fee}
            </h3>
          </div>

          <button className="rounded-xl bg-gradient-to-r from-cyan-600 to-sky-500 px-5 py-2 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-105">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
