import React from "react";
import Navbar from "../../components/Navbar";

import style from "./style.module.scss";

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
      <div className={style["content"]}>
        <button onClick={handleTheme}>Change Theme for test</button>
        <h1>Deneme</h1>
        <h1>Deneme</h1>
        <h1>Deneme</h1>
        <h1>Deneme</h1>
        <h1>Deneme</h1>
        <h1>Deneme</h1>
        <h1>Deneme</h1>
        <h1>Deneme</h1>
        <h1>Deneme</h1>
        <h1>Deneme</h1>
        <h1>Deneme</h1>
        <h1>Deneme</h1>
        <h1>Deneme</h1>
        <h1>Deneme</h1>
        <h1>Deneme</h1>
        <h1>Deneme</h1>
        <h1>Deneme</h1>
        <h1>Deneme</h1>
        <h1>Deneme</h1>
        <h1>Deneme</h1>
        <h1>Deneme</h1>
        <h1>Deneme</h1>
        <h1>Deneme</h1>
        <h1>Deneme</h1>
        <h1>Deneme</h1>
        {children}
      </div>
    </div>
  );
}

export default DefaultLayout;
