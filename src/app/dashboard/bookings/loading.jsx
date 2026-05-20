export default function Loading() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-gradient-to-br from-cyan-50 via-white to-sky-100 px-4">

      <div className="w-full max-w-lg rounded-[35px] border border-cyan-100 bg-white p-10 shadow-2xl">

        {/* TOP */}
        <div className="flex flex-col items-center text-center">

          {/* SPINNER */}
          <div className="relative flex h-24 w-24 items-center justify-center">

            <div className="absolute h-24 w-24 animate-spin rounded-full border-[6px] border-cyan-100 border-t-cyan-600"></div>

            <div className="h-16 w-16 rounded-full bg-cyan-50"></div>

          </div>

          <h2 className="mt-8 text-4xl font-extrabold text-slate-900">
            Loading...
          </h2>

          <p className="mt-3 text-slate-500">
            Please wait while we prepare your experience.
          </p>
        </div>

        {/* SKELETON */}
        <div className="mt-10 space-y-5">

          <div className="h-5 animate-pulse rounded-full bg-cyan-100"></div>

          <div className="h-5 w-11/12 animate-pulse rounded-full bg-cyan-100"></div>

          <div className="h-5 w-10/12 animate-pulse rounded-full bg-cyan-100"></div>

          <div className="mt-8 rounded-3xl border border-cyan-100 p-5">

            <div className="flex items-center gap-4">

              <div className="h-16 w-16 animate-pulse rounded-2xl bg-cyan-100"></div>

              <div className="flex-1 space-y-3">

                <div className="h-4 animate-pulse rounded-full bg-cyan-100"></div>

                <div className="h-4 w-2/3 animate-pulse rounded-full bg-cyan-100"></div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}