"use client";
import { useContext } from "react";
import { CartContext } from "../../Contexts/CartContext";

function ToggleAlert() {
  const { alert, showAlert } = useContext(CartContext);

  if (!alert.show || !alert.message) return null;

  return (
    <div className="fixed top-5 right-5 z-100 animate-bounce-in">
      <div
        className="relative flex items-center justify-between p-4 text-blue-800 border border-blue-200 rounded-lg bg-blue-50 shadow-lg min-w-75"
        role="alert">
        <div className="text-sm font-medium pr-8">
          {alert.message.includes("سفارش")
            ? alert.message
            : alert.message.includes("خطا")
              ? alert.message
              : alert.message.includes("سرور")
                ? alert.message
                : ` محصول ${alert.message} با موفقیت به سبد خرید اضافه شد ✅`}
        </div>

        <button
          onClick={() => showAlert("")}
          type="button"
          className="absolute top-0 right-0 p-4 text-blue-500 hover:text-blue-800 focus:outline-none"
          aria-label="Close">
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 14 14"
            xmlns="http://www.w3.org/2000/svg">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              stroke로inejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default ToggleAlert;
