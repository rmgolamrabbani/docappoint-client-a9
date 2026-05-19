"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Moon,
  Sun,
  LogOut,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

import { authClient } from "@/lib/auth-client";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "All Appointments", href: "/all-appointments" },
  { name: "Dashboard", href: "/dashboard" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

  // USER SESSION
  const { data: session } = authClient.useSession();
  const user = session?.user;

  // IMAGE VALIDATION
  const isValidImage =
    user?.image &&
    (user.image.includes("images.unsplash.com") ||
      user.image.includes("i.ibb.co") ||
      user.image.includes("cloudinary.com") ||
      user.image.includes("googleusercontent.com"));

  // LOGOUT
  const handleSignOut = async () => {
    await authClient.signOut();
  };

  // SCROLL EFFECT
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // DARK MODE
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/40 bg-white/70 shadow-xl backdrop-blur-2xl supports-[backdrop-filter]:bg-white/60"
          : "bg-gradient-to-r from-cyan-50/90 via-white/95 to-sky-50/90"
      }`}
    >
      <div className="mx-auto flex h-[84px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="DocAppoint Logo"
            width={135}
            height={90}
            priority
            style={{ width: "auto", height: "auto" }}
            className="transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_12px_rgba(6,182,212,0.35)]"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-2 rounded-full border border-white/40 bg-white/60 px-2 py-1.5 shadow-lg backdrop-blur-xl lg:flex">
          {navLinks.map((link, index) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={index}
                href={link.href}
                className={`relative rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ease-out ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-600 to-sky-500 text-white shadow-lg shadow-cyan-300/40"
                    : "text-slate-700 hover:bg-cyan-50 hover:text-cyan-700 hover:shadow-sm"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="hidden items-center gap-3 lg:flex">

          {/* DARK MODE */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/40 bg-white/70 text-slate-700 shadow-md backdrop-blur-xl transition-all duration-300 hover:bg-cyan-50 hover:shadow-lg"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* USER */}
          {user ? (
            <>
              {/* USER AVATAR */}
              <div className="group relative">

                {isValidImage ? (
                  <Image
                    src={user.image}
                    alt={user.name}
                    width={46}
                    height={46}
                    className="h-12 w-12 rounded-full object-cover ring-2 ring-cyan-200 ring-offset-2 transition-all duration-300 hover:scale-105 hover:ring-cyan-400"
                  />
                ) : (
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-cyan-600 to-sky-500 text-lg font-bold uppercase text-white ring-2 ring-cyan-200 ring-offset-2 transition-all duration-300 hover:scale-105">
                    {user?.name?.charAt(0)}
                  </div>
                )}

                {/* TOOLTIP */}
                <div className="pointer-events-none absolute right-0 top-14 whitespace-nowrap rounded-xl bg-slate-900 px-3 py-2 text-xs font-medium text-white opacity-0 shadow-xl transition-all duration-300 group-hover:opacity-100">
                  {user?.name}
                </div>
              </div>

              {/* LOGOUT */}
              <button
                onClick={handleSignOut}
                className="flex items-center gap-2 rounded-2xl  px-5 py-3 text-sm font-bold text-red-300 shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-xl  border-red-300"
              >
                <LogOut size={17} />
                Logout
              </button>
            </>
            
            
          ) : (
            <>
              {/* LOGIN */}
              <Link
                href="/login"
                className="text-sm font-bold text-slate-700 transition-all duration-300 hover:text-cyan-600"
              >
                Login
              </Link>

              {/* REGISTER */}
              <Link
                href="/register"
                className="rounded-2xl bg-gradient-to-r from-cyan-600 to-sky-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-cyan-200/50 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/40 bg-white/70 text-slate-700 shadow-md backdrop-blur-xl transition-all duration-300 lg:hidden"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="border-t border-white/40 bg-white/80 backdrop-blur-2xl lg:hidden"
          >
            <div className="space-y-3 px-4 py-6">

              {/* NAV LINKS */}
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={index}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block rounded-2xl px-4 py-3 font-semibold transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-cyan-600 to-sky-500 text-white shadow-lg shadow-cyan-300/30"
                        : "border border-cyan-50 bg-white text-slate-700 hover:bg-cyan-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              {/* MOBILE USER */}
              <div className="flex flex-col gap-3 pt-3">

                {user ? (
                  <>
                    <div className="flex items-center gap-3 rounded-2xl border border-cyan-100 bg-white/80 p-3 shadow-sm backdrop-blur-xl">

                      {isValidImage ? (
                        <Image
                          src={user.image}
                          alt={user.name}
                          width={50}
                          height={50}
                          className="h-12 w-12 rounded-full object-cover ring-2 ring-cyan-200 ring-offset-2"
                        />
                      ) : (
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-cyan-600 to-sky-500 text-lg font-bold uppercase text-white ring-2 ring-cyan-200 ring-offset-2">
                          {user?.name?.charAt(0)}
                        </div>
                      )}

                      <div>
                        <h4 className="font-bold text-slate-700">
                          {user?.name}
                        </h4>

                        <p className="text-xs text-slate-500">
                          {user?.email}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={handleSignOut}
                      className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-rose-500 to-red-500 py-3 font-bold text-white shadow-lg shadow-rose-200/40 transition-all duration-300 hover:scale-[1.02]"
                    >
                      <LogOut size={18} />
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/login"
                      className="rounded-2xl border border-cyan-200 bg-white py-3 text-center font-bold text-slate-700 transition-all duration-300 hover:bg-slate-50"
                    >
                      Login
                    </Link>

                    <Link
                      href="/register"
                      className="rounded-2xl bg-gradient-to-r from-cyan-600 to-sky-500 py-3 text-center font-bold text-white shadow-lg shadow-cyan-200/40 transition-all duration-300 hover:scale-[1.02]"
                    >
                      Register
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}