import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {

  title: {
    default: "DocAppoint - Doctor Appointment Management System",
    template: "%s | DocAppoint",
  },

  description:
    "DocAppoint is a modern doctor appointment booking platform where users can find doctors, book appointments, and manage healthcare services easily.",

  keywords: [
    "Doctor Appointment",
    "Healthcare",
    "Medical Booking",
    "Doctor Management",
    "Hospital",
    "Next.js",
    "MERN Stack",
    "DocAppoint",
  ],

  authors: [
    {
      name: "Md. Golam Rabbani",
    },
  ],

  creator: "Md. Golam Rabbani",

  metadataBase: new URL("https://your-domain.com"),

  openGraph: {
    title: "DocAppoint",
    description:
      "Book appointments with trusted doctors online using DocAppoint.",

    url: "https://your-domain.com",

    siteName: "DocAppoint",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DocAppoint Banner",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "DocAppoint",

    description:
      "Modern doctor appointment management platform built with Next.js.",

    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        <Toaster
          position="top-right"
          reverseOrder={false}
        />

        <Footer />

      </body>
    </html>
  );
}

