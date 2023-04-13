import Footer from "@/src/components/common/Footer";
import Header from "@/src/components/common/Header";
import React, { ReactElement } from "react";

interface props {
  children: ReactElement;
}

const Layout: React.FC<props> = ({ children }) => {
  return (
    <>
      <div className="bg-slate-100 min-h-screen main_wrp">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
