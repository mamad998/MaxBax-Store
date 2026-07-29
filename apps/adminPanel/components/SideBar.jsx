"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BiCategory, BiCube, BiUserCircle } from "react-icons/bi";
import { MdDashboard } from "react-icons/md";
import { BsCart4 } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("home");

  const menuItems = [
    { id: "home", text: "Home", color: "#f44336", href: "/" },
    { id: "products", text: "Products", color: "#b145e9", href: "/products" },
    { id: "orders", text: "Orders", color: "#2196f3", href: "/orders" },
    { id: "category", text: "Category", color: "#F59E0B", href: "/category" },
    { id: "users", text: "Users", color: "#10B981", href: "/users" },
    { id: "setting", text: "Setting", color: "#1E293B", href: "/setting" },
  ];
  const renderIcon = (id) => {
    switch (id) {
      case "home":
        return <MdDashboard className="size-7" />;
      case "products":
        return <BiCube className="size-7" />;
      case "orders":
        return <BsCart4 className="size-7" />;
      case "category":
        return <BiCategory className="size-7" />;
      case "users":
        return <BiUserCircle className="size-7" />;
      case "setting":
        return <FiSettings className="size-7" />;
      default:
        return null;
    }
  };

  return (
    <div className="flex">
      <div
        className={`relative rounded-sm min-h-screen bg-olive-200 border border-gray-400 shadow-xl transition-all m-5 duration-700 overflow-visible
        ${isOpen ? "w-64" : "w-20"}`}>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="absolute top-0 left-0 w-10 h-10 rounded-sm bg-gray-700 cursor-pointer flex items-center justify-center rounded-l-md z-50">
          <div
            className={`
    relative w-6 h-0.5 bg-amber-50 transition-all duration-300 before:content-[''] before:absolute before:w-6 before:h-0.5 before:bg-white before:transition-all before:duration-300     after:content-[''] after:absolute after:w-6 after:h-0.5 after:bg-white after:transition-all after:duration-300 before:bottom-1.5 after:top-1.5
     ${isOpen ? "bg-transparent" : "bg-white"} 
    ${isOpen ? "before:rotate-45 before:top-1" : ""} 
    ${isOpen ? "after:-rotate-45 after:top-[4px] mb-2" : ""}    
  `}></div>
        </div>

        <ul className="grid grid-cols-1 gap-2 p-3 mt-10 overflow-visible">
          {menuItems.map((item) => {
            // برای خوانایی بیشتر، کلاس‌ها را اینجا تعریف می‌کنیم
            const isActive = activeItem === item.id;

            let itemClasses =
              "relative list-none box-border transition-all duration-400 cursor-pointer rounded-lg ";

            if (!isOpen) {
              // حالت منوی بسته
              itemClasses += isActive
                ? "bg-olive-300 translate-x-10 z-50" // فعال در حالت بسته: جلو بیاید
                : "translate-x-0 z-10"; // غیرفعال در حالت بسته: سر جایش باشد
            } else {
              // حالت منوی باز
              itemClasses += isActive
                ? "bg-olive-300 translate-x-2 z-20" // فعال در حالت باز: کمی جلو بیاید
                : "bg-transparent translate-x-0 z-10"; // غیرفعال در حالت باز
            }

            return (
              <li
                key={item.id}
                onClick={() => setActiveItem(item.id)}
                className={itemClasses}
                style={{ "--color": item.color }}>
                <Link
                  href={item.href}
                  className="flex items-center p-3 text-white gap-4">
                  <span
                    className="text-2xl transition-all duration-300"
                    style={{ color: "var(--color)" }}>
                    {renderIcon(item.id)}
                  </span>

                  <span
                    className={`text-lg text-black font-medium transition-all duration-300 whitespace-nowrap 
            ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                    {item.text}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
