"use client";

import React, { useState } from "react";
import Link from "next/link";
import { RiUserLine, RiLoginBoxLine, RiUserAddLine } from "@remixicon/react";

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
        <div className="fixed top-0 left-0 h-screen w-full bg-gray-50 opacity-0 z-10 " />
      </div>
    </div>
  );
}
