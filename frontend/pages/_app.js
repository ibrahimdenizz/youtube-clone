import Head from "next/head";
import DefaultLayout from "../layouts/default";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  );
}

export default MyApp;
