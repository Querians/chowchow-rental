import { Breadcrumb, CountQuarterVehicleUse, CountDelivererTransportationTimes, Sidebar } from 'ui';

const logisticAnalyse = () => {

  return (
      <>
        <aside>
          <Sidebar showDeli="true" />
        </aside>
        <main className="container mx-auto lg:ml-64 px-10 space-y-4">
          <Breadcrumb first_name="Logistic" current="Logistic Analysis" />
          <h1 className="text-4xl font-bold py-6">Logistic Analysis</h1>
          <CountQuarterVehicleUse />
          <CountDelivererTransportationTimes />
        </main>
      </>
    );
};

export default logisticAnalyse;
