"use client";

import Image from "next/image";
import { enTofa } from "../../utils/Utilities";
import { FiTrash2 } from "react-icons/fi";
import { useContext, useState } from "react";
import { BiPencil, BiShoppingBag } from "react-icons/bi";
import { CartContext } from "../../Contexts/CartContext";

export default function ClientSide() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    getTotal,
    clearCart,
    showAlert,
  } = useContext(CartContext);
  const [isDeleteClicked, setIsDeleteClicked] = useState(false);

  const [userInfo, setUserInfo] = useState({
    name: "",
    city: "",
    country: "",
    email: "",
    postalCode: "",
    number: "",
    description: "",
  });

  function handleDelete(e) {
    setIsDeleteClicked(true);
    setTimeout(() => {
      setIsDeleteClicked(false);
    }, 200);
  }

  function handleChange(e) {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const OrderData = {
      user: userInfo,
      cart,
      totalPrice: getTotal(),
    };

    try {
      const baseUrl =
        process.env.NEXT_PUBLIC_MAXBAX_API_URL || "http://localhost:3000";
      const apiBase = `${baseUrl}/api/orders`;
      const response = await fetch(apiBase, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(OrderData),
      });
      if (response.ok) {
        showAlert(" ثبت سفارش شما موفقیت آمیز بود✅ ");
        clearCart();
        setUserInfo({
          name: "",
          city: "",
          country: "",
          email: "",
          postalCode: "",
          number: "",
          description: "",
        });
      } else {
        showAlert("خطا در ثبت سفارش ❌");
      }
    } catch (error) {
      showAlert("مشکل از سمت سرور پیش آمده است ⚠️");
      console.log("error : ", error);
    }
  }

  return (
    <div className="grid grid-cols-2 m-10">
      {cart.length == 0 && (
        <div className="bg-gray-100 border border-gray-200 shadow-lg rounded-2xl p-5">
          سبد خرید شما خالی است
          <span className="block m-2">
            {" "}
            لطفا با دکمه افزودن محصول مورد نظر را اضافه کنید
          </span>
        </div>
      )}
      {cart.length > 0 && (
        <div className="max-w-2xl mx-auto shadow-xl shadow-gray-400 border border-gray-200 rounded-2xl py-4">
          <h1 className="font-bold text-xl p-3 flex justify-start items-center">
            <BiShoppingBag className="fill-blue-500 text-blue-400 size-10" />{" "}
            سبد خرید شما
          </h1>
          <div className="h-px bg-gray-200 w-full"></div>
          <div className="p-7">
            <table className="w-full rounded-xl shadow-xl border-collapse">
              <thead className="bg-gray-300 w-full ">
                <tr>
                  <th className="text-start p-3 px-5 rounded-tr-md">کالا</th>
                  <th className="text-end rounded-tl-md p-3">قیمت(تومان)</th>
                </tr>
              </thead>

              <tbody className="w-full">
                {cart.map((product) => (
                  <tr key={product?._id} className="border-b border-gray-200 ">
                    <td>
                      <div className="flex justify-start items-center p-5 gap-4">
                        <Image
                          src={product?.image}
                          alt={product?.title}
                          width={150}
                          height={150}
                          className="object-cover bg-transparent rounded-xl"
                        />
                        {product?.title}
                        <input
                          className="bg-gray-50 w-14 border border-gray-300 rounded-lg p-2"
                          type="number"
                          min={1}
                          value={product?.quantity || 0}
                          onChange={(e) => {
                            const values = Number(e.target.value);
                            if (values >= 1) {
                              return updateQuantity(product?._id, values);
                            }
                          }}
                        />
                        <button
                          className="hover:-translate-0.5 duration-300 c"
                          onClick={() => {
                            handleDelete(product?._id);
                            removeFromCart(product?._id);
                          }}>
                          <FiTrash2
                            className={` text-red-500 size-6 cursor-pointer hover:text-red-600 duration-200 
                            ${isDeleteClicked ? "animate-shake" : ""}`}
                          />
                        </button>
                      </div>
                    </td>
                    <td className="p-5">{enTofa(product?.price)}</td>
                  </tr>
                ))}
                <tr>
                  <td className="p-3">مجموع</td>
                  <td className="p-3 mx-2">{enTofa(getTotal())}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {cart.length > 0 && (
        <div className="shadow-2xl bg-gray-300 p-5 rounded-xl">
          <h1 className="text-center font-bold text-xl">اطلاعات شما</h1>
          <form className="grid grid-cols-2" onSubmit={handleSubmit}>
            <div className="relative col-span-2 flex items-center group my-2">
              <div className="opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 z-10 pointer-events-none absolute right-2 top-5">
                <BiPencil className="text-xl fill-gray-500 animate-pulse" />
              </div>
              <input
                className="bg-gray-50 px-6 w-full rounded-2xl h-14 border-4 outline-transparent border-gray-200  focus:border-gray-500 duration-200 focus:shadow-xl focus:shadow-gray-600"
                type="text"
                name="name"
                placeholder="نام"
                value={userInfo.name || ""}
                onChange={handleChange}
              />
            </div>
            <div className="relative col-span-1 flex items-center group my-2">
              <div className="opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 z-10 pointer-events-none absolute right-5 ">
                <BiPencil className="text-xl fill-gray-500 animate-pulse" />{" "}
              </div>
              <input
                className="bg-gray-50 px-6 w-full mx-4 my-2 rounded-2xl h-14 border-4 outline-transparent border-gray-200 focus:border-gray-500 duration-200 focus:shadow-xl focus:shadow-gray-600"
                type="text"
                name="city"
                placeholder="شهر"
                value={userInfo.city || ""}
                onChange={handleChange}
              />
            </div>

            <div className="relative col-span-1 flex items-center group my-2">
              <div className="opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 z-10 pointer-events-none absolute right-5 ">
                <BiPencil className="text-xl fill-gray-500 animate-pulse" />{" "}
              </div>
              <input
                className="bg-gray-50 px-6 w-full  mx-4 my-2 rounded-2xl h-14 border-4 outline-transparent border-gray-200 m-5 focus:border-gray-500 duration-200 focus:shadow-xl focus:shadow-gray-600"
                type="text"
                name="country"
                placeholder="کشور"
                value={userInfo.country || ""}
                onChange={handleChange}
              />
            </div>

            <div className="relative col-span-2 flex items-center group my-2">
              <div className="opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 z-10 pointer-events-none absolute right-7 ">
                <BiPencil className="text-xl fill-gray-500 animate-pulse" />{" "}
              </div>
              <input
                className="bg-gray-50 px-7 w-full  my-2 rounded-2xl h-14 border-4 outline-transparent border-gray-200 m-5 focus:border-gray-500 duration-200 focus:shadow-xl focus:shadow-gray-600"
                type="email"
                name="email"
                placeholder="ایمیل"
                value={userInfo.email || ""}
                onChange={handleChange}
              />
            </div>

            <div className="relative col-span-1 flex items-center group my-2">
              <div className="opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 z-10 pointer-events-none absolute right-5 ">
                <BiPencil className="text-xl fill-gray-500 animate-pulse" />{" "}
              </div>
              <input
                className="bg-gray-50 px-7 w-full mx-2 my-2 rounded-2xl h-14 border-4 outline-transparent border-gray-200 m-5 focus:border-gray-500 duration-200 focus:shadow-xl focus:shadow-gray-600"
                type="text"
                name="postalCode"
                placeholder="کد پستی"
                value={userInfo.postalCode || ""}
                onChange={handleChange}
              />
            </div>

            <div className="relative col-span-1 flex items-center group my-2">
              <div className="opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 z-10 pointer-events-none absolute right-5 ">
                <BiPencil className="text-xl fill-gray-500 animate-pulse" />{" "}
              </div>
              <input
                className="bg-gray-50 px-7 w-full mx-2 my-2 rounded-2xl h-14 border-4 outline-transparent border-gray-200 m-5 focus:border-gray-500 duration-200 focus:shadow-xl focus:shadow-gray-600"
                type="number"
                name="number"
                placeholder="شماره تماس"
                value={userInfo.number || ""}
                onChange={handleChange}
              />
            </div>

            <div className="relative col-span-2 flex items-center group my-2">
              <div className="opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 z-10 pointer-events-none absolute right-2 top-4">
                <BiPencil className="text-xl fill-gray-500 animate-pulse" />{" "}
              </div>
              <textarea
                className="bg-gray-50 w-full py-2 px-6 resize-none rounded-2xl border-4 outline-transparent border-gray-200 focus:border-gray-500 duration-200 focus:shadow-xl focus:shadow-gray-600"
                cols={5}
                rows={6}
                name="description"
                placeholder="توضیحات (اختیاری)"
                value={userInfo.description || ""}
                onChange={handleChange}></textarea>
            </div>

            <button
              type="submit"
              className="col-span-2 bg-blue-300 hover:bg-blue-400 p-5 rounded-2xl w-full mt-5 cursor-pointer duration-200">
              ثبت اطلاعات سفارش
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
