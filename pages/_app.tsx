import "../styles/globals.css";

import React from "react";
import App, { AppProps } from "next/app";
import Head from "next/head";

import { appWithTranslation } from "../i18n";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Example</title>
        {/* <link rel='icon' type='image/png' href='/favicon.png' /> */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

MyApp.getInitialProps = async (appContext) => ({
  ...(await App.getInitialProps(appContext)),
});

export default appWithTranslation(MyApp);
