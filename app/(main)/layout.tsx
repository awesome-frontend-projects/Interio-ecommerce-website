import PageTitle from "@/components/PageTitle";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-Commerce website",
  description: "Explore the.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <PageTitle />
      <main className="min-h-screen">{children}</main>
    </div>
  );
}
