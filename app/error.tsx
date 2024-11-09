"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl font-extrabold tracking-tight text-app-primary lg:text-9xl">
            404
          </h1>
          <p className="mb-4 text-3xl font-bold tracking-tight text-[#111111] md:text-4xl">
            {error.message}
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            Sorry, we can&apos;t find that page. You&apos;ll find lots to
            explore on the home page.{" "}
          </p>
          <button
            onClick={() => reset()}
            className="dark:focus:ring-primary-900 my-4 inline-flex rounded-lg bg-app-primary px-5 py-2.5 text-center text-sm font-medium text-app-black2 hover:bg-app-primary focus:outline-none focus:ring-4 focus:ring-app-primary2"
          >
            Try Again
          </button>
        </div>
      </div>
    </section>
  );
}
