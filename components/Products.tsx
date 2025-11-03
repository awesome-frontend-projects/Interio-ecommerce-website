import React from "react";

import Link from "next/link";
import ProductCard from "./ProductCard";
import { ProductProps } from "@/types/types";
import { client } from "@/sanity/client";

const PRODUCTS_QUERY = `*[_type == "product"][0...8]{
  _id,
    title,
    price,
    "img":image.asset->url,
    price_id
}`;

const Products = async () => {
  const products = await client.fetch<ProductProps[]>(PRODUCTS_QUERY);
  return (
    <section className="section pb-20">
      <div className="container">
        <h2 className="title text-center">Explore All Products</h2>
        {/* Card wrapper */}
        <div className="grid mt-14 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {products.map((item) => (
            <ProductCard key={item._id} {...item} />
          ))}
        </div>

        {/* Btn */}
        <Link
          href="/shop"
          className="block bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition-colors max-w-max mx-auto mt-14 lg:mt-20"
        >
          View All Products
        </Link>
      </div>
    </section>
  );
};

export default Products;
