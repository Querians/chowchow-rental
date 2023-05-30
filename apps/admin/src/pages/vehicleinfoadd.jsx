import { Sidebar, Button, Breadcrumb, TextInput, Dropdown } from 'ui';
import Link from 'next/link';

import ClientOnly from '@/components/ClientOnly';
import { gql, useMutation } from '@apollo/client';
import { SideBar } from '@/components/SideBar';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const ADD_VEHICLEINFO = gql`
  mutation AddVehicleInfo(
    $vehicleLicence: String!,
    $vehicleTypeId: String!,
    $brand: String!,
    $model: String!,
    $registerDate: String!,
    $status: Boolean!) {
    addVehicleInfo(
      vehicleLicence: $vehicleLicence,
      vehicleTypeId: $vehicleTypeId,
      brand: $brand,
      model: $model,
      registerDate: $registerDate,
      status: $status) {
    vehicleLicence
  }
}
`;

const Vehicleinfoadd = () => {
  const role = 'MA';

  const receive_data = {
    1: {
      vehicle_type_id: '101',
      vehicle_type_n: '4 wheels truck',
    },
    2: {
      vehicle_type_id: '102',
      vehicle_type_n: '6 wheels truck',
    },
    3: {
      vehicle_type_id: '103',
      vehicle_type_n: '10 wheels truck',
    },
    4: {
      vehicle_type_id: '201',
      vehicle_type_n: '2 wheel motorcycle',
    },
    5: {
      vehicle_type_id: '202',
      vehicle_type_n: 'adjusted motorcycle',
    },
    6: {
      vehicle_type_id: '301',
      vehicle_type_n: 'boat',
    },
  };

  const router = useRouter();

  const [data, setData] = useState({
    'vehicleLicence': '',
    'vehicleTypeId': '',
    'brand': '',
    'model': '',
    'registerDate': '',
    'status': ''
  });

  useEffect(()=>{
    console.log(data)
  }, [data])

  const [addVehicleInfo] = useMutation(ADD_VEHICLEINFO, {
    variables: {
      'vehicleLicence': data.vehicleLicence,
      'vehicleTypeId': data.vehicleTypeId,
      'brand': data.brand,
      'model': data.model,
      'registerDate': (new Date()).toString(),
      'status': true
    },
    onCompleted: () => {
      router.push('/vehicleinfo')
    }
  })

  const onSubmit = (e) => {
    e.preventDefault();
    addVehicleInfo().catch((err) => alert(err))
  }

  // console.log(addVehicle);

  return (
    <>
    <ClientOnly>
      <aside>
        <SideBar role={role} showDeli="true"/>
      </aside>

      <main className="container mx-auto px-10 lg:ml-64">
        <form action="">
          <Breadcrumb
            first_name="Logistic"
            second_name="Vehicle Info"
            second="/vehicleinfo"
            current="Add Vehicle Info"
          />
          <h1 className="py-6 text-4xl font-bold">Add Vehicle Info</h1>
          <div className="w-full rounded-lg border-2 border-black p-4">
            <div className="space-y-4">
              <div className="grid grid-flow-row grid-cols-2 gap-4 sm:grid-cols-2">
                <TextInput
                  onChange={(e) =>
                    setData({
                      ...data,
                      ['vehicleLicence']: e.target.value,
                    })
                  }
                  placeholder=""
                  label="Vehicle Licence"
                />
                <div>
                  <label
                    htmlFor={'vehicle_type_id'}
                    className="mb-2.5 block text-sm font-medium text-black"
                  >
                    vehicle_type_n
                  </label>
                  <select
                    name={'vehicle_type_id'}
                    id={'vehicle_type_id'}
                    onChange={(e) =>
                      setData({
                        ...data,
                        ['vehicleTypeId']: e.target.value,
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

                <TextInput
                  onChange={(e) =>
                    setData({ ...data, ['brand']: e.target.value })
                  }
                  placeholder=""
                  label="Brand"
                />
                <TextInput
                  onChange={(e) =>
                    setData({ ...data, ['model']: e.target.value })
                  }
                  placeholder=""
                  label="Model"
                />
              </div>
              <div class="grid grid-cols-3 justify-items-center">
                <Link href="/vehicleinfo" className="col-start-2 w-full">
                  <Button type="submit" text="CONFIRM" onClick={onSubmit} />
                </Link>
              </div>
            </div>
          </div>
        </form>
      </main>
    </ClientOnly>
    </>
  );
};

export default Vehicleinfoadd;
