import Image from 'next/image';
import { Navbar, CartInfo } from 'ui';

const cart = () => {

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4">
        <CartInfo/>
      </main>
    </>
  );
};

export default cart;
