"use client";
import { testimonials } from "@/data/data";
import { RiDoubleQuotesL } from "@remixicon/react";
import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <section className="section bg-green-50 pb-20">
      <div className="container">
        <h2 className="title text-center mb-12">What Our Clients Say</h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-sm p-8 flex flex-col items-center text-center"
            >
              <RiDoubleQuotesL className="text-indigo-600 text-4xl mb-3" />
              <p className="text-grey-clr-2 mb-6 italic">"{item.quote}"</p>

              <div className="flex flex-col items-center mt-auto">
                {/* img */}
                <div className="size-16">
                  <Image
                    src={item.img}
                    width={150}
                    height={150}
                    alt={item.name}
                    className="rounded-full object-cover w-full h-full"
                  />
                </div>
                {/* content */}
                <div>
                  <h3 className="mt-3 font-semibold text-lg">{item.name}</h3>
                  <span className="text-sm text-gray-500">{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
