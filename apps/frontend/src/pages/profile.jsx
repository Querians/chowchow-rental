import Image from 'next/image';
import { Navbar, Header, CustomerProfile } from 'ui';

const Profile = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 pt-24 md:pt-24">
        <CustomerProfile />
      </main>
    </>
  );
};

export default Profile;
