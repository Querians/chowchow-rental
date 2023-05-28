import { Breadcrumb, CountQuarterVehicleUse, CountDelivererTransportationTimes } from 'ui';
import { useState } from 'react';

const logisticAnalyse = () => {

  return (
      <>
        <main className="container mx-auto px-10 pb-8 space-y-4">
          <Breadcrumb first_name="" first="#" current="" />
          <h1 className="text-4xl font-bold py-6">Logistic</h1>
          <CountQuarterVehicleUse />
          <CountDelivererTransportationTimes />
        </main>
      </>
    );
};

export default logisticAnalyse;
