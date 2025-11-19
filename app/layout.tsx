import CartProviderWrapper from "@/components/CartProvider";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Lexend } from "next/font/google";

const lexend = Lexend({
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Interio - Premium Furniture Store",
  description:
    "Discover premium furniture for every room in your home. Shop modern, elegant pieces crafted with quality and style.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={lexend.className}>
          <CartProviderWrapper>
            <Toaster
              position="top-center"
              toastOptions={{
                duration: 3000,
                style: {
                  background: "#333",
                  color: "#fff",
                },
                success: {
                  iconTheme: {
                    primary: "#10b981",
                    secondary: "#fff",
                  },
                },
                error: {
                  iconTheme: {
                    primary: "#ef4444",
                    secondary: "#fff",
                  },
                },
              }}
            />
            <Header />
            <main className="min-h-svh">{children}</main>
            <Footer />
          </CartProviderWrapper>
        </body>
      </html>
    </ClerkProvider>
  );
}
