import React from "react";
import Navbar from "../components/Navbar";

function DefaultLayout({ children }) {
  return (
    <div className="default-layout">
      <Navbar />
      {children}
    </div>
  );
}

export default DefaultLayout;
