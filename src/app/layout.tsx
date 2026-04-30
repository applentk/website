import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "@/styles/globals.css";
import { ReactNode } from "react";
import { Navbar } from "@/features/frontend/navbar/components/navbar";
import { navbarItems } from "@/features/frontend/navbar/constansts";

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
      className={`${outfitSans.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        { children }
      </body>
    </html>
  );
}
