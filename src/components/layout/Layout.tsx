import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { MadeWithDyad } from "@/components/made-with-dyad";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <MadeWithDyad />
      <Footer />
    </div>
  );
};

export default Layout;