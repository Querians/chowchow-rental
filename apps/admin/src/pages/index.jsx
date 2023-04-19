import Image from 'next/image';
import { Navbar, Header } from 'ui';

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4">
        <h1 className="text-4xl font-bold">Staff</h1>
        <Header title="Home" app="staff" />
      </main>
    </>
  );
};

export default Home;
