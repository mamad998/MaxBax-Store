"use client";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BiLeftArrowCircle } from "react-icons/bi";
import { BsExclamationCircle } from "react-icons/bs";

export default function Edit() {
  const { id } = useParams();
  const router = useRouter();

  const [categories, setCategories] = useState([
    "وسایل الکترونیکی",
    "لپتاپ",
    "ساعت",
    "هدفون",
    "موس",
    "پاوربانک",
    "بلندگو",
    "مانیتور",
    "چراغ مطالعه",
    "فشن",
    "خانه و کاشانه",
  ]);
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    rate: "",
    special: false,
    image: "",
    description: "",
    category: "وسایل الکترونیکی",
    addNewCategory: "",
  });

  useEffect(() => {
    const baseUrl =
      process.env.NEXT_PUBLIC_MAXBAX_API_URL_ADMIN || "http://localhost:3001";

    async function fetchProduct() {
      try {
        const response = await fetch(`${baseUrl}/api/products/${id}`);
        if (response.ok) {
          const result = await response.json();
          const product = result.products || result.data;

          setFormData({
            title: product.title || "",
            price: product.price || "",
            rate: product.rate || "",
            special: product.special || false,
            image: product.image || "",
            description: product.description || "",
            category: product.category || "وسایل الکترونیکی",
            addNewCategory: product.addNewCategory || "",
          });
        }
      } catch (error) {
        console.error("خطای دریافت محصولات آماده ی ویرایش");
      }
    }

    fetchProduct();
  }, [id]);

  function handleChange(e) {
    const { name, type, checked, value } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const baseUrl = process.env.MAXBAX_API_URL_ADMIN || "http://localhost:3001";

    try {
      const response = await fetch(`${baseUrl}/api/products/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        router.push("/products");
      }
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="me-auto m-5 ms-14">
      <div className="max-w-120">
        <form
          onSubmit={handleSubmit}
          className="w-full rounded-xl border border-gray-400 shadow-lg grid grid-cols-2">
          <div className=" border-b border-gray-400 col-span-2 m-3">
            <div className="flex justify-between items-center">
              <h1 className="col-span-2 p-1 text-xl font-bold font-serif">
                Edit The Product Below
              </h1>
              <Link
                className="text-center cursor-pointer text-green-300 hover:text-green-400 ms-auto duration-300"
                onClick={() => {
                  router.push("/products");
                }}
                href={`/products`}>
                <BiLeftArrowCircle className="size-8" />
              </Link>
            </div>
            <span className=" text-[10px] hover:text-gray-600 duration-300 cursor-none text-gray-400 text-nowrap flex justify-start items-center">
              Please consider filling all of the methods to prevent future
              errors <BsExclamationCircle />
            </span>
          </div>

          <input
            onChange={handleChange}
            className="rounded-md py-1 px-4 m-3  outline-none border border-gray-300 hover:shadow-md hover:shadow-gray-200 focus:shadow-sky-300 duration-300"
            type="text"
            value={formData.title || ""}
            name="title"
            placeholder="title"
          />
          <input
            onChange={handleChange}
            className="rounded-md py-1 px-4 m-3 outline-none border border-gray-300 hover:shadow-md hover:shadow-gray-200 focus:shadow-sky-300 duration-300"
            type="number"
            value={formData.price || ""}
            name="price"
            placeholder="price"
          />
          <input
            onChange={handleChange}
            className="rounded-md py-1 px-4 m-3 outline-none border border-gray-300 hover:shadow-md hover:shadow-gray-200 focus:shadow-sky-300 duration-300"
            type="number"
            value={formData.rate || ""}
            name="rate"
            placeholder="rate"
          />

          <input
            onChange={handleChange}
            className="rounded-md py-1 px-4 m-3 outline-none border border-gray-300 hover:shadow-md hover:shadow-gray-200 focus:shadow-sky-300 duration-300"
            type="text"
            value={formData.image || ""}
            name="image"
            placeholder="image url"
          />
          <textarea
            name="description"
            value={formData.description || ""}
            onChange={handleChange}
            placeholder="description"
            className="py-1 px-4 m-3 rounded-md col-span-2 outline-none border border-gray-300 hover:shadow-md hover:shadow-gray-200 focus:shadow-sky-300 duration-300 resize-none"></textarea>

          <label
            htmlFor="special"
            className="col-span-2 m-3 flex justify-start items-center">
            <span className="text-gray-500">special icon ?</span>
            <input
              className="hidden peer"
              type="checkbox"
              checked={formData.special || false}
              onChange={handleChange}
              name="special"
              id="special"
            />
            <div className="w-6 h-6 mx-3 border-2 border-gray-400 rounded-md peer-checked:bg-green-500 peer-checked:border-green-500  group-hover:border-green-400 transition-all flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white hidden peer-checked:block"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M5 13l4 4L19 5"
                />
              </svg>
            </div>
          </label>

          <div className="me-auto col-span-1 py-1 flex justify-start items-center">
            <label htmlFor="category" className="text-gray-500 mx-3 mb-2">
              category
            </label>
            <select
              name="category"
              id="category"
              value={formData.category || ""}
              onChange={handleChange}
              className="col-span-1 text-[12px] h-7 text-gray-500 hover:text-gray-700 font-bold font-mono rounded-md outline-none border border-gray-300 hover:shadow-md hover:shadow-gray-200 focus:shadow-sky-300 duration-300">
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="col-span-1 flex justify-start items-center ms-auto py-1 mx-3">
            <input
              type="text"
              name="addNewCategory"
              value={formData.addNewCategory || ""}
              onChange={handleChange}
              placeholder=" (←) Add new category"
              className="rounded-l-md py-px outline-none border border-gray-300 hover:shadow-md hover:shadow-gray-200 focus:shadow-sky-300 duration-300"
            />
            <button
              type="button"
              onClick={(e) => {
                const textToAdd = formData.addNewCategory;
                if (textToAdd && textToAdd.trim() !== "") {
                  setCategories([...categories, textToAdd.trim()]);
                  setFormData({ ...formData, addNewCategory: "" });
                }
              }}
              className="py-0.5 px-2 bg-green-300 hover:bg-green-400 duration-300 cursor-pointer rounded-r-xl">
              Add
            </button>
          </div>

          <button
            type="submit"
            className="py-0.5 mt-4 w-full bg-green-300 hover:bg-green-400 cursor-pointer duration-300 col-span-2 rounded-b-xl">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}
