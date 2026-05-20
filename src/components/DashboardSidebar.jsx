"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  CalendarCheck,
  UserRound,
} from "lucide-react";

const DashboardSidebar = () => {

  const pathname = usePathname();

  return (
    <aside className="min-h-screen w-72 border-r border-cyan-100 bg-white p-6 shadow-sm">

      {/* LOGO */}
      <div className="mb-10">

        <h2 className="text-3xl font-extrabold text-cyan-600">
          Dashboard
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Manage your appointments
        </p>
      </div>



      {/* MENU */}
      <div className="space-y-3">

        {/* BOOKINGS */}
        <Link
          href="/dashboard/bookings"
          className={`flex items-center gap-3 rounded-2xl px-5 py-4 text-[15px] font-semibold transition-all duration-300
            
          ${
            pathname === "/dashboard/bookings"
              ? "bg-gradient-to-r from-cyan-600 to-sky-500 text-white shadow-lg shadow-cyan-100"
              : "text-slate-600 hover:bg-cyan-50 hover:text-cyan-600"
          }
          `}
        >
          <CalendarCheck size={20} />

          <span>
            My Bookings
          </span>
        </Link>



        {/* PROFILE */}
        <Link
          href="/dashboard/profile"
          className={`flex items-center gap-3 rounded-2xl px-5 py-4 text-[15px] font-semibold transition-all duration-300
            
          ${
            pathname === "/dashboard/profile"
              ? "bg-gradient-to-r from-cyan-600 to-sky-500 text-white shadow-lg shadow-cyan-100"
              : "text-slate-600 hover:bg-cyan-50 hover:text-cyan-600"
          }
          `}
        >
          <UserRound size={20} />

          <span>
            My Profile
          </span>
        </Link>
      </div>
    </aside>
  );
};

export default DashboardSidebar;