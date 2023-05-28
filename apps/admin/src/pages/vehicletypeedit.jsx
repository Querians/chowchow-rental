import { Sidebar, Button, Breadcrumb, TextInput, Dropdown } from 'ui';
import { useState } from 'react';
import Link from 'next/link';

const Vehicleinfoedit = () => {
  const role = 'MA'
  const this_vehicle_Info = {
    vehicle_type_id: '001',
    vehicle_type_n: '4 wheels truck',
  }
  const [editVehicleType, setEditVehicleType] = useState({
    vehicle_type_id: this_vehicle_Info.vehicle_type_id,
    vehicle_type_n: this_vehicle_Info.vehicle_type_n,
  });

  return (
    <>
      <aside>
        <Sidebar role={role} />
      </aside>

      <main className="container mx-auto px-10 lg:ml-64">
          <Breadcrumb
            first_name="Logistic"
            second_name="Vehicle Type"
            second="/vehicletype"
            current="Edit Vehicle Type"
          />
          <h1 className="py-6 text-4xl font-bold">
          Edit Vehicle Type
          </h1>
          <div className="w-full rounded-lg border-2 border-black p-4">
            <div className="space-y-4">
              <div className="grid grid-flow-row grid-cols-2 gap-4 sm:grid-cols-2">
                <TextInput defaultValue={this_vehicle_Info.vehicle_type_id}  onChange={e=>setEditVehicleType({...editVehicleType, ['vehicle_type_id']: e.target.value})} placeholder="" label="Vehicle Type ID" />
                <TextInput defaultValue={this_vehicle_Info.vehicle_type_n} onChange={e=>setEditVehicleType({...editVehicleType, ['vehicle_type_n']: e.target.value})} placeholder="" label="Name" />
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

export default Vehicleinfoedit;
