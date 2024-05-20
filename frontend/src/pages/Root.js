import { Outlet, useLoaderData, useNavigation, useSubmit } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';
import { useEffect } from 'react';
import { getTokenDuration } from '../util/auth';

function RootLayout() {
  // const navigation = useNavigation();
  const token = useLoaderData();
  const submit = useSubmit();

  useEffect(()=>{

    if(token==='EXPIRED') {
      submit(null, {action: '/logout', method: 'POST'});
    }

    const tokenDuration = getTokenDuration();

    setTimeout(()=>{
      submit(null, {action: '/logout', method: 'POST'});
  }, tokenDuration);

  },[token, submit])

  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;