"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Appointments", href: "/appointments" },
  { name: "Dashboard", href: "/dashboard" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-cyan-100/60 bg-white/80 shadow-lg backdrop-blur-xl"
          : "bg-gradient-to-r from-cyan-50/90 via-white/95 to-sky-50/90"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="DocAppoint Logo"
            width={135}
            height={90}
            priority
            className="object-contain transition duration-300 hover:scale-105"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-2 rounded-full border border-cyan-100 bg-white/70 px-2 py-1.5 shadow-sm backdrop-blur-lg lg:flex">
          {navLinks.map((link, index) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={index}
                href={link.href}
                className={`relative rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-600 to-sky-500 text-white shadow-md"
                    : "text-slate-600 hover:bg-cyan-50 hover:text-cyan-700"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="hidden items-center gap-3 lg:flex">
          
          {/* Dark Mode */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-100 bg-white text-slate-700 shadow-sm transition hover:bg-cyan-50"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button className="text-sm font-bold text-slate-700 transition hover:text-cyan-600">
            Login
          </button>

          <button className="rounded-xl bg-gradient-to-r from-cyan-600 to-sky-500 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-cyan-200/50 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl">
            Register
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-100 bg-white text-slate-700 shadow-sm lg:hidden"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
            className="border-t border-cyan-100 bg-white/95 backdrop-blur-xl lg:hidden"
          >
            <div className="space-y-3 px-4 py-6">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={index}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block rounded-2xl px-4 py-3 font-semibold transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-cyan-600 to-sky-500 text-white"
                        : "border border-cyan-50 bg-white text-slate-700 hover:bg-cyan-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <div className="flex flex-col gap-3 pt-3">
                <button className="rounded-xl border border-cyan-200 bg-white py-3 font-bold text-slate-700 hover:bg-slate-50">
                  Login
                </button>

                <button className="rounded-xl bg-gradient-to-r from-cyan-600 to-sky-500 py-3 font-bold text-white shadow-lg shadow-cyan-200/40">
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