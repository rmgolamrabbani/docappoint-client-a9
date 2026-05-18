"use client";

import { X, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const AppointmentModal = ({
  isOpen,
  onClose,
  doctor,
}) => {

  const [showToast, setShowToast] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
      onClose();
    }, 2500);
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
              With Dr. {doctor.name}
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            {/* User Email */}
            <div>

              <label className="mb-2 block text-sm font-semibold text-slate-700">
                User Email
              </label>

              <input
                type="email"
                defaultValue="user@gmail.com"
                className="w-full rounded-xl border border-cyan-200 px-4 py-3 outline-none transition-all focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
              />
            </div>

            {/* Doctor Name */}
            <div>

              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Doctor Name
              </label>

              <input
                type="text"
                value={doctor.name}
                readOnly
                className="w-full rounded-xl bg-slate-100 px-4 py-3 text-slate-700 outline-none"
              />
            </div>

            {/* Patient Name */}
            <div>

              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Patient Name
              </label>

              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full rounded-xl border border-cyan-200 px-4 py-3 outline-none transition-all focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
              />
            </div>

            {/* Gender + Phone */}
            <div className="grid gap-4 md:grid-cols-2">

              <div>

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Gender
                </label>

                <select className="w-full rounded-xl border border-cyan-200 px-4 py-3 outline-none transition-all focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100">

                  <option>Male</option>

                  <option>Female</option>

                  <option>Other</option>
                </select>
              </div>

              <div>

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Phone
                </label>

                <input
                  type="tel"
                  placeholder="01XXXXXXXXX"
                  required
                  className="w-full rounded-xl border border-cyan-200 px-4 py-3 outline-none transition-all focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                />
              </div>
            </div>

            {/* Date + Time */}
            <div className="grid gap-4 md:grid-cols-2">

              <div>

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Date
                </label>

                <input
                  type="date"
                  required
                  className="w-full rounded-xl border border-cyan-200 px-4 py-3 outline-none transition-all focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                />
              </div>

              <div>

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Time
                </label>

                <input
                  type="time"
                  required
                  className="w-full rounded-xl border border-cyan-200 px-4 py-3 outline-none transition-all focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                />
              </div>
            </div>

            {/* Reason */}
            <div>

              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Reason
              </label>

              <textarea
                rows={4}
                placeholder="Brief reason for visit"
                required
                className="w-full rounded-xl border border-cyan-200 px-4 py-3 outline-none transition-all focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full rounded-2xl bg-gradient-to-r from-cyan-600 to-sky-500 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-cyan-200"
            >
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AppointmentModal;