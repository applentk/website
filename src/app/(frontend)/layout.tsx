import "@/styles/globals.css";
import { ReactNode } from "react";
import { Navbar } from "@/features/frontend/navbar/components/navbar";
import { navbarItems } from "@/features/frontend/navbar/constansts";

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
