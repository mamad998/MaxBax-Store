"use client";
import Image from "next/image";
import { FiStar } from "react-icons/fi";
import { enTofa } from "../utils/Utilities";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";

export default function ProductBox({ product }) {
  const { addToCart, showAlert } = useContext(CartContext);

  return (
    <div className="w-full my-4">
      <div className=" shadow-xl shadow-gray-300 p-3 rounded-xl box-border hover:-translate-y-1.5 duration-200 border border-gray-200">
        <Link href={`/products/${product._id}`}>
          <div className="p-5 shadow-gray-300 hover:shadow-sm hover:shadow-gray-200 duration-200 rounded-sm">
            <Image
              src={product.image}
              width={250}
              height={250}
              alt={product.title}
              className="object-cover w-full"
            />
          </div>
        </Link>

        <div className="flex justify-between items-center gap-2">
          <div
            dir="ltr"
            className="truncate p-3 font-bold text-sm font-sans text-gray-600 hover:text-gray-800 duration-200">
            {" "}
            <Link href={`/products/${product._id}`}>{product.title}</Link>
          </div>
          {product.special === true || product.special === "true" ? (
            <FiStar className="size-6 text-amber-300 fill-amber-400" />
          ) : (
            ""
          )}
        </div>
        <div className="flex justify-center items-center gap-2 my-3">
          <button
            onClick={() => {
              addToCart(product);
              showAlert(product.title);
            }}
            className="bg-blue-400 hover:bg-blue-500 duration-150 cursor-pointer py-1.5 px-2 rounded-xl text-nowrap mx-auto my-auto font-bold text-sm text-gray-100">
            افزودن به سبد خرید
          </button>
          <div className="flex justify-center items-center whitespace-nowrap">
            {enTofa(product.price)} تومان
          </div>
        </div>
      </div>
    </div>
  );
}
