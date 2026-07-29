import { Suspense } from "react";
import AllProducts from "../../components/AllProducts";

export default async function Products({ searchParams }) {
  const params = await searchParams;
  return (
    <Suspense
      fallback={
        <div className="flex flex-col items-center justify-center py-10 gap-4">
          <div className="animate-spin border-sky-400 border-t-transparent rounded-full h-12 w-12 border-4"></div>
          <span className="font-mono font-medium text-2xl text-sky-600">
            در حال بارگذاری محصولات هستیم ...
          </span>
        </div>
      }>
      <AllProducts searchParams={params} />
    </Suspense>
  );
}
