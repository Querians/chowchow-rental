import { Breadcrumb, Sidebar } from 'ui';
import { useState } from 'react';
import { CountQuarterVehicleUse } from '@/components/CountQuarterVehicleUse';
import { CountDelivererTransportationTimes } from '@/components/CountDelivererTransportationTimes';
import { SideBar } from '@/components/SideBar';

const logisticAnalyse = () => {

  return (
      <>
      <aside>
      <SideBar role={'DL'} showDeli="true" />
  </aside>
        <main className="container mx-auto space-y-4 px-10 pb-8 lg:ml-64">
          <Breadcrumb first_name="Logistic" current="Logistic Analysis" />
          <h1 className="text-4xl font-bold py-6">Logistic Analysis</h1>
          <CountQuarterVehicleUse />
          <CountDelivererTransportationTimes />
        </main>
      </>
    );
};

export default logisticAnalyse;
