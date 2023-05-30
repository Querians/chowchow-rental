import ClientOnly from '@/components/ClientOnly';
import { RegisterInfo } from '@/components/RegisterInfo';
import { AUTH_TOKEN } from '@/constants';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useEffect } from 'react';
import { Navbar } from 'ui';

const Register = () => {
  const router = useRouter();

  useEffect(()=>{

    const token = localStorage.getItem(AUTH_TOKEN);

    token ? router.push('/profile') : ""

  }, [router])

  return (
    <>
      <Navbar />
      <main className="container pt-24 md:pt-24 mx-auto px-4">
        <ClientOnly>
          <RegisterInfo />
        </ClientOnly>
      </main>
    </>
  );
};

export default Register;
