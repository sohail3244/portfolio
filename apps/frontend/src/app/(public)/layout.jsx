"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { usePathname } from "next/navigation";

export default function PublicLayout({ children }) {
  const pathname = usePathname();

  return (
    <>
      <Header />
      {children}

      {/* ✅ Sirf non-home pages par footer */}
      {pathname !== "/" && <Footer />}
    </>
  );
}