"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { BiErrorAlt } from "react-icons/bi";
import { BsExclamationCircle } from "react-icons/bs";

export default function DeleteProduct() {
  const { id } = useParams();
  const router = useRouter();
  const [error, setError] = useState(null);
  async function handleDelete() {
    const baseUrl = process.env.MAXBAX_API_URL_ADMIN || "http://localhost:3001";
    const apiBase = `${baseUrl}/api/orders`;
    try {
      const response = await fetch(`${apiBase}/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        console.log("پاسخی از سرور دریافت نشد");
        setError("پاسخی از سرور دریافت نشد");
      } else {
        router.push("/orders");
        router.refresh();
      }
    } catch (error) {
      console.error(error, "خطایی در نمایش متن حذف رخ داد");
      setError("خطایی در نمایش متن حذف رخ داد");
    }
  }
  return (
    <div className="m-5 ms-8">
      {error && (
        <div className="text-center text-2xl font-bold">
          {error}
          <BiErrorAlt className="text-yellow-500" />
        </div>
      )}
      <h1 className="flex justify-start items-center ">
        <BsExclamationCircle className="size-6 text-yellow-500 me-3" />
        Are you sure you want to{" "}
        <strong>
          <u className="px-2"> delete </u>
        </strong>{" "}
        this order from list ?
      </h1>
      <button
        className="py-1 px-4 bg-sky-300 hover:bg-sky-400 duration-300 rounded-lg mt-5 cursor-pointer"
        onClick={handleDelete}>
        YES , delete
      </button>
      <button
        className="py-1 px-4 bg-sky-300 hover:bg-sky-400 duration-300 rounded-lg ms-3 cursor-pointer"
        onClick={() => router.push("/orders")}>
        Cancel
      </button>
    </div>
  );
}
