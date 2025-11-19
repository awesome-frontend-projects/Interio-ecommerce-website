"use client";

import React, { useState } from "react";
import Link from "next/link";
import { RiUserLine, RiLoginBoxLine, RiUserAddLine } from "@remixicon/react";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default function UserDropdown() {
  const [openDrop, setOpenDrop] = useState(false);

  return (
    <div className="relative">
      {/* Profile Button */}
      <button
        className="ring-1 ring-gray-300 p-2 rounded-full hover:bg-gray-100  transition"
        onClick={() => setOpenDrop(!openDrop)}
      >
        <RiUserLine size={26} />
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute top-12 right-0 bg-white min-w-52 w-full border border-gray-200 rounded-lg opacity-0 invisible overflow-hidden transition-all  ${openDrop ? "opacity-100 visible" : ""}`}
      >
        <div className="divide-y divide-gray-100">
          {/* Login */}
          <Link
            href="/login"
            onClick={() => setOpenDrop(false)}
            className="flex items-center gap-2 p-4 hover:bg-gray-100 focus:bg-gray-100 transition"
          >
            <span>
              <RiLoginBoxLine className="text-green-600" />
            </span>
            Login
          </Link>

          {/* Register */}
          <Link
            href="/register"
            onClick={() => setOpenDrop(false)}
            className="flex items-center gap-2 p-4 hover:bg-gray-100 focus:bg-gray-100 transition"
          >
            <span>
              <RiUserAddLine className="text-blue-600" size={22} />
            </span>
            Register
          </Link>
        </div>
      </div>

      <SignedOut>
        <SignInButton />
        <SignUpButton>
          <button className="bg-[#6c47ff] text-ceramic-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
            Sign Up
          </button>
        </SignUpButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}
