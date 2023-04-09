import React, { useEffect } from 'react';
import '@root/assets/styles/globals.scss';
import FirebaseService from '@root/services/firebase';
import AnalyticsService from '@root/services/analytics';
import DatabaseService from '@root/services/database';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    FirebaseService.init();
    AnalyticsService.init();

    DatabaseService.fetchList('articles')
    .then(data=>console.log(data))
    .catch(error=>console.log(error));
  }, [])

  return (
    <Component {...pageProps} />
  )
}

export default MyApp