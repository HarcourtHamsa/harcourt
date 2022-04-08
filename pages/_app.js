import React from "react";
import Router from "next/router";
import nProgress from "nprogress";

import "../styles/globals.css";

// nProgress.configure({ showSpinner: publicRuntimeConfig.NProgressShowSpinner });

Router.onRouteChangeStart = () => {
  console.log('onRouteChangeStart triggered');
  nProgress.start();
};

Router.onRouteChangeComplete = () => {
  console.log('onRouteChangeComplete triggered');
  nProgress.done();
};

Router.onRouteChangeError = () => {
  console.log('onRouteChangeError triggered');
  nProgress.done();
};

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
