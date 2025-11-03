"use client";

import React from "react";
import Image from "next/image";
import { useShoppingCart } from "use-shopping-cart";
import { RiAddLine, RiSubtractLine } from "@remixicon/react";
import CheckoutBtn from "@/components/Checkout";

export default function CartPage() {
  const {
    cartDetails,
    totalPrice,
    clearCart,
    removeItem,
    incrementItem,
    decrementItem,
  } = useShoppingCart();

  const cartItems = Object.values(cartDetails || {});

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col justify-center items-center text-center">
        <h2 className="text-2xl font-semibold mb-3">Your cart is empty 🛒</h2>
        <p className="text-gray-500">Add some products to see them here.</p>
      </div>
    );
  }

  return (
    <section className="section pb-20">
      <div className="container">
        {/* Cart Table */}
        <div className="overflow-x-auto border border-gray-200 rounded-lg bg-white">
          <table className="min-w-full text-left border-collapse">
            <thead className="bg-gray-50">
              <tr>
                {["Product", "Price", "Quantity", "Total", ""].map((label) => (
                  <th key={label} className="p-4">
                    {label}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {cartItems.map((item) => (
                <tr key={item.id} className="">
                  <td className="p-4 flex items-center gap-4">
                    {/* img */}
                    <div>
                      <Image
                        src={item.image as string}
                        alt={item.name}
                        width={60}
                        height={60}
                        className="rounded-md object-cover"
                      />
                    </div>
                    <span className="font-medium">{item.name}</span>
                  </td>
                  <td className="p-4">${item.price}</td>
                  <td className="p-4 flex items-center gap-3">
                    <button
                      onClick={() => decrementItem(item.id)}
                      className="p-1.5 border border-gray-200 hover:bg-gray-200 focus:bg-gray-200 rounded-full"
                    >
                      <RiSubtractLine size={18} />
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => incrementItem(item.id)}
                      className="p-1.5 border border-gray-200 hover:bg-gray-200 focus:bg-gray-200 rounded-full"
                    >
                      <RiAddLine size={18} />
                    </button>
                  </td>
                  <td className="p-4">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                  <td className="p-4">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:underline"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Summary */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-10">
          <button
            onClick={clearCart}
            className="mt-4 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg focus:bg-green-800 transition"
          >
            Clear Cart
          </button>

          <div className="text-right">
            <p className="text-lg font-medium">
              Total:{" "}
              <span className="text-emerald-600 font-semibold">
                ${totalPrice?.toFixed(2)}
              </span>
            </p>
            <CheckoutBtn />
          </div>
        </div>
      </div>
    </section>
  );
}
