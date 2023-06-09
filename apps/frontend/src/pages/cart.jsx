import { Navbar } from 'ui';
import { CartInfo } from '../components/CartInfo'


const cart = () => {
  return (
    <>
      <Navbar />
      <main className="container pt-24 md:pt-24 mx-auto px-4">
        <CartInfo />
      </main>
    </>
  );
};

export default cart;
