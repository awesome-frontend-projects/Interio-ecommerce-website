"use client";
import React from "react";
import { useShoppingCart } from "use-shopping-cart";

export default function CheckoutBtn() {
  const { redirectToCheckout, cartCount } = useShoppingCart();

  const handleCheckout = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!cartCount || cartCount === 0) {
      alert("Your cart is empty!");
      return;
    }

    try {
      const result = await redirectToCheckout();
      if (result?.error) {
        console.error("Checkout error:", result.error);
        alert("There was an error processing your checkout.");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("There was an error processing your checkout.");
    }
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={!cartCount || cartCount === 0}
      className="mt-4 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg focus:bg-green-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
    >
      Checkout {cartCount ? `(${cartCount})` : ""}
    </button>
  );
}
