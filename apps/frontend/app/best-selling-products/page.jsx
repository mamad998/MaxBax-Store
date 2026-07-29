import Link from "next/link";
import ProdcutList from "../../components/ProductList";
import { enTofa } from "../../utils/Utilities";
import { FcNext, FcPrevious } from "react-icons/fc";
import { Suspense } from "react";

export default async function bestSellingProducts({ searchParams }) {
  const params = await searchParams;
  const category = await params?.category;
  const baseUrl = process.env.MAXBAX_API_URL || "http://localhost:3000";
  const apiPageBase = `${baseUrl}/api/products`;
  let apiCategroyBase = `${baseUrl}/api/products?categroy=${category}`;

  const url = category ? apiCategroyBase : apiPageBase;

  let StarProducts = [];
  try {
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) {
      console.log("خطا در دریافت لیست محصولات!!");
      return (
        <div className="flex justify-center items-center text-2xl font-bold">
          خطا در دریافت لیست محصولات
          <BiError className="fill-red-700 size-10" />
        </div>
      );
    }
    const data = await response.json();

    if (Array.isArray(data)) {
      StarProducts = data;
    } else if (Array.isArray(data.StarProducts)) {
      StarProducts = data.StarProducts;
    } else if (Array.isArray(data.data)) {
      StarProducts = data.data;
    } else {
      StarProducts = [];
    }
  } catch (error) {
    console.log("خطا در دریافت لیست محصولات :", error);
  }
  const products = StarProducts.filter(
    (product) => product.special === true || product.special === "true",
  );
  const ppg = 8;
  let page = parseInt(params?.page) || 1;
  if (page < 1) page = 1;
  if (isNaN(page)) page = 1;

  const allpages = Math.ceil(products.length / ppg);
  if (page > allpages && allpages > 0) page = allpages;

  let firstIndex = (page - 1) * ppg;
  let lastIndex = firstIndex + ppg;
  let productsResult = products.slice(firstIndex, lastIndex);
  const categoryQuery = category ? `&category=${category}` : "";
  return (
    <Suspense
      fallback={
        <div className="flex flex-col items-center justify-center gap-4 py-10">
          <div
            className="h-12 w-12 animate-spin border-sky-400  border-4 border-t-transparent rounded-full"
            role="status"></div>
          <span className="font-mono font-medium text-2xl text-sky-600">
            در حال بارگذاری محصولات هستیم ...
          </span>
        </div>
      }>
      <>
        {category ? (
          <h1 className="text-center text-3xl font-bold m-5">
            محصولات {category}
          </h1>
        ) : (
          <h1 className="text-center text-3xl font-bold m-5 text-gray-500">
            محصولات پر فروش
          </h1>
        )}
        <ProdcutList products={productsResult} />
        <div className="flex justify-center items-center flex-row-reverse m-5">
          {page > 1 && (
            <Link
              className="bg-blue-300 text-2xl p-2 rounded-full mx-2 cursor-pointer hover:bg-blue-400 hover:fill-blue-200 "
              href={`?page=${page - 1}${categoryQuery}`}>
              <FcPrevious />
            </Link>
          )}
          <span className="flex flex-row-reverse text-lg ">{`  ${enTofa(page)} از ${enTofa(allpages)} `}</span>

          {page < allpages && (
            <Link
              className=" bg-blue-300 text-2xl p-2 rounded-full mx-2 cursor-pointer hover:bg-blue-400 hover:fill-blue-200"
              href={`?page=${page + 1}${categoryQuery}`}>
              <FcNext />
            </Link>
          )}
        </div>
      </>
    </Suspense>
  );
}
