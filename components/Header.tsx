"use client";
import { RiMenuLine, RiShoppingCart2Line } from "@remixicon/react";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import UserDropdown from "./UserDropdown";
import { useShoppingCart } from "use-shopping-cart";
export default function Header() {
  const pathname = usePathname();
  const { cartCount } = useShoppingCart();
  return (
    <header className="py-4 fixed top-0 left-0 bg-white w-full border-b border-gray-200 z-40">
      <div className="container flex justify-between items-center relative">
        {/* Logo */}
        <Link href="/" className="text-3xl font-semibold">
          Interio
        </Link>

        {/* navList */}
        <nav className="absolute top-full right-0 bg-white rounded-lg ring ring-gray-300 py-6 px-12 lg:flex-initial lg:relative lg:ring-0 lg:p-0">
          <ul className="flex flex-col lg:flex-row items-center gap-5">
            <li>
              <Link
                href={"/"}
                className={`hover:text-green-500 ${pathname === "/" ? "text-green-600" : ""}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"/shop"}
                className={`hover:text-green-500 ${pathname === "/shop" ? "text-green-600" : ""}`}
              >
                Shop
              </Link>
            </li>
          </ul>
        </nav>

        {/* buttons */}
        <div className="space-x-5 flex items-center">
          <Link href={"/cart"} className="relative block">
            <RiShoppingCart2Line size={30} />
            <span className="absolute w-5 h-5 bg-emerald-500 -top-1.5 -right-1.5 rounded-full text-white text-sm flex items-center justify-center">
              {cartCount}
            </span>
          </Link>
          <UserDropdown />

          <button className="lg:hidden">
            <RiMenuLine size={30} />
          </button>
        </div>
      </div>
    </header>
  );
}
