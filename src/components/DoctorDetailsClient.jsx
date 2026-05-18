"use client";

import { useState } from "react";
import AppointmentModal from "./AppointmentModal";

const DoctorDetailsClient = ({ doctor }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="rounded-2xl bg-gradient-to-r from-cyan-600 to-sky-500 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02]"
      >
        Book Appointment
      </button>

      <AppointmentModal
        isOpen={open}
        onClose={() => setOpen(false)}
        doctor={doctor}
      />
    </>
  );
};

export default DoctorDetailsClient;