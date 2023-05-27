import { Navbar, CartInfo, TextInput, Button } from 'ui';


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
