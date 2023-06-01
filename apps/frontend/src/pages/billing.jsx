import { Navbar } from 'ui';
import { BillingInfo } from '@/components/BillingInfo';

const Billing = () => {
  return (
    <div className="">
      <Navbar />
      <main className="container pt-24 md:pt-24 mx-auto px-4">
        <BillingInfo />
      </main>
    </div>
  );
};

export default Billing;
