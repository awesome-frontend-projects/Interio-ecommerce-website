import Loading from "@/components/Loading";
import ProductCard from "@/components/ProductCard";
import { client } from "@/sanity/client";
import { ProductProps } from "@/types/types";
import { RiSearchLine } from "@remixicon/react";
import React, { Suspense } from "react";

const ALLPRODUCTS_QUERY = `*[_type == "product"]{
  _id,
    title,
    price,
    "img":image.asset->url
}`;

export default async function Shop() {
  const allProducts = await client.fetch<ProductProps[]>(ALLPRODUCTS_QUERY);
  return (
    <section>
      <div className="container my-14">
        {/* Search box */}
        <div className="border max-w-lg w-full mb-7 rounded-sm relative border-gray-400">
          <input
            type="text"
            placeholder="search anything..."
            className="px-4 py-2 w-full h-full"
          />
          <button className="absolute top-1/2 right-4 -translate-y-1/2">
            <RiSearchLine />
          </button>
        </div>
        {/* wrapper */}
        <Suspense fallback={<Loading />}>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {allProducts.map((product) => (
              <ProductCard key={product._id} {...product} />
            ))}
          </div>
        </Suspense>
      </div>
    </section>
  );
}
