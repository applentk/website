import "@/styles/globals.css";
import { ReactNode } from "react";
import { Navbar } from "@/features/navbar/components";
import { navbarItems } from "@/features/navbar/constants";

interface FrontendLayoutProps {
  children: ReactNode
}

export default function FrontendLayout({ children }: FrontendLayoutProps) {
  return (
    <>
      <Navbar items={ navbarItems } />
      { children }
    </>
  );
}
