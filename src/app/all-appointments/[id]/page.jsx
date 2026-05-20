import DoctorDetailsClient from "@/components/DoctorDetailsClient";
import { auth } from "@/lib/auth";
import {
  BriefcaseMedical,
  Building2,
  MapPin,
  Wallet,
  Star,
} from "lucide-react";
import { cookies, headers } from "next/headers";

const DoctorDetailsPage = async ({ params }) => {
  const { id } = await params;

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return (
      <div className="py-20 text-center text-3xl font-bold text-red-500">
        Please Login First
      </div>
    );
  }
  
  const cookieStore = await cookies();
  const token = cookieStore.get("better-auth.session_token")?.value;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/appointments/${id}`,
    {
      headers: {
        authorization: `Bearer ${token || ""}`,
      },
      cache: "no-store",
    }
  );

  if (res.status === 401) {
    return (
      <div className="py-20 text-center text-3xl font-bold text-red-500">
        Unauthorized Access
      </div>
    );
  }

  const doctor = await res.json();

  if (!doctor) {
    return (
      <div className="py-20 text-center text-3xl font-bold text-red-500">
        Doctor Not Found
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-sky-100 py-10 lg:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="overflow-hidden rounded-[35px] border border-cyan-100 bg-white shadow-2xl">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="relative h-[350px] w-full lg:h-[620px]">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            <div className="space-y-7 p-6 lg:p-10">
              <span className="rounded-full bg-cyan-100 px-4 py-1 text-sm font-semibold text-cyan-700">
                {doctor.specialty}
              </span>

              <div>
                <h1 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-5xl">
                  {doctor.name}
                </h1>

                <div className="mt-3 flex items-center gap-2">
                  <Star size={18} className="fill-yellow-400 text-yellow-400" />
                  <p className="font-medium text-slate-600">4.9 / 5.0</p>
                </div>
              </div>

              <p className="max-w-2xl leading-relaxed text-slate-600">
                {doctor.description}
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-cyan-100 bg-cyan-50/60 p-5">
                  <div className="flex items-start gap-3">
                    <div className="rounded-xl bg-linear-to-r from-cyan-600 to-sky-500 p-3 text-white">
                      <BriefcaseMedical size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Experience</p>
                      <h3 className="mt-1 font-bold text-slate-800">
                        {doctor.experience}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-cyan-100 bg-cyan-50/60 p-5">
                  <div className="flex items-start gap-3">
                    <div className="rounded-xl bg-linear-to-r from-cyan-600 to-sky-500 p-3 text-white">
                      <Building2 size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Hospital</p>
                      <h3 className="mt-1 font-bold text-slate-800">
                        {doctor.hospital || "Central Hospital"}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              <DoctorDetailsClient doctor={doctor} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorDetailsPage;

