import '../styles/globals.css'
import {AppWrapper} from "../context/StateProvider"
import Header from "../components/Header"
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <AppWrapper>
      <Head >
      <meta name="description" content="Ecomm wesbite made using NEXTJS"/>
      <title>A Ecommerce Website</title>
        </Head>
      <Header/>
  <Component {...pageProps} />
  </AppWrapper>
  </>
  );
}

export default MyApp;
