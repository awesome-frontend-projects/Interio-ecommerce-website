"use client";

import React from "react";
import { RiShoppingBagLine } from "@remixicon/react";
import { useShoppingCart } from "use-shopping-cart";
import { ProductProps } from "@/types/types";

export default function AddToCart({
  _id,
  img,
  price,
  title,
  price_id,
}: ProductProps) {
  const { addItem } = useShoppingCart();

  const handleAddToCart = () => {
    addItem({
      id: _id,
      name: title,
      price: price,
      currency: "USD",
      image: img,
      price_id: price_id,
    });
  };

  return (
    <button
      onClick={handleAddToCart}
      className="size-11 bg-white flex items-center justify-center rounded-lg text-gray-800 ring ring-gray-100 hover:ring-gray-300 hover:bg-gray-50 transition active:scale-95"
      title="Add to Cart"
    >
      <RiShoppingBagLine size={22} />
    </button>
  );
}
