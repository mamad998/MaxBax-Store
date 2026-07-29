"use client";

import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { CartContext } from "../Contexts/CartContext";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Header() {
  const { data: session } = useSession();
  const router = useRouter();
  const [isRender, setIsRender] = useState(false);

  useEffect(() => {
    setIsRender(true);
  }, []);
  const [isProfileOPen, setIsProfileOPen] = useState(false);
  const { cart } = useContext(CartContext);
  let [isActiveMobile, setIsActiveMobile] = useState(false);
  if (!isRender) {
    return null;
  } else {
    return (
      <header className="bg-sky-300">
        <div className="p-5">
          <nav className="flex items-center gap-3 font-bold transition-all duration-300 p-3">
            <button
              type="button"
              className="me-auto w-15 lg:hidden"
              onClick={() => {
                setIsActiveMobile((previous) => !previous);
              }}>
              <FiMenu className="size-9 text-blue-400" />
            </button>

            <div
              className={`${isActiveMobile ? "flex" : "hidden lg:flex"} me-auto flex flex-col lg:flex-row absolute lg:relative top-20 lg:top-0 right-0 lg:auto w-full lg:w-auto bg-sky-300 lg:bg-transparent gap-5 p-5 lg:p-0`}>
              {/* شروع */}
              <div className="">
                <div className="relative group inline-block">
                  <div className="relative inline-block text-left">
                    <button
                      onClick={() => setIsProfileOPen(!isProfileOPen)}
                      className="inline-flex justify-center w-full text-blue-500 hover:text-blue-400 duration-150 hover:-translate-y-0.5 hover:-translate-x-0.5 cursor-pointer">
                      <span className="px-2">پروفایل</span>
                      <svg
                        className="-mr-1 ml-2 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {isProfileOPen && (
                      <div className=" absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div className="py-1">
                          {session ? (
                            <Link
                              href="/profile"
                              className="block px-4 py-2 text-right text-sm text-gray-700 hover:bg-gray-100">
                              پروفایل
                            </Link>
                          ) : (
                            ""
                          )}
                          <Link
                            href="/setting"
                            className="block px-4 py-2 text-right text-sm text-gray-700 hover:bg-gray-100">
                            تنظیمات
                          </Link>
                          {session ? (
                            <Link href={"/"} onClick={() => router.push("/")}>
                              <button
                                onClick={() => signOut()}
                                className="block px-4 py-2 cursor-pointer text-right w-full text-sm text-gray-700 hover:bg-gray-100">
                                خارج شوید
                              </button>
                            </Link>
                          ) : (
                            <button
                              onClick={() => signIn()}
                              className="block px-4 py-2 cursor-pointer text-right w-full text-sm text-gray-700 hover:bg-gray-100">
                              وارد شوید
                            </button>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                  {/* پایان */}

                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-800 text-white text-sm rounded px-2 py-1 whitespace-nowrap">
                    {session
                      ? ` سلام ${session?.user?.name} `
                      : " لطفا ابتدا ثبت نام کنید."}
                  </span>
                </div>
              </div>

              <div className="text-blue-500 hover:text-blue-400 duration-150 hover:-translate-y-0.5 hover:-translate-x-0.5">
                <Link href={"/"}>صفحه اصلی</Link>
              </div>
              <div className="text-blue-500 hover:text-blue-400 duration-150 hover:-translate-y-0.5 hover:-translate-x-0.5">
                <Link href={"/products"}>محصولات</Link>
              </div>
              <div className="text-blue-500 hover:text-blue-400 duration-150 hover:-translate-y-0.5 hover:-translate-x-0.5">
                <Link href={"/best-selling-products"}>
                  محصولات پر فروش<sup>+</sup>
                </Link>
              </div>
              <div className="text-blue-500 hover:text-blue-400 duration-150 hover:-translate-y-0.5 hover:-translate-x-0.5">
                <Link href={"/cart"}>سبد خرید</Link>

                {cart?.length > 0 ? (
                  <span className="mx-2">( {cart?.length} )</span>
                ) : (
                  ""
                )}
              </div>
            </div>

            <Link
              href="/"
              className="mr-auto shadow-sm hover:rotate-y-180 duration-1000 shrink-0 me-10">
              <img src="/images/logo.jpg" alt="logo" className="w-16 h-12" />
            </Link>
          </nav>
        </div>
      </header>
    );
  }
}
