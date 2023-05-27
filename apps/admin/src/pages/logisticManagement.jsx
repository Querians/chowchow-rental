import { AddTransport, Breadcrumb } from 'ui';

const logisticManagement = () => {
  return (
      <>
        <main className="container mx-auto px-10 pb-8 space-y-4">
          <Breadcrumb first_name="" first="#" current="" />
          <h1 className="text-4xl font-bold py-6">Logistic Management</h1>
          <AddTransport />
        </main>
      </>
    );
};

export default logisticManagement;
