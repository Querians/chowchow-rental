import { DelivererCheckinout, DelivererTransport, Sidebar, Breadcrumb } from 'ui';

const Transport = () => {
  const role = 'DL'
  return (
      <>
        <aside>
            <Sidebar role={role} showDeli="true" />
        </aside>
        <main className="container mx-auto lg:ml-64 px-10 space-y-4">
          <Breadcrumb first_name="Delivery" first="/logisticAnalyse" current="Transport Update" />
          <h1 className="text-4xl font-bold py-6">Transport Update</h1>
          {
            role == 'DL' && <DelivererCheckinout />
          }
          <DelivererTransport />
        </main>
      </>
    );
};

export default Transport;
