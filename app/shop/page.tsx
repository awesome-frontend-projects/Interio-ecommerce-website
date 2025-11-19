import Loading from "@/components/Loading";
import { client } from "@/sanity/client";
import { ProductProps } from "@/types/types";
import React, { Suspense } from "react";
import ShopClient from "./components/ShopClient";
import PageTitle from "@/components/PageTitle";

const ALLPRODUCTS_QUERY = `*[_type == "product"]{
  _id,
  title,
  price,
  "img":image.asset->url,
  "category":category->title
}`;

export default async function Shop() {
  const allProducts = await client.fetch<ProductProps[]>(ALLPRODUCTS_QUERY);

  return (
    <Suspense fallback={<Loading />}>
      <PageTitle />
      <ShopClient products={allProducts} />
    </Suspense>
  );
}
