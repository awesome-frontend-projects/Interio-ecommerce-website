import { client } from "@/sanity/client";
import { SanityDocument } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CATEGORY_QUERY = `*[_type == "categoryImage"]{
  _id,
  title,
  quantity,
  "slug": slug.current,
  "imageUrl": image.asset->url,
  "imageWidth": image.asset->metadata.dimensions.width,
  "imageHeight": image.asset->metadata.dimensions.height
}`;

const Category = async () => {
  const data = await client.fetch<SanityDocument[]>(CATEGORY_QUERY);
  return (
    <section className="lg:-mt-44 pt-20 lg:pt-0">
      <div className="container grid gap-[30px] md:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <Link
            key={item._id}
            href={`/category/${item.slug}`}
            className="bg-green-50 hover:bg-green-100 border border-green-200 hover:border-green-300 transition-colors px-[43px] py-[33px] rounded-xl"
          >
            {/* Title & quantity */}
            <div>
              <h2 className="text-2xl font-bold">{item.title}</h2>
              <p className="text-gray-500">{item.quantity} items</p>
            </div>

            {/* Image */}
            <div className="max-w-max mx-auto mt-12">
              <Image
                src={item.imageUrl}
                alt={item.title}
                width={item.imageWidth}
                height={item.imageHeight}
                className="w-full h-full object-cover"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Category;
