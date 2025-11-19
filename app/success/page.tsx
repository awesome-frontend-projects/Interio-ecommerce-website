import React from "react";
import Link from "next/link";
import { RiCheckboxCircleLine, RiShoppingBag3Line } from "@remixicon/react";

export default function Success() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center bg-white border border-gray-200 rounded-2xl p-12 shadow-lg">
          <div className="mb-6 flex justify-center">
            <div className="bg-green-100 rounded-full p-6">
              <RiCheckboxCircleLine size={80} className="text-green-600" />
            </div>
          </div>

          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            Payment Successful!
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            Thank you for your purchase. Your order has been confirmed and will
            be shipped soon.
          </p>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <p className="text-sm text-gray-600 mb-2">
              A confirmation email has been sent to your registered email
              address.
            </p>
            <p className="text-sm text-gray-600">
              You can track your order status in your account dashboard.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/shop"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg transition flex items-center justify-center gap-2"
            >
              <RiShoppingBag3Line size={20} />
              Continue Shopping
            </Link>
            <Link
              href="/"
              className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-8 py-3 rounded-lg transition"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
