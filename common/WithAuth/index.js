import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import AuthService from '@root/services/auth';


function WithAuth(WrappedComponent) {
  const Wrapper = (props) => {
    const router = useRouter();
    const [isAuth, setIsAuth] = useState(null);

    useEffect(() => {
      let authSub = AuthService.$user.subscribe(user => {
        if(!user) router.replace({
          pathname: '/admin/login', 
          query: {back: window.location.pathname
        }});
        else setIsAuth(true);
      });
      return () => {authSub.unsubscribe()}
    }, []);

    if (!isAuth) return null;
    return <WrappedComponent {...props} />;
  }

  return Wrapper;
}

export default WithAuth