import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import React from 'react';
import Script from 'next/script';
import '@root/assets/styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return <>
    <Script strategy="beforeInteractive" src="./scripts/html2canvas.min.js" />
    <Component {...pageProps} />
  </>
}

export default MyApp