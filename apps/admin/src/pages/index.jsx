import Image from 'next/image';
import { Sidebar, NavbarFake, StaffLoginInfo } from 'ui';

const Home = () => {

const role = "inventory"
  
return (
    <>
      <NavbarFake />
      <main className="container mx-auto px-10 space-y-4">
        <StaffLoginInfo />
      </main>
    </>
  );
};

export default Home;
