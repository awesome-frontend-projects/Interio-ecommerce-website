import React from "react";
import { RiEyeLine, RiStarFill, RiStarHalfFill } from "@remixicon/react";
import Image from "next/image";
import { ProductProps } from "@/types/types";
import AddToCart from "./AddToCart";

export default function ProductCard({
  _id,
  img,
  price,
  title,
  price_id,
  star = 4.5,
}: ProductProps) {
  return (
    <div className="bg-grey-clr p-8 rounded-md flex flex-col relative group transition">
      {/* Image */}
      <div className="max-w-max mx-auto py-10 flex flex-col">
        <Image
          src={img}
          alt={title}
          width={200}
          height={200}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
        />
      </div>

      {/* Action Buttons */}
      <div className="absolute top-4 right-4 flex flex-col gap-2.5 opacity-0 invisible group-hover:visible group-hover:opacity-100 group-focus:visible group-focus:opacity-100 transition">
        <AddToCart
          img={img}
          price={price}
          title={title}
          _id={_id}
          star={star}
          price_id={price_id}
        />
        <button
          className="size-11 bg-white flex items-center justify-center rounded-lg text-gray-800 ring ring-gray-100 hover:ring-gray-300 transition"
          title="View Product Details"
        >
          <RiEyeLine />
        </button>
      </div>

      {/* Product Info */}
      <div className="text-center mt-auto">
        <h3 className="font-semibold text-xl">{title}</h3>
        <p className="text-emerald-500 font-semibold">${price}</p>
        <div className="flex items-center justify-center text-amber-500 mt-2">
          <RiStarFill />
          <RiStarFill />
          <RiStarFill />
          <RiStarFill />
          {star === 4.5 ? <RiStarHalfFill /> : <RiStarFill />}
        </div>
      </div>
    </div>
  );
}
