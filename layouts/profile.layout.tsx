import React from "react";
// components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Profile({ children }: any): any {
  return (
    <>
      <div className="relative md:ml-64 bg-blueGray-100">
        {/* Header */}
            <Header />
                  <div className="px-4 md:px-10 mx-auto w-full -m-24">
                  {children}
                  </div>
            <Footer />
      </div>
    </>
  );
}
