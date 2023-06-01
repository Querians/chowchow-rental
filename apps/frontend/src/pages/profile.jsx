import Image from 'next/image';
import { Navbar, Header } from 'ui';
import { CustomerProfile } from '@/components/CustomerProfile';
import ClientOnly from '@/components/ClientOnly';

const Profile = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 pt-24 md:pt-24">
        <ClientOnly>
          <CustomerProfile />
        </ClientOnly>
      </main>
    </>
  );
};

export default Profile;
