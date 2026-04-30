import { ReactNode } from "react"

interface BackendLayoutProps {
  children: ReactNode
}

export default function BackendLayout({ children }: BackendLayoutProps) {
  return children;
}