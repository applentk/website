import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "@/styles/globals.css";
import { ReactNode } from "react";
import { Navbar } from "@/features/navbar/components";
import { navbarItems } from "@/features/navbar/constants";

const outfitSans = Outfit({
  variable: "--outfit-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "applezk",
  description: "applezk's blog",
};

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${outfitSans.className} antialiased`}
    >
      <body className="min-h-full">
        { children }
      </body>
    </html>
  );
}
