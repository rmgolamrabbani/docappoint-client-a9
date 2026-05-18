"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarCheck, User } from "lucide-react";

const tabs = [
  {
    name: "My Bookings",
    href: "/dashboard/bookings",
    icon: CalendarCheck,
  },
  {
    name: "My Profile",
    href: "/dashboard/profile",
    icon: User,
  },
];

export default function DashboardLayout({ children }) {
  const pathname = usePathname();

  return (
    <section className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-cyan-100">
      <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8">

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-slate-800">
            Dashboard
          </h1>

          <p className="mt-2 text-slate-500">
            Manage your appointments and profile
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-10 flex flex-wrap gap-4">
          {tabs.map((tab, index) => {
            const Icon = tab.icon;

            const active = pathname === tab.href;

            return (
              <Link
                key={index}
                href={tab.href}
                className={`flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                  active
                    ? "bg-gradient-to-r from-cyan-600 to-sky-500 text-white shadow-md"
                    : "bg-white  from-cyan-600 to-sky-500 shadow hover:bg-cyan-100"
                }`}
              >
                <Icon size={18} />
                {tab.name}
              </Link>
            );
          })}
        </div>

        {/* Dynamic Page Content */}
        <div className="rounded-[28px] border border-cyan-100 bg-white p-6 shadow-lg">
          {children}
        </div>
      </div>
    </section>
  );
}