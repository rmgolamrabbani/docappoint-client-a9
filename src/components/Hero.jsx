"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

import {
  CalendarCheck,
  Stethoscope,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

const slides = [
  {
    id: 1,
    title: "Book Appointments With Trusted Doctors",
    description:
      "Find expert doctors, schedule appointments instantly, and manage your healthcare journey with ease.",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Smart Healthcare Management",
    description:
      "Track appointments, access medical records, and receive reminders all in one place.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Your Health, Our Priority",
    description:
      "Experience seamless healthcare services with secure and modern appointment management.",
    image:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=1400&auto=format&fit=crop",
  },
];

const features = [
  {
    id: 1,
    icon: CalendarCheck,
    title: "Easy Booking",
    desc: "Book instantly.",
  },
  {
    id: 2,
    icon: Stethoscope,
    title: "Expert Doctors",
    desc: "Trusted specialists.",
  },
  {
    id: 3,
    icon: ShieldCheck,
    title: "Secure System",
    desc: "Protected healthcare.",
  },
];

export default function Banner() {
  return (
    <section className="relative overflow-x-hidden bg-gradient-to-br from-cyan-50 via-white to-sky-100 py-10 md:py-12 lg:py-9">

      {/* Blur Effects */}
      <div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-cyan-300/20 blur-3xl md:h-72 md:w-72"></div>

      <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-sky-300/10 blur-3xl md:h-80 md:w-80"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Main Grid */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-7 text-center lg:text-left"
          >

            {/* Badge */}
            <div>
              <span className="inline-flex items-center rounded-full border border-cyan-200 bg-white/80 px-4 py-1.5 text-xs font-semibold tracking-wide text-cyan-700 shadow-sm backdrop-blur-md">
                 Trusted Healthcare Platform
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Doctor Appointment

                <span className="block bg-gradient-to-r from-cyan-600 to-sky-500 bg-clip-text text-transparent">
                  DocAppoint
                </span>
              </h1>

              <p className="mx-auto max-w-xl text-base leading-relaxed text-slate-600 lg:mx-0">
                Simplify doctor scheduling with a secure and modern healthcare
                management system designed for patients and doctors.
              </p>
            </div>


            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">

            
              <button className="group flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-sky-500 px-7 py-3 font-semibold text-white shadow-lg shadow-cyan-200/40 transition-all duration-300 hover:scale-[1.02]">
                Book Appointment

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 animate-pulse  "
                />
              </button>

              
              <button className="rounded-xl border border-cyan-600 bg-white px-7 py-3 font-semibold text-cyan-700 transition-all duration-300 hover:bg-cyan-50">
                Explore Doctors
              </button>

            </div>

           
            <div className="grid grid-cols-1 gap-4 pt-3 md:grid-cols-3">

              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    whileHover={{ y: -4 }}
                    key={feature.id}
                    className="flex items-center gap-3 rounded-2xl border border-cyan-100 bg-white/80 p-4 shadow-sm backdrop-blur-md transition-all duration-300 hover:shadow-lg md:flex-col md:items-start"
                  >

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-100">
                      <Icon
                        className="text-cyan-600"
                        size={22}
                      />
                    </div>

                    <div className="text-left">
                      <h3 className="text-sm font-bold text-slate-800">
                        {feature.title}
                      </h3>

                      <p className="text-xs text-slate-500">
                        {feature.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

      
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto w-full"
          >

    
            <div className="absolute left-[-40] top-6 z-20 hidden rounded-2xl bg-white/95 p-4 shadow-xl backdrop-blur-md xl:block">
              <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                Active Patients
              </p>

              <h3 className="mt-1 text-2xl font-extrabold text-cyan-600">
                10K+
              </h3>
            </div>

     
            <div className="absolute bottom-6 right-[-40] z-20 hidden rounded-2xl bg-white/95 p-4 shadow-xl backdrop-blur-md xl:block">
              <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                Trusted Doctors
              </p>

              <h3 className="mt-1 text-2xl font-extrabold text-slate-800">
                250+
              </h3>
            </div>


            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              loop={true}
              className="overflow-hidden rounded-3xl shadow-2xl"
            >

              {slides.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <div className="relative h-[280px] w-full sm:h-[380px] md:h-[430px] lg:h-[470px]">

                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      priority
                      className="object-cover"
                    />

            
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

            
                    <div className="absolute bottom-0 left-0 w-full p-5 sm:p-8">

                      <span className="mb-3 inline-flex rounded-full bg-white/20 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-md">
                        Healthcare Service
                      </span>

                      <h2 className="max-w-lg text-xl font-bold leading-snug text-white sm:text-3xl">
                        {slide.title}
                      </h2>

                      <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-200">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </div>
    </section>
  );
}