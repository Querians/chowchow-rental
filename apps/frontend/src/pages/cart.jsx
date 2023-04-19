import Image from 'next/image';
import { Navbar, Header } from 'ui';

const Cart = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4">
        <h1 className="text-4xl font-bold">Customer</h1>
        <Header title="Cart" />
      </main>
    </>
  );
};

export default Cart;
