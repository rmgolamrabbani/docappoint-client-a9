"use client";

import {
  CalendarDays,
  Clock3,
  Phone,
  Pencil,
  Trash2,
  X,
} from "lucide-react";

import { useState } from "react";
import toast from "react-hot-toast";

const AppointmentCard = ({ appointment }) => {

  const {
    _id,
    doctorName,
    doctorImage,
    patientName,
    appointmentDate,
    appointmentTime,
    reason,
  } = appointment;

  // =========================
  // MODAL STATE
  // =========================
  const [isModalOpen, setIsModalOpen] =
    useState(false);

  // =========================
  // FORM STATE
  // =========================
  const [updatedPatientName, setUpdatedPatientName] =
    useState(patientName);

  const [updatedDate, setUpdatedDate] =
    useState(appointmentDate);

  const [updatedTime, setUpdatedTime] =
    useState(appointmentTime);

  const [updatedReason, setUpdatedReason] =
    useState(reason);



  // =========================
  // DELETE BOOKING
  // =========================
  const handleDeleteBooking = async () => {

    const confirmDelete = confirm(
      "Are you sure you want to delete?"
    );

    if (!confirmDelete) return;

    try {

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${_id}`,
        {
          method: "DELETE",
        }
      );

      const data = await res.json();

      if (data?.deletedCount > 0) {

        toast.success("Appointment Deleted!");

        window.location.reload();

      } else {

        toast.error("Delete Failed!");

      }

    } catch (error) {

      console.log(error);

      toast.error("Something went wrong!");
    }
  };



  // =========================
  // UPDATE BOOKING
  // =========================
  const handleUpdateBooking = async (e) => {

    e.preventDefault();

    const updatedBooking = {

      patientName: updatedPatientName,
      appointmentDate: updatedDate,
      appointmentTime: updatedTime,
      reason: updatedReason,
    };

    try {

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${_id}`,
        {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updatedBooking),
        }
      );

      const data = await res.json();

      if (data?.modifiedCount > 0) {

        toast.success("Appointment Updated!");

        setIsModalOpen(false);

        window.location.reload();

      } else {

        toast.error("No Changes Found!");

      }

    } catch (error) {

      console.log(error);

      toast.error("Update Failed!");
    }
  };



  return (
    <>
      {/* CARD */}
      <div className="overflow-hidden rounded-[28px] border border-cyan-100 bg-white p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-100">

        {/* TOP */}
        <div className="flex items-start gap-4">

          {/* IMAGE */}
          <img
            src={doctorImage}
            alt={doctorName}
            className="h-20 w-20 rounded-2xl object-cover"
          />

          {/* INFO */}
          <div className="flex-1">

            <h2 className="text-xl font-bold text-slate-800">
              {doctorName}
            </h2>

            <div className="mt-3 space-y-2 text-sm text-slate-500">

              {/* PATIENT */}
              <div className="flex items-center gap-2">
                <Phone size={15} />
                <span>
                  Patient: {patientName}
                </span>
              </div>

              {/* DATE */}
              <div className="flex items-center gap-2">
                <CalendarDays size={15} />
                <span>
                  Date: {appointmentDate}
                </span>
              </div>

              {/* TIME */}
              <div className="flex items-center gap-2">
                <Clock3 size={15} />
                <span>
                  Time: {appointmentTime}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* REASON */}
        <div className="mt-5">

          <p className="text-sm font-semibold text-slate-700">
            Reason
          </p>

          <p className="mt-1 text-sm text-slate-500">
            {reason}
          </p>
        </div>

        {/* BUTTONS */}
        <div className="mt-6 flex items-center gap-3">

          {/* UPDATE */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700 transition hover:bg-cyan-100"
          >
            <Pencil size={15} />
            Update
          </button>

          {/* DELETE */}
          <button
            onClick={handleDeleteBooking}
            className="flex items-center gap-2 rounded-full bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600"
          >
            <Trash2 size={15} />
            Delete
          </button>
        </div>
      </div>



      {/* =========================
          UPDATE MODAL
      ========================= */}
      {
        isModalOpen && (

          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm">

            <div className="relative w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl">

              {/* CLOSE */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute right-5 top-5 text-slate-400 transition hover:text-red-500"
              >
                <X size={20} />
              </button>

              {/* HEADER */}
              <div className="mb-6">

                <h2 className="text-2xl font-bold text-slate-800">
                  Update Appointment
                </h2>
              </div>



              {/* FORM */}
              <form
                onSubmit={handleUpdateBooking}
                className="space-y-5"
              >

                {/* DOCTOR */}
                <div>

                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Doctor
                  </label>

                  <input
                    type="text"
                    value={doctorName}
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
                    value={updatedPatientName}
                    onChange={(e) =>
                      setUpdatedPatientName(
                        e.target.value
                      )
                    }
                    className="w-full rounded-xl border border-cyan-200 px-4 py-3 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                  />
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
                      value={updatedDate}
                      onChange={(e) =>
                        setUpdatedDate(
                          e.target.value
                        )
                      }
                      className="w-full rounded-xl border border-cyan-200 px-4 py-3 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                    />
                  </div>



                  {/* TIME */}
                  <div>

                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Time
                    </label>

                    <input
                      type="time"
                      value={updatedTime}
                      onChange={(e) =>
                        setUpdatedTime(
                          e.target.value
                        )
                      }
                      className="w-full rounded-xl border border-cyan-200 px-4 py-3 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
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
                    value={updatedReason}
                    onChange={(e) =>
                      setUpdatedReason(
                        e.target.value
                      )
                    }
                    className="w-full rounded-xl border border-cyan-200 px-4 py-3 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                  />
                </div>



                {/* BUTTON */}
                <button
                  type="submit"
                  className="w-full rounded-2xl bg-gradient-to-r from-cyan-600 to-sky-500 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.01]"
                >
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        )
      }
    </>
  );
};

export default AppointmentCard;