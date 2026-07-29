"use client";

import Link from "next/link";
import { enTofa } from "../../../utils/Utilities";
import { FaLink } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../../../Contexts/CartContext";

export default function DetailClient({ mainProduct }) {
  const { addToCart } = useContext(CartContext);
  if (!mainProduct) {
    return (
      <div className="text-center font-mono text-4xl font-bold">
        در حال بارگذاری محصول ...
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10  p-10 mx-auto">
      <div className=" p-10">
        <img
          src={mainProduct?.image}
          alt={mainProduct?.title}
          className="rounded-2xl lg:max-w-150 sm:max-w-96 max-[1260px]:w-125 min-[1060px]:w-125 shadow-md hover:shadow-xl duration-200 text-gray-400 cursor-pointer object-cover"
        />
      </div>
      <div className="flex flex-col p-10 gap-7">
        <h1 className="text-3xl font-bold font-sans">{mainProduct?.title}</h1>
        <Link
          href={`/products?category=${mainProduct.category}`}
          className="text-gray-700 text-lg flex justify-start items-center group gap-2 relative">
          <span className="opacity-0 group-hover:opacity-100 duration-200 absolute -right-6">
            <FaLink />
          </span>
          <span>دسته بندی : {mainProduct?.category}</span>
        </Link>
        <span className="text-gray-700">
          امتیاز کالا :(از {enTofa(5)}({enTofa(mainProduct?.rate)}))
        </span>
        <p className="text-gray-600 text-xl ">{mainProduct?.description}</p>

        <div className="flex justify-between items-center text-gray-800 text-lg font-bold">
          <span>قیمت محصول : {enTofa(mainProduct?.price)} تومان</span>
          <button
            onClick={() => {
              addToCart(mainProduct);
            }}
            type="submit"
            className="bg-blue-400 hover:bg-blue-500 duration-150 cursor-pointer py-3.5 px-6 rounded-xl text-nowrap mx-auto my-auto font-bold text-sm text-gray-100">
            افزودن به سبد خرید
          </button>
        </div>
      </div>
    </div>
  );
}
