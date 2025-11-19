"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useShoppingCart } from "use-shopping-cart";
import {
  RiAddLine,
  RiSubtractLine,
  RiDeleteBin6Line,
  RiShoppingBag3Line,
} from "@remixicon/react";
import CheckoutBtn from "@/components/Checkout";

export default function CartSec() {
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
      <section className="min-h-[70svh] flex flex-col justify-center items-center text-center py-16">
        <div className="bg-gray-100 rounded-full p-8 mb-6">
          <RiShoppingBag3Line size={80} className="text-gray-400" />
        </div>
        <h2 className="text-3xl font-semibold mb-3 text-gray-800">
          Your cart is empty
        </h2>
        <p className="text-gray-500 mb-8">
          Looks like you haven&apos;t added anything to your cart yet.
        </p>
        <Link
          href="/shop"
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg transition"
        >
          Start Shopping
        </Link>
      </section>
    );
  }

  return (
    <section className="py-20 mt-16">
      <div className="container">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Shopping Cart</h1>
          <p className="text-gray-600">
            {cartItems.length} item(s) in your cart
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              {/* Desktop Table View */}
              <div className="hidden md:block overflow-x-auto">
                <table className="min-w-full text-left border-collapse">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="p-4 font-semibold">Product</th>
                      <th className="p-4 font-semibold">Price</th>
                      <th className="p-4 font-semibold">Quantity</th>
                      <th className="p-4 font-semibold">Total</th>
                      <th className="p-4"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {cartItems.map((item) => (
                      <tr key={item.id}>
                        <td className="p-4">
                          <div className="flex items-center gap-4">
                            <Image
                              src={item.image as string}
                              alt={item.name}
                              width={80}
                              height={80}
                              className="rounded-md object-cover"
                            />
                            <span className="font-medium">{item.name}</span>
                          </div>
                        </td>
                        <td className="p-4 text-gray-700">
                          ${item.price.toFixed(2)}
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-2 border border-gray-300 rounded-lg w-fit">
                            <button
                              onClick={() => decrementItem(item.id)}
                              className="p-2 hover:bg-gray-100 transition"
                            >
                              <RiSubtractLine size={18} />
                            </button>
                            <span className="px-3 font-medium">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => incrementItem(item.id)}
                              className="p-2 hover:bg-gray-100 transition"
                            >
                              <RiAddLine size={18} />
                            </button>
                          </div>
                        </td>
                        <td className="p-4 font-semibold text-green-600">
                          ${(item.price * item.quantity).toFixed(2)}
                        </td>
                        <td className="p-4">
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-red-500 hover:text-red-700 transition"
                            title="Remove item"
                          >
                            <RiDeleteBin6Line size={20} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Card View */}
              <div className="md:hidden divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <div key={item.id} className="p-4">
                    <div className="flex gap-4">
                      <Image
                        src={item.image as string}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="rounded-md object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-medium mb-2">{item.name}</h3>
                        <p className="text-gray-600 mb-2">
                          ${item.price.toFixed(2)}
                        </p>
                        <div className="flex items-center gap-2 border border-gray-300 rounded-lg w-fit">
                          <button
                            onClick={() => decrementItem(item.id)}
                            className="p-2 hover:bg-gray-100"
                          >
                            <RiSubtractLine size={16} />
                          </button>
                          <span className="px-3">{item.quantity}</span>
                          <button
                            onClick={() => incrementItem(item.id)}
                            className="p-2 hover:bg-gray-100"
                          >
                            <RiAddLine size={16} />
                          </button>
                        </div>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500"
                      >
                        <RiDeleteBin6Line size={20} />
                      </button>
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-100 flex justify-between">
                      <span className="text-gray-600">Subtotal:</span>
                      <span className="font-semibold text-green-600">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={clearCart}
              className="mt-4 text-red-500 hover:text-red-700 transition flex items-center gap-2"
            >
              <RiDeleteBin6Line size={18} />
              Clear Cart
            </button>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${totalPrice?.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax</span>
                  <span>${((totalPrice || 0) * 0.1).toFixed(2)}</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-green-600">
                    ${((totalPrice || 0) * 1.1).toFixed(2)}
                  </span>
                </div>
              </div>

              <CheckoutBtn />

              <Link
                href="/shop"
                className="block text-center mt-4 text-green-600 hover:underline"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
