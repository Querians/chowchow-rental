import {  Breadcrumb, Sidebar } from 'ui';
import { SideBar } from '@/components/SideBar';
import { AddTransport } from '@/components/AddTransport';
import { EditTransport } from '@/components/EditTransport';
import { DeleteTransport } from '@/components/DeleteTransport';

const logisticManagement = () => {
  const role = 'DL'
  return (
      <>
      <aside>
            <SideBar role={role} showDeli="true" />
        </aside>

        <main className="container mx-auto space-y-4 px-10 pb-8 lg:ml-64">
          <Breadcrumb first_name="Logistic" current="Logistic Management" />
          <h1 className="text-4xl font-bold py-6">Logistic Management</h1>
          <AddTransport />
          {/* <EditTransport />
          <DeleteTransport /> */}
        </main>
      </>
    );
};

export default logisticManagement;
