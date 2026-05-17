"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Stethoscope, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "All Appointments", href: "/appointments" },
  { name: "Dashboard", href: "/dashboard" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-cyan-100 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 lg:px-8">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-500 shadow-lg">
            <Stethoscope className="text-white" size={22} />
          </div>

          <div>
            <h2 className="text-xl font-extrabold tracking-tight text-slate-800">
              DocAppoint
            </h2>
            <p className="text-xs text-slate-500">
              Smart Healthcare
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-2 rounded-full border border-cyan-100 bg-cyan-50/60 px-3 py-2 lg:flex">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="rounded-full px-5 py-2 text-sm font-medium text-slate-700 transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-teal-500 hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="hidden items-center gap-4 lg:flex">
          <button className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan-100 bg-white text-slate-700 shadow-sm transition-all hover:bg-cyan-50">
            <Moon size={18} />
          </button>

          <button className="text-sm font-semibold text-slate-700 transition hover:text-cyan-600">
            Login
          </button>

          <button className="rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105">
            Register
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-100 bg-white text-slate-700 lg:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="border-t border-cyan-100 bg-white lg:hidden"
          >
            <div className="space-y-4 px-4 py-6">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="block rounded-2xl bg-cyan-50 px-4 py-3 font-medium text-slate-700 transition hover:bg-gradient-to-r hover:from-cyan-500 hover:to-teal-500 hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              <div className="flex flex-col gap-3 pt-2">
                <button className="rounded-2xl border border-cyan-200 py-3 font-semibold text-slate-700">
                  Login
                </button>

                <button className="rounded-2xl bg-gradient-to-r from-cyan-500 to-teal-500 py-3 font-semibold text-white shadow-lg">
                  Register
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}


