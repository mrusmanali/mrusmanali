import React from 'react';
// import Script from 'next/script';
import '@root/assets/styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Script strategy="beforeInteractive" src="./scripts/html2canvas.min.js" /> */}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp