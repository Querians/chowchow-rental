import { Sidebar, Button, Breadcrumb, TextInput, Dropdown } from 'ui';
import { useState } from 'react';
import Link from 'next/link';

const Vehicleinfoedit = () => {
  const role = 'MA'
  const this_vehicle_Info = {
    vehicle_licence:'กฟ 342',
    vehicle_type_id: '003',
    brand: 'ISUZU',
    model: 'NRL 130',
  }
  const [editVehicle, setEditVehicle] = useState({
    vehicle_licence: this_vehicle_Info.vehicle_licence,
    vehicle_type_id: this_vehicle_Info.vehicle_type_id,
    brand: this_vehicle_Info.brand,
    model: this_vehicle_Info.model,
  });
  const receive_data = {
    1: {
      vehicle_type_id: '001',
      vehicle_type_n: '4 wheels truck',
    },
    2: {
      vehicle_type_id: '002',
      vehicle_type_n: '6 wheels truck',
    },
    3: {
      vehicle_type_id: '003',
      vehicle_type_n: '10 wheels truck',
    },
  };

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
            current="Edit Vehicle Info"
          />
          <h1 className="py-6 text-4xl font-bold">
          Edit Vehicle Info
          </h1>
          <div className="w-full rounded-lg border-2 border-black p-4">
            <div className="space-y-4">
              <div className="grid grid-flow-row grid-cols-2 gap-4 sm:grid-cols-2">
                <TextInput type={'readOnly'} value={this_vehicle_Info.vehicle_licence}  onChange={e=>setEditVehicle({...editVehicle, ['vehicle_licence']: e.target.value})} placeholder="" label="Vehicle Licence" />
                <div>
                  <label
                    htmlFor={'vehicle_type_id'}
                    className="mb-2.5 block text-sm font-medium text-black"
                  >
                    vehicle_type_id
                  </label>
                  <select
                    name={'vehicle_type_id'}
                    id={'vehicle_type_id'}
                    value={editVehicle.vehicle_type_id}
                    onChange={(e) =>
                      setEditVehicle({
                        ...editVehicle,
                        ['vehicle_type_id']: e.target.value,
                      })
                    }
                    className="mb-2.5 block w-full rounded-md border-2 border-black p-2.5 text-sm text-black invalid:text-gray-500 focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option hidden disabled selected value={''}>
                      {''}
                    </option>
                    {Object.keys(receive_data).map((key) => (
                      <option
                        key={key}
                        value={receive_data[key].vehicle_type_id}
                      >
                        {receive_data[key].vehicle_type_n}
                      </option>
                    ))}
                  </select>
                </div>
                <TextInput defaultValue={this_vehicle_Info.brand} onChange={e=>setEditVehicle({...editVehicle, ['brand']: e.target.value})} placeholder="" label="Brand" />
                <TextInput defaultValue={this_vehicle_Info.model} onChange={e=>setEditVehicle({...editVehicle, ['model']: e.target.value})} placeholder="" label="Model" />
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

export default Vehicleinfoedit;
