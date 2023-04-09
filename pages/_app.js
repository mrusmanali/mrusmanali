import React, { useEffect } from 'react';
import '@root/assets/styles/globals.scss';
import FirebaseService from '@root/services/firebase';
import AnalyticsService from '@root/services/analytics';
import DatabaseService from '@root/services/database';
import AuthService from '@root/services/auth';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    FirebaseService.init();
    AnalyticsService.init();
    AuthService.init();

    AuthService.$user.subscribe(user=>console.log(user));
  }, [])

  return (
    <Component {...pageProps} />
  )
}

export default MyApp