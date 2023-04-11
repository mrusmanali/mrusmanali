import React, { useEffect } from 'react';
import '@root/assets/styles/globals.scss';
import AuthService from '@root/services/auth';
import FirebaseService from '@root/services/firebase';
import AnalyticsService from '@root/services/analytics';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    FirebaseService.init();
    AnalyticsService.init();
    AuthService.init();
  }, [])

  return (
    <Component {...pageProps} />
  )
}

export default MyApp