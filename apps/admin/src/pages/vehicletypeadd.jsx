import { Sidebar, Button, Breadcrumb, TextInput, Dropdown } from 'ui';
import { useState } from 'react';
import Link from 'next/link';

const Vehicletypeadd = () => {
  const role = 'MA';
  const [addVehicleType, setAddVehicleType] = useState({
    vehicle_type_id: '',
    vehicle_type_n: '',
  });

  return (
    <>
      <aside>
        <Sidebar role={role} />
      </aside>

      <main className="container mx-auto px-10 lg:ml-64">
          <Breadcrumb
            first_name="Delivery"
            first="/logisticAnalyse"
            second_name="Vehicle Type"
            second="/vehicletype"
            current="Add Vehicle Type"
          />
          <h1 className="py-6 text-4xl font-bold">Add Vehicle Type</h1>
          <div className="w-full rounded-lg border-2 border-black p-4">
            <div className="space-y-4">
              <div className="grid grid-flow-row grid-cols-2 gap-4 sm:grid-cols-2">
                <TextInput  onChange={e=>setAddVehicleType({...addVehicleType, ['vehicle_type_id']: e.target.value})} placeholder="" label="Vehicle Type ID" />
                <TextInput onChange={e=>setAddVehicleType({...addVehicleType, ['vehicle_type_n']: e.target.value})} placeholder="" label="Name" />
              </div>
              <div class="grid justify-items-center grid-cols-3">
                <Link href="/vehicletype" className='col-start-2 w-full'>
                  <Button type="submit" text="CONFIRM" />
                </Link>
              </div>
            </div>
          </div>
      </main>
    </>
  );
};

export default Vehicletypeadd;
