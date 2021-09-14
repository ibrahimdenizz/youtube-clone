import React from "react";
import Navbar from "../components/Navbar";

function DefaultLayout({ children }) {
  function handleTheme() {
    const html = document.querySelector("body");
    const theme = html.getAttribute("class");
    html.setAttribute(
      "class",
      theme === "dark-theme" ? "light-theme" : "dark-theme"
    );
  }
  return (
    <div className="default-layout">
      <Navbar />
      <button onClick={handleTheme}>Change Theme for test</button>
      {children}
    </div>
  );
}

export default DefaultLayout;
