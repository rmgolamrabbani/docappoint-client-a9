import {
  BriefcaseMedical,
  Building2,
  MapPin,
  Wallet,
  Star,
} from "lucide-react";

import { getAppointments } from "@/lib/all-appointments/data";

const DoctorDetailsPage = async ({ params }) => {
  const { id } = await params;

  const doctors = await getAppointments();

  const doctor = doctors.find((item) => item.id === id);

  if (!doctor) {
    return (
      <div className="py-20 text-center text-2xl font-bold text-slate-700">
        Doctor Not Found
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-sky-100 py-10 lg:py-16">
      <div className="mx-auto max-w-6xl px-4">
        
        <div className="overflow-hidden rounded-[35px] border border-cyan-100 bg-white shadow-2xl">
          
          <div className="grid items-center gap-10 lg:grid-cols-2">
            
            {/* LEFT IMAGE */}
            <div className="relative h-[350px] w-full lg:h-[620px]">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="space-y-7 p-6 lg:p-10">
              
              {/* Specialty */}
              <span className="rounded-full bg-cyan-100 px-4 py-1 text-sm font-semibold text-cyan-700">
                {doctor.specialty}
              </span>

              {/* Name */}
              <div>
                <h1 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-5xl">
                  {doctor.name}
                </h1>

                {/* Rating */}
                <div className="mt-3 flex items-center gap-2">
                  <Star
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />

                  <p className="font-medium text-slate-600">
                    4.9 / 5.0
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="max-w-2xl leading-relaxed text-slate-600">
                {doctor.description}
              </p>

              {/* INFO CARDS */}
              <div className="grid gap-4 sm:grid-cols-2">
                
                {/* Experience */}
                <div className="rounded-2xl border border-cyan-100 bg-cyan-50/60 p-5 transition hover:shadow-md">
                  <div className="flex items-start gap-3">
                    <div className="rounded-xl bg-gradient-to-r from-cyan-600 to-sky-500 p-3 text-white">
                      <BriefcaseMedical size={20} />
                    </div>

                    <div>
                      <p className="text-sm text-slate-500">
                        Experience
                      </p>

                      <h3 className="mt-1 font-bold text-slate-800">
                        {doctor.experience}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Hospital */}
                <div className="rounded-2xl border border-cyan-100 bg-cyan-50/60 p-5 transition hover:shadow-md">
                  <div className="flex items-start gap-3">
                    <div className="rounded-xl bg-gradient-to-r from-cyan-600 to-sky-500 p-3 text-white">
                      <Building2 size={20} />
                    </div>

                    <div>
                      <p className="text-sm text-slate-500">
                        Hospital
                      </p>

                      <h3 className="mt-1 font-bold text-slate-800">
                        {doctor.hospital}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="rounded-2xl border border-cyan-100 bg-cyan-50/60 p-5 transition hover:shadow-md">
                  <div className="flex items-start gap-3">
                    <div className="rounded-xl bg-gradient-to-r from-cyan-600 to-sky-500 p-3 text-white">
                      <MapPin size={20} />
                    </div>

                    <div>
                      <p className="text-sm text-slate-500">
                        Location
                      </p>

                      <h3 className="mt-1 font-bold text-slate-800">
                        {doctor.location}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Fee */}
                <div className="rounded-2xl border border-cyan-100 bg-cyan-50/60 p-5 transition hover:shadow-md">
                  <div className="flex items-start gap-3">
                    <div className="rounded-xl bg-gradient-to-r from-cyan-600 to-sky-500 p-3 text-white">
                      <Wallet size={20} />
                    </div>

                    <div>
                      <p className="text-sm text-slate-500">
                        Consultation Fee
                      </p>

                      <h3 className="mt-1 text-2xl font-extrabold text-cyan-600">
                        ৳{doctor.fee}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div>
                <h2 className="mb-4 text-xl font-bold text-slate-900">
                  Availability
                </h2>

                <div className="flex flex-wrap gap-3">
                  {doctor.availability.map((time, index) => (
                    <span
                      key={index}
                      className="rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700"
                    >
                      {time}
                    </span>
                  ))}
                </div>
              </div>

              {/* Button */}
              <button className="rounded-2xl bg-gradient-to-r from-cyan-600 to-sky-500 px-8 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105">
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorDetailsPage;