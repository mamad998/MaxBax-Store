import { Suspense } from "react";
import AllProducts from "../components/AllProducts";
import HeroSection from "../components/HeroSection";

export default async function Home({ searchParams }) {
  return (
    <>
      <HeroSection />
      <Suspense
        fallback={
          <div className="flex flex-col items-center justify-center gap-4 py-10">
            <div
              className="h-12 w-12 animate-spin rounded-full border-4 border-sky-400 border-t-transparent"
              role="status"></div>

            <span className="font-mono text-2xl font-medium text-sky-600">
              در حال بارگذاری محصولات هستیم...
            </span>
          </div>
        }>
        <AllProducts searchParams={searchParams} />
      </Suspense>
    </>
  );
}
