"use client";

import React from "react";

interface FilterSelectProps {
  categories: string[];
  selected: string;
  onChange: (value: string) => void;
}

export default function FilterSelect({
  categories,
  selected,
  onChange,
}: FilterSelectProps) {
  return (
    <select
      value={selected}
      onChange={(e) => onChange(e.target.value)}
      className="border border-gray-400 px-3 py-2 rounded-sm outline-none"
    >
      {categories.map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  );
}
