import { getAppointments } from "@/lib/all-appointments/data";
import DoctorCard from "./DoctorCard";
import { Star, ShieldCheck, HeartPulse } from "lucide-react";

const TopRatedDoctors = async () => {
  const allAppointmentsData = await getAppointments();

  // Top 3 doctors based on rating
  const topRatedDoctors = [...allAppointmentsData]
    .sort((a, b) => (b.rating || 0) - (a.rating || 0))
    .slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-sky-100 py-16 ">

      {/* Blur Effects */}
      <div className="absolute left-0 top-0 h-52 w-52 rounded-full bg-cyan-300/20 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-60 w-60 rounded-full bg-sky-300/20 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 gap-10  items-center">

        {/* Top Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/80 px-4 py-1.5 text-xs font-semibold tracking-wide text-cyan-700 shadow-sm backdrop-blur-md">
            <Star
              size={14}
              className="fill-cyan-500 text-cyan-500"
            />
            Trusted Healthcare Specialists
          </span>

          <h2 className="mt-5 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Meet Our

            <span className="block bg-gradient-to-r from-cyan-600 to-sky-500 bg-clip-text text-transparent">
              Top Rated Doctors
            </span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Connect with experienced and highly rated doctors dedicated to
            providing trusted healthcare services for every patient.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="mb-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

          <div className="rounded-3xl border border-cyan-100 bg-white/80 p-5 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-100">
            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100">
                <HeartPulse
                  className="text-cyan-600"
                  size={28}
                />
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  10K+
                </h3>

                <p className="text-sm text-slate-500">
                  Happy Patients
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-cyan-100 bg-white/80 p-5 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-100">
            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100">
                <Star
                  className="fill-sky-500 text-sky-500"
                  size={28}
                />
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  4.9
                </h3>

                <p className="text-sm text-slate-500">
                  Average Rating
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-cyan-100 bg-white/80 p-5 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-100">
            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100">
                <ShieldCheck
                  className="text-cyan-600"
                  size={28}
                />
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  250+
                </h3>

                <p className="text-sm text-slate-500">
                  Verified Doctors
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {topRatedDoctors.map((appointment) => (
            <div
              key={appointment.id}
              className="transition-all duration-300 hover:-translate-y-2"
            >
              <DoctorCard doctor={appointment} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopRatedDoctors;