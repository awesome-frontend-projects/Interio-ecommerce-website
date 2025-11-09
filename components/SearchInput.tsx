"use client";

import React from "react";
import { RiSearchLine } from "@remixicon/react";

interface SearchBoxProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBox({ value, onChange }: SearchBoxProps) {
  return (
    <div className="border max-w-lg w-full rounded-sm relative border-gray-400">
      <input
        type="text"
        placeholder="Search anything..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="px-4 py-2 w-full h-full outline-none"
      />
      <button className="absolute top-1/2 right-4 -translate-y-1/2">
        <RiSearchLine />
      </button>
    </div>
  );
}
