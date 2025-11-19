"use client";

import React, { useState } from "react";
import { useShoppingCart } from "use-shopping-cart";
import { useUser } from "@clerk/nextjs";
import toast from "react-hot-toast";

export default function CheckoutBtn() {
  const { cartDetails, cartCount } = useShoppingCart();
  const { isSignedIn, isLoaded } = useUser();
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (!isLoaded) {
      return;
    }

    if (!isSignedIn) {
      toast.error("Please login first to checkout");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cartDetails }),
      });

      const data = await response.json();

      if (data.error) {
        console.error("Checkout error:", data.error);
        toast.error("Checkout failed: " + data.error);
        setIsLoading(false);
        return;
      }

      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error("Checkout failed:", error);
      toast.error("Checkout failed. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={!cartCount || cartCount === 0 || isLoading}
      className="mt-4 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg focus:bg-green-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isLoading
        ? "Processing..."
        : cartCount && cartCount > 0
          ? `Checkout (${cartCount})`
          : "Checkout"}
    </button>
  );
}
