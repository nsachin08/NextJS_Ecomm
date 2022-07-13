import "../styles/globals.css";
import { AppWrapper } from "../context/StateProvider";
import Header from "../components/Header";
import Head from "next/head";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>A Ecommerce Website</title>
      </Head>
      <AppWrapper>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </AppWrapper>
    </>
  );
}

export default MyApp;
