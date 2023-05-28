import { AddTransport, Breadcrumb, EditTransport, DeleteTransport, Sidebar } from 'ui';

const logisticManagement = () => {
  return (
      <>
        <aside>
            <Sidebar showDeli="true" />
        </aside>
        <main className="container mx-auto lg:ml-64 px-10">
          <Breadcrumb first_name="Logistic" current="Logistic Management" />
          <h1 className="text-4xl font-bold py-6">Logistic Management</h1>
          <AddTransport />
          <EditTransport />
          <DeleteTransport />
        </main>
      </>
    );
};

export default logisticManagement;
