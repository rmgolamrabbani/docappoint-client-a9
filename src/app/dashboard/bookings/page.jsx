import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import AppointmentCard from "@/components/AppointmentCard";
import { CalendarCheck2 } from "lucide-react";

export default async function BookingsPage() {

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  // GET TOKEN
  const token = session?.token;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${user?.id}`,
    {
      cache: "no-store",

      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  // UNAUTHORIZED
  if (res.status === 401) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center px-4">

        <div className="rounded-[30px] border border-red-100 bg-white px-10 py-12 text-center shadow-2xl">

          <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-red-100">

            <CalendarCheck2
              size={40}
              className="text-red-500"
            />

          </div>

          <h2 className="text-3xl font-extrabold text-slate-900">
            Unauthorized Access
          </h2>

          <p className="mt-3 max-w-md text-slate-500">
            Please login first to view your bookings.
          </p>

        </div>
      </div>
    );
  }

  const data = await res.json();

  const bookings = Array.isArray(data) ? data : [];

  return (
    <section className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-sky-100 py-10 lg:py-14">

      <div className="mx-auto max-w-7xl px-4">

        {/* PAGE HEADER */}
        <div className="mb-10 text-center">

          <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-sky-500 text-white shadow-lg">

            <CalendarCheck2 size={38} />

          </div>

          <h1 className="text-4xl font-extrabold text-slate-900 md:text-5xl">
            My Appointments
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-500 md:text-lg">
            Manage your booked doctor appointments and stay updated with your healthcare schedule.
          </p>

        </div>

        {/* EMPTY STATE */}
        {bookings.length === 0 ? (

          <div className="mx-auto max-w-2xl rounded-[35px] border border-cyan-100 bg-white px-6 py-16 text-center shadow-xl">

            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-cyan-100">

              <CalendarCheck2
                size={46}
                className="text-cyan-600"
              />

            </div>

            <h2 className="text-3xl font-extrabold text-slate-900">
              No Appointments Yet
            </h2>

            <p className="mt-4 text-slate-500">
              You haven’t booked any appointments yet.
              Start by exploring our doctors and schedule your first appointment.
            </p>

          </div>

        ) : (

          <>
            {/* TOP INFO BAR */}
            <div className="mb-8 flex flex-col items-center justify-between gap-4 rounded-[28px] border border-cyan-100 bg-white px-6 py-5 shadow-lg sm:flex-row">

              <div>

                <h3 className="text-2xl font-bold text-slate-900">
                  Welcome Back, {user?.name}
                </h3>

                <p className="mt-1 text-slate-500">
                  You have {bookings.length} booked appointment
                  {bookings.length > 1 && "s"}.
                </p>

              </div>

              <div className="rounded-2xl bg-gradient-to-r from-cyan-600 to-sky-500 px-6 py-3 text-white shadow-lg">

                <p className="text-sm font-medium">
                  Total Bookings
                </p>

                <h2 className="text-3xl font-extrabold">
                  {bookings.length}
                </h2>

              </div>
            </div>

            {/* APPOINTMENT LIST */}
            <div className="grid gap-6">

              {bookings.map((appointment) => (
                <AppointmentCard
                  key={appointment._id}
                  appointment={appointment}
                />
              ))}

            </div>
          </>
        )}
      </div>
    </section>
  );
}