import { Sidebar, Button, Breadcrumb, TextInput, Dropdown } from 'ui';
import { useState } from 'react';
import Link from 'next/link';

const Vehicleinfoform = () => {
  const role = 'MA'
  const [addVehicle, setAddVehicle] = useState({
    vehicle_licence: '',
    vehicle_type_id: '',
    brand: '',
    model: '',
  });
  const all_vehicle_type = {
    '001': '4 wheels truck',
    '002': '6 wheels truck',
    '003':'10 wheels truck',
  }

  return (
    <>
      <aside>
        <Sidebar role={role} />
      </aside>

      <main className="container mx-auto px-10 lg:ml-64">
        <form action="">
          <Breadcrumb
            first_name="Delivery"
            first="/logisticAnalyse"
            second_name="Vehicle Info"
            second="/vehicleinfo"
            current="Add Vehicle Info"
          />
          <h1 className="py-6 text-4xl font-bold">
          Add Vehicle Info
          </h1>
          <div className="w-full rounded-lg border-2 border-black p-4">
            <div className="space-y-4">
              <div className="grid grid-flow-row grid-cols-2 gap-4 sm:grid-cols-2">
                <TextInput onChange={e=>setAddVehicle({...addVehicle, ['vehicle_licence']: e.target.value})} placeholder="" label="Vehicle Licence" />
                <Dropdown onChange={e=>setAddVehicle({...addVehicle, ['vehicle_type_id']: e.target.value})} options={all_vehicle_type} label={'Vehicle Type ID'}/>
                <TextInput onChange={e=>setAddVehicle({...addVehicle, ['brand']: e.target.value})} placeholder="" label="Brand" />
                <TextInput onChange={e=>setAddVehicle({...addVehicle, ['model']: e.target.value})} placeholder="" label="Model" />
              </div>
              <div class="grid justify-items-center grid-cols-3">
                <Link href="/vehicleinfo" className='col-start-2 w-full'>
                  <Button type="submit" text="CONFIRM" />
                </Link>
              </div>
            </div>
          </div>
        </form>
      </main>
    </>
  );
};

export default Vehicleinfoform;
