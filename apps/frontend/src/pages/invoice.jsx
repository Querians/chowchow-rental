import { Navbar, Button, InvoiceInfo } from 'ui';

const Invoice = () => {
  return (
    <div className="">
    <Navbar />
    <main className="container pt-24 md:pt-24 mx-auto px-4">
      <InvoiceInfo />
    </main>
  </div>
  );
};

export default Invoice;
