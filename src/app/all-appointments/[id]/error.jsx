"use client";

import { AlertTriangle } from "lucide-react";

export default function Error({
  error,
  reset,
}) {

  return (
    <section className="flex min-h-screen items-center justify-center bg-gradient-to-br from-cyan-50 via-white to-sky-100 px-4">

      <div className="max-w-xl rounded-[35px] border border-red-100 bg-white p-10 text-center shadow-2xl">

        <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-red-100">

          <AlertTriangle
            size={60}
            className="text-red-500"
          />

        </div>

        <h1 className="mt-8 text-4xl font-extrabold text-slate-900">
          Something Went Wrong
        </h1>

        <p className="mt-4 leading-relaxed text-slate-500">
          An unexpected error occurred while loading this page.
        </p>

        <p className="mt-2 text-sm text-slate-400">
          {error?.message}
        </p>

        <button
          onClick={() => reset()}
          className="mt-8 rounded-2xl bg-gradient-to-r from-cyan-600 to-sky-500 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.03]"
        >
          Try Again
        </button>

      </div>
    </section>
  );
}