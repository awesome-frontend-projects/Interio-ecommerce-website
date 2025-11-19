"use client";

import React, { useState, useMemo } from "react";
import ProductCard from "@/components/ProductCard";
import SearchBox from "@/components/SearchInput";
import FilterSelect from "@/components/FilterSelection";
import { ProductProps } from "@/types/types";
import { RiFilterLine, RiGridFill, RiListCheck } from "@remixicon/react";

interface ShopClientProps {
  products: ProductProps[];
}

export default function ShopClient({ products }: ShopClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = [
      "All",
      ...new Set(products.map((p) => p.category).filter(Boolean)),
    ];
    return cats as string[];
  }, [products]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by search
    if (searchQuery) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Sort products
    if (sortBy === "price-low") {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    } else if (sortBy === "name") {
      filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title));
    }

    return filtered;
  }, [products, searchQuery, selectedCategory, sortBy]);

  return (
    <section className="py-10">
      <div className="container">
        {/* Filters Bar */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 mb-8 shadow-sm">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="w-full lg:w-auto lg:flex-1">
              <SearchBox value={searchQuery} onChange={setSearchQuery} />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <RiFilterLine className="text-gray-600" />
              <FilterSelect
                categories={categories}
                selected={selectedCategory}
                onChange={setSelectedCategory}
              />
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-400 px-3 py-2 rounded-sm outline-none"
            >
              <option value="default">Sort By</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>

            {/* View Mode Toggle */}
            <div className="flex gap-2 border border-gray-300 rounded-sm p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded ${viewMode === "grid" ? "bg-green-600 text-white" : "text-gray-600"}`}
                title="Grid View"
              >
                <RiGridFill size={20} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded ${viewMode === "list" ? "bg-green-600 text-white" : "text-gray-600"}`}
                title="List View"
              >
                <RiListCheck size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-gray-600">
          Showing {filteredProducts.length} of {products.length} products
          {selectedCategory !== "All" && ` in ${selectedCategory}`}
        </div>

        {/* Products Grid/List */}
        {filteredProducts.length > 0 ? (
          <div
            className={
              viewMode === "grid"
                ? "grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                : "flex flex-col gap-4"
            }
          >
            {filteredProducts.map((product) => (
              <ProductCard key={product._id} {...product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500">No products found</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
                setSortBy("default");
              }}
              className="mt-4 text-green-600 hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
