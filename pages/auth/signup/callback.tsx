import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { signIn } from 'next-auth/react';

const Callback: React.FC = () => {
  const router = useRouter();
  useEffect(() => {
    if (!router.isReady) return;
    const type = router.query['type'];
    const redirectUri = router.query['redirect_uri'];

    if (!type) {
      router.replace(`${redirectUri}` ?? '/');
      return;
    }

    if (type === 'post_register') {
      if (!redirectUri) {
        router.replace('/');
        return;
      }

      signIn('keycloak', { callbackUrl: '/' });
      return;
    }
  }, [router]);

  return <span>Loading...</span>;
};

export default Callback;
