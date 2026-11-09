import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SiteLayout = ({ children }: { children: ReactNode }) => (
  <>
    <Header />
    <main className="min-h-screen overflow-x-hidden">{children}</main>
    <Footer />
  </>
);

export default SiteLayout;
