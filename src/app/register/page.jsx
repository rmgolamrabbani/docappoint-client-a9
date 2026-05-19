"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Mail,
  LockKeyhole,
  User,
  ImageIcon,
} from "lucide-react";

import { useRouter } from "next/navigation";

// authClient import করো তোমার path অনুযায়ী
// example:
import { authClient } from "@/lib/auth-client";

export default function RegisterPage() {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      email: user.email,
      password: user.password,
      name: user.name,
      image: user.image,
    });

    if (error) {
      alert(error.message || "Registration failed");
      return;
    }

    if (data) {
      alert("Registration Successful");
      router.push("/");
    }
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-sky-100 px-4 py-10">
      
      {/* Background Blur */}
      <div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-cyan-300/20 blur-3xl md:h-72 md:w-72"></div>

      <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-sky-300/20 blur-3xl md:h-80 md:w-80"></div>

      {/* Register Card */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-md overflow-hidden rounded-3xl border border-cyan-100 bg-white/90 p-7 shadow-2xl backdrop-blur-xl"
      >
        {/* Top Glow */}
        <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-cyan-200/30 blur-3xl"></div>

        {/* Logo */}
        <div className="flex flex-col items-center justify-center text-center">
          <div className="relative mb-2 overflow-hidden rounded-full">
            <Image
              src="/logo.png"
              alt="DocAppoint Logo"
              width={140}
              height={140}
              className="object-contain transition duration-300 hover:scale-105"
            />
          </div>

          <h1 className="text-3xl font-extrabold text-slate-800">
            Register
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Create your DocAppoint account
          </p>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="mt-8 space-y-5">

          {/* Name */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Name
            </label>

            <div className="flex items-center gap-3 rounded-xl border border-cyan-100 bg-white px-4 py-3 shadow-sm transition focus-within:border-cyan-500 focus-within:ring-2 focus-within:ring-cyan-100">
              <User size={18} className="text-cyan-600" />

              <input
                type="text"
                name="name"
                required
                placeholder="Enter your name"
                className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Email
            </label>

            <div className="flex items-center gap-3 rounded-xl border border-cyan-100 bg-white px-4 py-3 shadow-sm transition focus-within:border-cyan-500 focus-within:ring-2 focus-within:ring-cyan-100">
              <Mail size={18} className="text-cyan-600" />

              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* Photo URL */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Photo URL{" "}
              <span className="text-slate-400">(optional)</span>
            </label>

            <div className="flex items-center gap-3 rounded-xl border border-cyan-100 bg-white px-4 py-3 shadow-sm transition focus-within:border-cyan-500 focus-within:ring-2 focus-within:ring-cyan-100">
              <ImageIcon size={18} className="text-cyan-600" />

              <input
                type="text"
                name="image"
                placeholder="https://example.com/photo.jpg"
                className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Password
            </label>

            <div className="flex items-center gap-3 rounded-xl border border-cyan-100 bg-white px-4 py-3 shadow-sm transition focus-within:border-cyan-500 focus-within:ring-2 focus-within:ring-cyan-100">
              <LockKeyhole size={18} className="text-cyan-600" />

              <input
                type="password"
                name="password"
                required
                placeholder="Enter your password"
                className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-cyan-600 to-sky-500 py-3 font-semibold text-white shadow-lg shadow-cyan-200/40 transition-all duration-300 hover:scale-[1.01] hover:shadow-xl"
          >
            Register
          </button>

          {/* Divider */}
          <div className="relative flex items-center justify-center py-1">
            <div className="h-px w-full bg-slate-200"></div>

            <span className="absolute bg-white px-3 text-xs text-slate-400">
              OR
            </span>
          </div>

          {/* Google Button */}
          <button
            type="button"
            className="flex w-full items-center justify-center gap-3 rounded-xl border border-cyan-100 bg-white py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:bg-cyan-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              className="h-5 w-5"
            >
              <path
                fill="#FFC107"
                d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12S17.4 12 24 12c3 0 5.7 1.1 7.8 2.9l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5z"
              />

              <path
                fill="#FF3D00"
                d="M6.3 14.7l6.6 4.8C14.7 16 19 12 24 12c3 0 5.7 1.1 7.8 2.9l5.7-5.7C34.1 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
              />

              <path
                fill="#4CAF50"
                d="M24 44c5.2 0 10-2 13.5-5.3l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.7-3.3-11.3-8l-6.5 5C9.5 39.5 16.2 44 24 44z"
              />

              <path
                fill="#1976D2"
                d="M43.6 20.5H42V20H24v8h11.3c-1.1 3.1-3.3 5.5-6.2 7.1l6.2 5.2C39 36.7 44 31 44 24c0-1.3-.1-2.3-.4-3.5z"
              />
            </svg>

            Continue with Google
          </button>

          {/* Login Link */}
          <p className="text-center text-sm text-slate-500">
            Already have an account?{" "}
            
            <Link
              href="/login"
              className="font-semibold text-cyan-600 transition hover:text-cyan-700"
            >
              Login
            </Link>
          </p>
        </form>
      </motion.div>
    </section>
  );
}


