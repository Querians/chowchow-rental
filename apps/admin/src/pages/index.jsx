import Image from 'next/image';
import { Sidebar } from 'ui';

const Home = () => {

  const role = "inventory"
  
  return (
    <>
      <aside>
        <Sidebar role={role} />
      </aside>

      <main className="container mx-auto lg:ml-64 px-10 space-y-4">

      </main>
    </>
  );
};

export default Home;
