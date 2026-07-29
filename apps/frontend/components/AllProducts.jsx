import { BiError } from "react-icons/bi";
import ProdcutList from "./ProductList";
import Link from "next/link";
import { FcNext, FcPrevious } from "react-icons/fc";
import { enTofa } from "../utils/Utilities";

export default async function AllProducts({ searchParams }) {
  const params = await searchParams;
  const category = params?.category;

  const baseUrl = process.env.MAXBAX_API_URL || "http://localhost:3000";
  const apiPageBase = `${baseUrl}/api/products`;
  let apiCategroyBase = `${baseUrl}/api/products?category=${category}`;

  const url = category ? apiCategroyBase : apiPageBase;

  console.log("Category from Params:", category); // این باید نام دسته بندی را چاپ کند
  console.log("Final Fetch URL:", url);
  let allProductsData = [];

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

    if (Array.isArray(data)) allProductsData = data;
    else if (Array.isArray(data.allProductsData))
      allProductsData = data.allProductsData;
    else if (Array.isArray(data.data)) allProductsData = data.data;
    else allProductsData = [];
  } catch (error) {
    console.log("خطا در دریافت لیست محصولات :", error);
  }

  let ppg = 12;
  let page = parseInt(params?.page) || 1;
  if (page < 1) page = 1;
  if (isNaN(page)) page = 1;

  let allpages = Math.ceil(allProductsData.length / ppg);
  if (page > allpages && allpages > 0) page = allpages;

  let firstIndex = (page - 1) * ppg;
  let lastIndex = firstIndex + ppg;
  let products = allProductsData.slice(firstIndex, lastIndex);
  const categoryQuery = category ? `&category=${category}` : "";

  return (
    <div className="shadow-2xl">
      <div className="p-10">
        {category ? (
          <h1 className="text-center text-3xl font-bold m-5 text-gray-500">
            محصولات {category}
          </h1>
        ) : (
          <h1 className="text-center font-mono text-5xl font-bold m-2 h-14 text-gray-500">
            صفحه اصلی
          </h1>
        )}

        <ProdcutList products={products} />
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
      </div>
    </div>
  );
}
