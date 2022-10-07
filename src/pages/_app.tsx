import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <title>A melhor hospedagem é aqui!</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
