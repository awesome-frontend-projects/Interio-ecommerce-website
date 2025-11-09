import Category from "@/components/Category";
import Hero from "@/components/Hero";
import Loading from "@/components/Loading";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import React, { Suspense } from "react";

export default function page() {
  return (
    <>
      <Hero />
      <Category />
      <Suspense fallback={<Loading />}>
        <Products />
      </Suspense>
      <Testimonials />
    </>
  );
}
