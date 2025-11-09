"use client";

import React from "react";
import { useShoppingCart } from "use-shopping-cart";

export default function CheckoutBtn() {
  const { redirectToCheckout, cartCount } = useShoppingCart();

  const handleCheckout = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    try {
      const result = await redirectToCheckout();
      if (result?.error) {
        console.error("Stripe checkout error:", result.error.message);
      }
    } catch (error) {
      console.error("Checkout failed:", error);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={!cartCount || cartCount === 0}
      className="mt-4 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg focus:bg-green-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {cartCount && cartCount > 0 ? `Checkout (${cartCount})` : "Checkout"}
    </button>
  );
}
