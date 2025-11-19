"use client";
import { RiMenuLine, RiShoppingCart2Line, RiCloseLine } from "@remixicon/react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useShoppingCart } from "use-shopping-cart";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Header() {
  const pathname = usePathname();
  const { cartCount } = useShoppingCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`py-4 fixed top-0 left-0 bg-white w-full border-b border-gray-200 z-40 transition-shadow ${
        scrolled ? "shadow-xs" : ""
      }`}
    >
      <div className="container flex justify-between items-center relative">
        {/* Logo */}
        <Link href="/" className="text-3xl font-semibold text-green-600">
          Interio
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-8">
            <li>
              <Link
                href={"/"}
                className={`hover:text-green-600 transition font-medium ${
                  pathname === "/" ? "text-green-600" : "text-gray-700"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"/shop"}
                className={`hover:text-green-600 transition font-medium ${
                  pathname === "/shop" ? "text-green-600" : "text-gray-700"
                }`}
              >
                Shop
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
            <ul className="flex flex-col py-4">
              <li>
                <Link
                  href={"/"}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-6 py-3 hover:bg-gray-50 transition ${
                    pathname === "/"
                      ? "text-green-600 bg-green-50"
                      : "text-gray-700"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={"/shop"}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-6 py-3 hover:bg-gray-50 transition ${
                    pathname === "/shop"
                      ? "text-green-600 bg-green-50"
                      : "text-gray-700"
                  }`}
                >
                  Shop
                </Link>
              </li>
            </ul>
          </nav>
        )}

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          {/* Cart */}
          <Link
            href={"/cart"}
            className="relative block hover:text-green-600 transition"
          >
            <RiShoppingCart2Line size={28} />
            <span className="absolute w-5 h-5 bg-green-600 -top-2 -right-2 rounded-full text-white text-xs flex items-center justify-center font-semibold">
              {cartCount}
            </span>
          </Link>

          {/* Auth */}
          <SignedOut>
            <SignInButton mode="modal">
              <button className="hidden sm:block bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg transition font-medium">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                },
              }}
            />
          </SignedIn>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition"
          >
            {mobileMenuOpen ? (
              <RiCloseLine size={28} />
            ) : (
              <RiMenuLine size={28} />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
