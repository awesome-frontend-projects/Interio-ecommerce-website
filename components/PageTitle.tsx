"use client";
import { usePathname } from "next/navigation";
import React from "react";

export default function PageTitle() {
  const pathname = usePathname();
  return (
    <div className="min-h-56 bg-neutral-100 text-center flex items-center justify-center mt-16">
      <h2 className="font-bold text-3xl">
        {pathname === "/shop" ? "Shop Our Collection" : "Shopping Cart"}
      </h2>
    </div>
  );
}
