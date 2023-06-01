import { Sidebar, Button, Breadcrumb, TextInput, Dropdown } from 'ui';
import Link from 'next/link';

import ClientOnly from '@/components/ClientOnly';
import { gql, useMutation } from '@apollo/client';
import { SideBar } from '@/components/SideBar';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const ADD_VEHICLETYPE = gql`
  mutation Mutation(
    $vehicleTypeId: String!,
     $vehicleTypeN: String!) {
      addVehicleType(
        vehicleTypeId: $vehicleTypeId,
        vehicleTypeN: $vehicleTypeN) {
      vehicleTypeId
    }
  }
`;

const Vehicletypeadd = () => {
  const router = useRouter();

  const [data, setData] = useState({
    vehicleTypeId: '',
    vehicleTypeN: '',
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  const [addVehicleType] = useMutation(ADD_VEHICLETYPE, {
    variables: {
      vehicleTypeId: data.vehicleTypeId,
      vehicleTypeN: data.vehicleTypeN,
    },
    onCompleted: () => {
      router.push('/vehicletype');
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();
    addVehicleType().catch((err) => alert(err));
  };

  return (
    <>
      <ClientOnly>
        <aside>
          <SideBar role={'MA'} showDeli="true" />
        </aside>

        <main className="container mx-auto px-10 lg:ml-64">
          <Breadcrumb
            first_name="Logistic"
            second_name="Vehicle Type"
            second="/vehicletype"
            current="Add Vehicle Type"
          />
          <h1 className="py-6 text-4xl font-bold">Add Vehicle Type</h1>
          <div className="w-full rounded-lg border-2 border-black p-4 bg-white">
            <div className="space-y-4">
              <div className="grid grid-flow-row grid-cols-2 gap-4 sm:grid-cols-2">
                <TextInput
                  onChange={(e) =>
                    setData({ ...data, ['vehicleTypeId']: e.target.value })
                  }
                  placeholder=""
                  label="Vehicle Type ID"
                />
                <TextInput
                  onChange={(e) =>
                    setData({ ...data, ['vehicleTypeN']: e.target.value })
                  }
                  placeholder=""
                  label="Name"
                />
              </div>
              <div class="grid grid-cols-3 justify-items-center">
                <Link href="/vehicletype" className="col-start-2 w-full">
                  <Button type="submit" text="CONFIRM" onClick={onSubmit} />
                </Link>
              </div>
            </div>
          </div>
        </main>
      </ClientOnly>
    </>
  );
};

export default Vehicletypeadd;
