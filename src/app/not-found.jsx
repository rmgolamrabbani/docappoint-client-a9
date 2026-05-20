import Link from "next/link";
import { SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-gradient-to-br from-cyan-50 via-white to-sky-100 px-4">

      <div className="max-w-xl rounded-[35px] border border-cyan-100 bg-white p-10 text-center shadow-2xl">

        <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-cyan-100">

          <SearchX
            size={60}
            className="text-cyan-600"
          />

        </div>

        <h1 className="mt-8 text-6xl font-extrabold text-slate-900">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-bold text-slate-800">
          Page Not Found
        </h2>

        <p className="mt-4 leading-relaxed text-slate-500">
          Sorry, the page you are looking for doesn’t exist
          or may have been moved.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-600 to-sky-500 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.03]"
        >
          Back To Home
        </Link>

      </div>
    </section>
  );
}