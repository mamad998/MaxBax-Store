"use client";

import React from "react";
import { BsFillHeartFill } from "react-icons/bs";

const AdminDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100 text-right" dir="rtl">
      <aside className="w-64 bg-slate-800 text-white flex flex-col">
        <div className="p-6 text-center border-b border-slate-700">
          <h1 className="text-2xl font-bold text-cyan-400">نئون سیتی</h1>
          <div className="mt-4 flex flex-col items-center">
            <img
              src="./images/profile.JPEG"
              alt="profile"
              className="w-20 h-20 rounded-full border-2 border-cyan-400 mb-2"
            />
            <p className="text-sm font-medium">محمدرضا برازجانی زاده</p>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {[
            "داشبورد",
            "پروفایل",
            "پیام ها",
            "فروش",
            "تحلیل",
            "نمودارها",
            "جدول ها",
            "تنظیمات",
          ].map((item) => (
            <a
              key={item}
              href="#"
              className="block p-3 rounded-lg hover:bg-slate-700 transition-colors duration-200 text-slate-300 hover:text-white">
              {item}
            </a>
          ))}
        </nav>
      </aside>

      <main className="flex-1 p-8 overflow-y-auto">
        <header className="mb-8 flex justify-between items-center">
          <h2 className="text-3xl font-bold text-gray-800">داشبورد</h2>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-red-100 max-w-md">
            <h4 className="text-red-600 font-bold mb-2">
              آیا می خواهید خارج شوید؟
            </h4>
            <p className="text-sm text-gray-500 mb-4">
              در صورت خارج شدن، برای دسترسی دوباره به پنل باید مجددا وارد شوید
            </p>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-gray-200 rounded-md text-sm">
                میمانم
              </button>
              <button className="px-4 py-2 bg-red-500 text-white rounded-md text-sm">
                خارج میشوم
              </button>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div
            id="firstADS"
            className="p-6 bg-linear-to-l from-blue-600 to-indigo-600 text-white rounded-2xl shadow-lg">
            <h5 className="text-xl font-bold mb-3">
              یادگیری برنامه نویسی تنها در 30 روز
            </h5>
            <p className="text-sm leading-relaxed opacity-90">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است...
            </p>
          </div>
          <div
            id="secondADS"
            className="p-6 bg-linear-to-l from-emerald-600 to-teal-600 text-white rounded-2xl shadow-lg">
            <h5 className="text-xl font-bold mb-3">
              یادگیری برنامه نویسی تنها در 60 روز
            </h5>
            <p className="text-sm leading-relaxed opacity-90">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است...
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { label: "فروش", value: "30 میلیون", color: "text-blue-600" },
            { label: "هزینه", value: "12 میلیون", color: "text-red-600" },
            { label: "کاربران", value: "50000", color: "text-green-600" },
            { label: "بازدید", value: "10025", color: "text-purple-600" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <h4 className="text-gray-500 text-sm mb-2">{stat.label}</h4>
              <span className={`text-2xl font-bold mb-4 ${stat.color}`}>
                {stat.value}
              </span>
              <button className="text-xs text-blue-500 hover:underline">
                به روز رسانی
              </button>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h4 className="text-xl font-bold mb-6 text-gray-800">پروژه ها</h4>
            <div className="space-y-6">
              {[
                { name: "کتابخانه آنلاین", progress: "87%" },
                { name: "خدمات آنلاین", progress: "23%" },
                { name: "اپبیکیشن آنلاین", progress: "44%" },
                { name: "وب سرویس", progress: "68%" },
              ].map((proj, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium">{proj.name}</span>
                    <span className="text-gray-400">{proj.progress}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: String(proj.progress) }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h4 className="text-xl font-bold mb-6 text-gray-800">تسک ها</h4>
            <div className="space-y-4">
              {[
                { task: "آماده کردن سمت بک اند", done: true },
                { task: "تنظیم وب پک قبل از ارائه کد به وب", done: false },
                { task: "آماده کردن سمت فرانت اند", done: true },
                {
                  task: "اضاقه کردن استایل ها از نوع یو آی و یو ایکس",
                  done: false,
                },
              ].map((task, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                  <input
                    type="checkbox"
                    checked={task.done}
                    readOnly
                    className="w-4 h-4 accent-blue-600"
                  />
                  <span
                    className={`text-sm ${task.done ? "line-through text-gray-400" : "text-gray-700"}`}>
                    {task.task}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h4 className="text-xl font-bold mb-6 text-gray-800">پرداختی ها</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-right">
                <thead className="bg-gray-50 text-gray-600 uppercase">
                  <tr>
                    <th className="p-3">#</th>
                    <th className="p-3">نام</th>
                    <th className="p-3">مبلغ</th>
                    <th className="p-3">تاریخ</th>
                    <th className="p-3">وضعیت</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ["1", "محمدرضا", "3 میلیون", "27 فروردین", "پرداخت شده"],
                    ["2", "قاسم", "8 میلیون", "27 مهر", "رد شده"],
                    ["3", "مهسا", "1.500 میلیون", "12 اسفند", "انتظار"],
                    ["4", "غلامرضا", "40 میلیون", "2 اردیبهشت", "در حال انجام"],
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="p-3">{row[0]}</td>
                      <td className="p-3">{row[1]}</td>
                      <td className="p-3">{row[2]}</td>
                      <td className="p-3">{row[3]}</td>
                      <td className="p-3">{row[4]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex gap-2 mt-4 justify-center">
                <button className="px-3 py-1 bg-gray-200 rounded">»</button>
                <button className="px-3 py-1 bg-blue-500 text-white rounded">
                  1
                </button>
                <button className="px-3 py-1 bg-gray-200 rounded">2</button>
                <button className="px-3 py-1 bg-gray-200 rounded">3</button>
                <button className="px-3 py-1 bg-gray-200 rounded">«</button>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h4 className="text-xl font-bold mb-6 text-gray-800">
              تیکت های اخیر
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-right">
                <thead className="bg-gray-50 text-gray-600 uppercase">
                  <tr>
                    <th className="p-3">#</th>
                    <th className="p-3">نام</th>
                    <th className="p-3">مبلغ</th>
                    <th className="p-3">تاریخ</th>
                    <th className="p-3">عملیات</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[1, 2, 3, 4].map((_, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="p-3">1</td>
                      <td className="p-3">محمدرضا</td>
                      <td className="p-3">3 میلیون</td>
                      <td className="p-3">27 فروردین</td>
                      <td className="p-3">
                        <button className="text-blue-500 text-xs hover:underline">
                          پاسخ ریپلای
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex gap-2 mt-4 justify-center">
                <button className="px-3 py-1 bg-gray-200 rounded">»</button>
                <button className="px-3 py-1 bg-blue-500 text-white rounded">
                  1
                </button>
                <button className="px-3 py-1 bg-gray-200 rounded">2</button>
                <button className="px-3 py-1 bg-gray-200 rounded">3</button>
                <button className="px-3 py-1 bg-gray-200 rounded">«</button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h4 className="text-xl font-bold mb-6 text-gray-800">
              پیام های اخیر
            </h4>
            <div className="space-y-6">
              {[
                {
                  img: "./images/1.JPEG",
                  name: "محمدرضا",
                  text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است...",
                },
                {
                  img: "./images/2.JPEG",
                  name: "حسام",
                  text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک روزنامه و مجله در ستون و سطرآنچنان که لازم است...",
                },
                {
                  img: "./images/3.JPEG",
                  name: "ستاره",
                  text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم و مجله در ستون و سطرآنچنان که لازم است...",
                },
                {
                  img: "./images/4.JPEG",
                  name: "متین",
                  text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاد ومتخصصان را می طلبد",
                },
                {
                  img: "./images/5.JPEG",
                  name: "محمدرضا",
                  text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لصصان را می طلبد",
                },
              ].map((msg, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-4 border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors rounded-lg">
                  <img
                    src={msg.img}
                    alt="user"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-bold text-gray-800">
                      {msg.name} یک گفتگوی جدید ایجاد کرد.
                    </p>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                      {msg.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-fit">
            <h4 className="text-xl font-bold mb-6 text-gray-800">پست جدید</h4>
            <div className="space-y-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-500">وضعیت</label>
                <select className="p-2 bg-gray-50 border border-gray-200 rounded-md text-sm">
                  <option>انتخاب کنید</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-500">تصویر</label>
                <input
                  type="file"
                  className="text-sm text-gray-500 file:ml-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-500">وضعیت</label>
                <select className="p-2 bg-gray-50 border border-gray-200 rounded-md text-sm">
                  <option>انتخاب کنید</option>
                </select>
              </div>
              <button className="w-full py-2 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors">
                ارسال
              </button>
            </div>
          </div>
        </div>

        <footer className="mt-12 flex flex-col items-center justify-between border-t border-gray-200 pt-6 text-gray-500 text-sm">
          <div className="flex gap-6 mb-4">
            <a href="#" className="hover:text-blue-600 transition-colors">
              درباره ما
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors">
              پشتیبانی
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors">
              وبلاگ
            </a>
          </div>
          <div className="text-center ">
            <p>سه شنبه 15 بهمن | 7:30 بعد از ظهر</p>
            <div className="flex justify-center items-center gap-1 font-medium mt-3">
              <span> ساخته شده با </span>
              <BsFillHeartFill className="fill-red-600 text-red-500 size-3" />
              <span className="text-cyan-600 font-bold">توسط نئون</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default AdminDashboard;
