import React from "react";
import Link from "next/link";
import { RiErrorWarningLine, RiShoppingBag3Line } from "@remixicon/react";

export default function Error() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center bg-white border border-gray-200 rounded-2xl p-12 shadow-lg">
          <div className="mb-6 flex justify-center">
            <div className="bg-red-100 rounded-full p-6">
              <RiErrorWarningLine size={80} className="text-red-600" />
            </div>
          </div>

          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            Payment Cancelled
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            Your payment was not completed. No charges have been made to your
            account.
          </p>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <p className="text-sm text-gray-600 mb-2">
              If you experienced any issues during checkout, please try again or
              contact our support team.
            </p>
            <p className="text-sm text-gray-600">
              Your cart items have been saved and are waiting for you.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cart"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg transition flex items-center justify-center gap-2"
            >
              <RiShoppingBag3Line size={20} />
              Return to Cart
            </Link>
            <Link
              href="/shop"
              className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-8 py-3 rounded-lg transition"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
