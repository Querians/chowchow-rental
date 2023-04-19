import Image from 'next/image';
import { Navbar, Header } from 'ui';

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4">
        <h1 className="text-4xl font-bold">Customer</h1>
        <Header title="Home" />
      </main>
    </>
  );
};

export default Home;
