"use client";

import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  let [cart, setCart] = useState([]);
  const [alert, setAlert] = useState({
    show: false,
    message: "",
    type: "success",
  });

  useEffect(() => {
    const cartExistance = JSON.parse(localStorage.getItem("cart"));
    if (cartExistance) {
      setCart(cartExistance);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function showAlert(productName) {
    setAlert(() => {
      return { show: true, message: productName, type: "success" };
    });
    setTimeout(() => {
      setAlert({ show: false, message: "", type: "success" });
    }, 4000);
  }
  const hideAlert = () =>
    setAlert({ show: false, message: "", type: "success" });

  function addToCart(product) {
    setCart((prev) => {
      let selectedProduct = prev.find((item) => item._id === product._id);

      if (!selectedProduct) {
        return [...prev, { ...product, quantity: 1 }];
      } else {
        return prev.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
    });
    showAlert(`محصول ${product.title} به سبد خرید اضافه شد`);
  }

  function removeFromCart(productId) {
    const remove = setCart((prev) => {
      return prev.filter((item) => item._id != productId);
    });
    return remove;
  }

  function updateQuantity(productId, newQuantity) {
    setCart((prev) => {
      return prev.map((item) =>
        item._id === productId ? { ...item, quantity: newQuantity } : item,
      );
    });
  }

  function getTotal() {
    return cart.reduce(
      (accumulator, item) => accumulator + item.price * item.quantity,
      0,
    );
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        getTotal,
        clearCart,
        alert,
        showAlert,
      }}>
      {children}
    </CartContext.Provider>
  );
}
