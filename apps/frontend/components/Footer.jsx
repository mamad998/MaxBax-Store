import { FaTelegram } from "react-icons/fa6";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-sky-300 w-full">
      <div className="p-5 grid grid-cols-4 box-border">
        <ul className="flex flex-col justify-center items-start font-bold gap-3">
          <li className="text-gray-100 text-xl text-shadow-blue-300 text-shadow-sm">
            بیشتر ما رو بشناس
          </li>
          <li className="text-blue-500 cursor-pointer hover:text-blue-400 duration-150 hover:translate-y-0.5 hover:translate-x-0.5 mt-3">
            درباره ما
          </li>
          <li className="text-blue-500 cursor-pointer hover:text-blue-400 duration-150 hover:translate-y-0.5 hover:translate-x-0.5">
            محصولات آینده
          </li>
          <li className="text-blue-500 cursor-pointer hover:text-blue-400 duration-150 hover:translate-y-0.5 hover:translate-x-0.5">
            سال تاسیس و اهداف
          </li>
        </ul>

        <ul className="flex flex-col justify-center items-start font-bold gap-3">
          <li className="text-gray-100 text-xl text-shadow-blue-300 text-shadow-sm">
            ارتباط با ما
          </li>
          <li className="text-blue-500 cursor-pointer hover:text-blue-400 duration-150 hover:translate-y-0.5 hover:translate-x-0.5 mt-3">
            <FiInstagram className="size-5" />
          </li>
          <li className="text-blue-500 cursor-pointer hover:text-blue-400 duration-150 hover:translate-y-0.5 hover:translate-x-0.5 ">
            <FiFacebook className="size-5" />
          </li>
          <li className="text-blue-500 cursor-pointer hover:text-blue-400 duration-150 hover:translate-y-0.5 hover:translate-x-0.5">
            <FiTwitter className="size-5" />
          </li>
          <li className="text-blue-500 cursor-pointer hover:text-blue-400 duration-150 hover:translate-y-0.5 hover:translate-x-0.5">
            <FaTelegram className="size-5" />
          </li>
        </ul>

        <ul className="flex flex-col justify-center items-start font-bold gap-3">
          <li className="text-gray-100 text-xl text-shadow-blue-300 text-shadow-sm">
            کمک میخوای ؟
          </li>
          <li className="text-blue-500 hover:text-blue-400 duration-150 hover:translate-y-0.5 hover:translate-x-0.5 mt-3">
            سوالات متداول
          </li>
          <li className="text-blue-500 hover:text-blue-400 duration-150 hover:translate-y-0.5 hover:translate-x-0.5">
            پشتیبانی
          </li>
          <li className="text-blue-500 hover:text-blue-400 duration-150 hover:translate-y-0.5 hover:translate-x-0.5">
            ثبت تیکت
          </li>
        </ul>

        <ul className="flex flex-col justify-center items-start font-bold gap-3">
          <li className="text-gray-100 text-xl text-shadow-blue-300 text-shadow-sm">
            طرح همکاری (پول برای همه)
          </li>
          <li className="text-blue-500 hover:text-blue-400 duration-150 hover:translate-y-0.5 hover:translate-x-0.5 mt-3">
            معرفی محصولات جدید
          </li>
          <li className="text-blue-500 hover:text-blue-400 duration-150 hover:translate-y-0.5 hover:translate-x-0.5">
            بازاریابی توسط شما
          </li>
          <li className="text-blue-500 hover:text-blue-400 duration-150 hover:translate-y-0.5 hover:translate-x-0.5">
            انتقادات و پیشنهادات
          </li>
        </ul>
      </div>
      <div className="w-full bg-gray-400 h-px"></div>
      <div dir="ltr" className="text-center text-gray-700 py-2">
        © 1996-2026, Digi kala.com, Inc. or its affiliates
      </div>
    </footer>
  );
}
