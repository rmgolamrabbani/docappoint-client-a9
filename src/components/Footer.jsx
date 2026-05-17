"use client";

import Link from "next/link";
import Image from "next/image";

import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const footerLinks = {
  company: [
    { name: "About Us", href: "#" },
    { name: "Our Doctors", href: "#" },
    { name: "Appointments", href: "#" },
    { name: "Contact", href: "#" },
  ],

  services: [
    { name: "Online Consultation", href: "#" },
    { name: "Health Checkup", href: "#" },
    { name: "Emergency Care", href: "#" },
    { name: "Medical Records", href: "#" },
  ],

  support: [
    { name: "Help Center", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "FAQ", href: "#" },
  ],
};

const socialIcons = [
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-cyan-100 bg-gradient-to-br from-cyan-50 via-white to-sky-100">

      {/* Background Blur */}
      <div className="absolute -top-10 left-0 h-40 w-40 rounded-full bg-cyan-300/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-sky-300/20 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">

        {/* Top Grid */}
        <div className="grid grid-cols-1 gap-10 border-b border-cyan-100 pb-10 md:grid-cols-2 lg:grid-cols-5">

          {/* Brand Section */}
          <div className="lg:col-span-2">

            <Link href="/" className="inline-flex items-center">
              <Image
                src="/logo.png"
                alt="DocAppoint Logo"
                width={140}
                height={90}
                className="object-contain"
              />
            </Link>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-600">
              DocAppoint helps patients easily book appointments with trusted
              doctors while providing a secure and modern healthcare management
              experience.
            </p>

            {/* Contact Info */}
            <div className="mt-6 space-y-4">

              <div className="flex items-center gap-3 text-sm text-slate-600">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-100 text-cyan-600">
                  <Mail size={16} />
                </div>
                support@docappoint.com
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-600">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-100 text-cyan-600">
                  <Phone size={16} />
                </div>
                +880 1234-567890
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-600">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-100 text-cyan-600">
                  <MapPin size={16} />
                </div>
                Dhaka, Bangladesh
              </div>

            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-5 text-lg font-bold text-slate-800">
              Company
            </h3>

            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-slate-600 transition hover:text-cyan-600"
                  >
                    {link.name}

                    <ArrowUpRight
                      size={14}
                      className="opacity-0 transition duration-300 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="mb-5 text-lg font-bold text-slate-800">
              Services
            </h3>

            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-slate-600 transition hover:text-cyan-600"
                  >
                    {link.name}

                    <ArrowUpRight
                      size={14}
                      className="opacity-0 transition duration-300 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="mb-5 text-lg font-bold text-slate-800">
              Support
            </h3>

            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-slate-600 transition hover:text-cyan-600"
                  >
                    {link.name}

                    <ArrowUpRight
                      size={14}
                      className="opacity-0 transition duration-300 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-5 pt-8 md:flex-row">

          {/* Copyright */}
          <p className="text-center text-sm text-slate-500 md:text-left">
            © {new Date().getFullYear()} DocAppoint. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {socialIcons.map((Icon, index) => (
              <button
                key={index}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-100 bg-white text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-r hover:from-cyan-600 hover:to-sky-500 hover:text-white"
              >
                <Icon size={16} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}