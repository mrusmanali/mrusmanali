import React, { useEffect } from 'react';
import '@root/assets/styles/globals.scss';
import AuthService from '@root/services/auth';
import AnalyticsService from '@root/services/analytics';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    AuthService.init();
    AnalyticsService.init();
  }, [])

  return (
    <Component {...pageProps} />
  )
}

export default MyApp