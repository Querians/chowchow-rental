import Image from 'next/image';
import { Navbar, LoginInfo } from 'ui';

const Login = () => {
  return (
    <>
      <Navbar />
      <main className="container pt-24 md:pt-24 mx-auto px-4">
        <LoginInfo />
      </main>
    </>
  );
};

export default Login;
