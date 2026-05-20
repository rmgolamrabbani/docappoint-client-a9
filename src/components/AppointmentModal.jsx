"use client";

import { X, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

const AppointmentModal = ({
  isOpen,
  onClose,
  doctor,
}) => {

  const { data: session } = authClient.useSession();

  const user = session?.user;

  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  // =========================
  // BOOK APPOINTMENT
  // =========================
  const handleBooking = async (e) => {

    e.preventDefault();

    setLoading(true);

    const formData = new FormData(e.target);

    const bookingData = {

      // USER INFO
      userId: user?.id,
      userName: user?.name,
      userEmail: user?.email,
      userImage: user?.image,

      // DOCTOR INFO
      doctorId: doctor?._id,
      doctorName: doctor?.name,
      doctorImage: doctor?.image,
      doctorSpeciality: doctor?.speciality,
      doctorFee: doctor?.fee,

      // PATIENT INFO
      patientName: formData.get("patientName"),
      gender: formData.get("gender"),
      phone: formData.get("phone"),

      // APPOINTMENT INFO
      appointmentDate: formData.get("date"),
      appointmentTime: formData.get("time"),
      reason: formData.get("reason"),

      createdAt: new Date(),
    };

    // console.log(bookingData);

    try {

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/bookings`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(bookingData),
        }
      );

      const data = await res.json();

      console.log(data);

      if (data?.insertedId) {

        setShowToast(true);

        e.target.reset();

        setTimeout(() => {

          setShowToast(false);

          onClose();

        }, 2500);

      } else {

        toast.error("Booking Failed!");

      }

    } catch (error) {

      console.log(error);

      toast.error("Something went wrong!");

    } finally {

      setLoading(false);

    }
  };

  
  return (
    <>
      {/* Toast */}
      {showToast && (
        <div className="fixed right-5 top-5 z-[100] animate-in slide-in-from-top duration-300">

          <div className="flex items-center gap-3 rounded-2xl border border-cyan-100 bg-white px-5 py-4 shadow-2xl">

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-100 text-cyan-600">
              <CheckCircle2 size={24} />
            </div>

            <div>
              <h3 className="font-bold text-slate-800">
                Appointment Confirmed
              </h3>

              <p className="text-sm text-slate-500">
                Your booking has been submitted successfully.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Modal */}
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 px-4 py-10 backdrop-blur-sm sm:px-6 lg:px-8">

        <div className="relative mx-auto max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[30px] bg-white p-6 shadow-2xl">

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-5 top-5 text-slate-500 transition hover:text-red-500"
          >
            <X size={22} />
          </button>

          {/* Header */}
          <div className="mb-6">

            <h2 className="text-2xl font-extrabold text-slate-900">
              Book Appointment
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              With Dr. {doctor?.name}
            </p>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleBooking}
            className="space-y-5"
          >

            {/* USER EMAIL */}
            <div>

              <label className="mb-2 block text-sm font-semibold text-slate-700">
                User Email
              </label>

              <input
                type="email"
                value={user?.email || ""}
                readOnly
                className="w-full rounded-xl bg-slate-100 px-4 py-3 text-slate-700 outline-none"
              />
            </div>

            {/* DOCTOR NAME */}
            <div>

              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Doctor Name
              </label>

              <input
                type="text"
                value={doctor?.name || ""}
                readOnly
                className="w-full rounded-xl bg-slate-100 px-4 py-3 text-slate-700 outline-none"
              />
            </div>

            {/* PATIENT NAME */}
            <div>

              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Patient Name
              </label>

              <input
                type="text"
                name="patientName"
                placeholder="Full Name"
                required
                className="w-full rounded-xl border border-cyan-200 px-4 py-3 outline-none transition-all focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
              />
            </div>

            {/* GENDER + PHONE */}
            <div className="grid gap-4 md:grid-cols-2">

              {/* GENDER */}
              <div>

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Gender
                </label>

                <select
                  name="gender"
                  className="w-full rounded-xl border border-cyan-200 px-4 py-3 outline-none transition-all focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                >

                  <option value="Male">
                    Male
                  </option>

                  <option value="Female">
                    Female
                  </option>

                  <option value="Other">
                    Other
                  </option>
                </select>
              </div>

              {/* PHONE */}
              <div>

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Phone
                </label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="01XXXXXXXXX"
                  required
                  className="w-full rounded-xl border border-cyan-200 px-4 py-3 outline-none transition-all focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                />
              </div>
            </div>

            {/* DATE + TIME */}
            <div className="grid gap-4 md:grid-cols-2">

              {/* DATE */}
              <div>

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Date
                </label>

                <input
                  type="date"
                  name="date"
                  required
                  className="w-full rounded-xl border border-cyan-200 px-4 py-3 outline-none transition-all focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                />
              </div>

              {/* TIME */}
              <div>

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Time
                </label>

                <input
                  type="time"
                  name="time"
                  required
                  className="w-full rounded-xl border border-cyan-200 px-4 py-3 outline-none transition-all focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                />
              </div>
            </div>

            {/* REASON */}
            <div>

              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Reason
              </label>

              <textarea
                rows={4}
                name="reason"
                placeholder="Brief reason for visit"
                required
                className="w-full rounded-xl border border-cyan-200 px-4 py-3 outline-none transition-all focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
              ></textarea>
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-2xl bg-gradient-to-r from-cyan-600 to-sky-500 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-cyan-200 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "Booking..." : "Confirm Booking"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AppointmentModal;