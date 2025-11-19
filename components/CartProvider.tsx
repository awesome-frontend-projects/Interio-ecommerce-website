"use client";
import React from "react";
import { CartProvider } from "use-shopping-cart";

export default function CartProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
      successUrl={`${typeof window !== "undefined" ? window.location.origin : ""}/success`}
      cancelUrl={`${typeof window !== "undefined" ? window.location.origin : ""}/error`}
      currency="USD"
      billingAddressCollection={true}
      shouldPersist={true}
      language={"en-US"}
    >
      {children}
    </CartProvider>
  );
}
