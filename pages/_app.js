import Layout from "../components/Layout";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";
import "@/styles/globals.css";


export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
