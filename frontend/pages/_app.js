import "../styles/globals.css";
import Head from "next/head";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Netflux</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
