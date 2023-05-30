import Image from 'next/image';
import { Navbar } from 'ui';
import { LoginInfo } from '@/components/LoginInfo';
import { AUTH_TOKEN } from '@/constants';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Login = () => {

  const router = useRouter();

  useEffect(()=>{

    const token = localStorage.getItem(AUTH_TOKEN);

    token ? router.push('/profile') : ""

  }, [router])

  return (
    <>
      <Navbar />
      <main className="container pt-24 md:pt-24 mx-auto px-4">
        <LoginInfo />
      </main>
    </>
  );
};

export default Login;
