import Head from "next/head";
import DefaultLayout from "../layouts/default";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.scss";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.querySelector("body").setAttribute("class", "dark-theme");
  }, []);

  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  );
}

export default MyApp;
