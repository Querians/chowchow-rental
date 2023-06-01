import Image from 'next/image';
import { Sidebar, NavbarAdmin } from 'ui';
import { StaffLoginInfo } from '@/components/StaffLoginInfo';
import ClientOnly from '@/components/ClientOnly';
import { AUTH_TOKEN } from '@/constants';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Home = () => {

  const router = useRouter();

  useEffect(()=>{

    const token = localStorage.getItem(AUTH_TOKEN);

    token ? router.push('/products') : ""

  }, [router])

  const role = "inventory"

  return (
      <>
        <NavbarAdmin />
        <main className="container mx-auto px-10 space-y-4">
          <ClientOnly>
            <StaffLoginInfo />
          </ClientOnly>
        </main>
      </>
    );
};

export default Home;
