import { DelivererCheckinout, DelivererTransport } from 'ui';

const Transport = () => {
  const role = 'deliverer'
  return (
      <>
        <main className="container mx-auto px-10 pb-8 space-y-4">
          <h1 className="text-4xl font-bold py-6">Delivery</h1>
          {
            role == 'deliverer' && <DelivererCheckinout />
          }
          <DelivererTransport />
        </main>
      </>
    );
};

export default Transport;
