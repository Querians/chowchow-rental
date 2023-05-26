import Image from 'next/image';
import { Navbar, RegisterInfo } from 'ui';

const Register = () => {
  return (
    <>
      <Navbar />
      <main className="container pt-24 md:pt-24 mx-auto px-4">
        <RegisterInfo />
      </main>
    </>
  );
};

export default Register;
