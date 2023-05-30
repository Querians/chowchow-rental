import { TextInput, Button, Dropdown } from 'ui';
import { useState } from 'react';
import Link from 'next/link';
import { gql, useQuery, useLazyQuery, useMutation } from '@apollo/client';
import ClientOnly from './ClientOnly';

const TRANSPORT_ADD = gql`
  mutation Mutation($orderId: String!, $timeAssign: String!, $vehicleLicense: String!, $staffId: String!, $isReturn: Boolean!) {
  addOrderTransport(orderId: $orderId, timeAssign: $timeAssign, vehicleLicense: $vehicleLicense, staffId: $staffId, isReturn: $isReturn) {
    timeAssign
  }
}
`;

const QUERYTRANSPORT_ADD = gql`
  query AllOrder {
    allOrder {
      orderId
      sendingDate
      returnDate
    }
  }
`;

const UPDATE_CAR = gql`
mutation Mutation($vehicleLicence: String!, $status: Boolean!) {
  editVehicleStatus(vehicleLicence: $vehicleLicence, status: $status) {
    status
  }
}
`;

const STAFF_ROLE = gql`
  query StaffProfile {
    StaffProfile {
      position {
        positionId
      }
    }
  }
`;

export const AddTransport = () => {

  const { data: order, loading, error } = useQuery(QUERYTRANSPORT_ADD, {pollInterval: 1000});


  // const []

  const [addData, setAddData] = useState({
    order_id: '',
    is_return: false,
    staff_id: '',
    car_licence: '',
  });

  console.log(addData)

  const [executeADD] = useMutation(TRANSPORT_ADD, {
    variables: {
      'orderId': addData.order_id,
      'timeAssign': (new Date()).toString(),
      'vehicleLicense': addData.car_licence,
      'staffId': addData.staff_id,
      'isReturn': Boolean(addData.is_return),
    },
    onCompleted: () => {
      alert('ADD complete');
    },
  });

  const [editVehicleStatus] = useMutation(UPDATE_CAR, {
    variables: {
      'vehicleLicence': addData.car_licence,
      'status' : false
    },
    onCompleted: () => {
      alert('Change Car status complete');
    },
  });


  const onSubmit = (e) => {
    e.preventDefault();
    executeADD().catch((err) => alert(err));
    editVehicleStatus().catch((err) => alert(err))
  }

  const order_data = {
    1: {
      order_id: '0d02a456-b5c7-4377-84c7-41848c84e5c3',
      arrive_date: '2023-04-01 10:30:00',
      return_date: '2023-04-02 10:30:00',
    },
    2: {
      order_id: '13de5908-bb20-4570-9b10-85d59bdd9a99',
      arrive_date: '2023-04-01 10:30:00',
      return_date: '2023-04-02 10:30:00',
    },
    3: {
      order_id: '17331d14-0b99-4d6f-84e4-73e293a58bc1',
      arrive_date: '2023-04-01 10:30:00',
      return_date: '2023-04-02 10:30:00',
    },
  };



  return (
    <>
    <ClientOnly>
      <div>
        <div className="mb-10 w-full rounded-lg border-2 border-black bg-white p-4">
          <div className="m-0 text-2xl font-bold">Add transport</div>
          <div className="p-4">
            <div class="relative h-[50vh] space-y-2 overflow-x-auto overflow-y-auto rounded-lg">
              <table class="w-full overflow-x-auto overflow-y-auto text-center text-sm text-gray-500">
                <thead class="sticky top-0 bg-[#E3C291] text-xs uppercase text-gray-700">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      order_id
                    </th>
                    <th scope="col" class="px-6 py-3">
                      arrive_date
                    </th>
                    <th scope="col" class="px-6 py-3">
                      return_date
                    </th>
                    {/* <th scope="col" class="px-6 py-3">
                      Detail
                    </th> */}
                  </tr>
                </thead>
                <tbody>
                  {order&& order?.allOrder?.map((key) => (
                    <tr class="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                      <td
                        scope="row"
                        class="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                      >
                        {key.orderId}
                      </td>
                      <td scope="row" class="px-6 py-4">
                        {key.sendingDate}
                      </td>
                      <td class="px-6 py-4">
                        {key.returnDate}
                      </td>
                      {/* <td class="px-6 py-4">
                        <a
                          href="./transportdetail"
                          class="font-medium text-blue-600 hover:underline"
                        >
                          More detail
                        </a>
                      </td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

              <form className="pt-10">
                <div className="grid grid-cols-2 gap-x-4">
                  <TextInput
                    onChange={(e) =>
                      setAddData({ ...addData, ['order_id']: e.target.value })
                    }
                    label={'OrderID'}
                  />
                  <Dropdown
                    onChange={(e) =>
                      setAddData({ ...addData, ['is_return']: Number(e.target.value) })
                    }
                    defaultValue={'0'}
                    options={{ 0: 'send', 1: 'return' }}
                    label={'send or return'}
                  />
                  <TextInput
                    onChange={(e) =>
                      setAddData({ ...addData, ['staff_id']: e.target.value })
                    }
                    label={'Staff ID'}
                  />
                  <div className="">
                    <TextInput
                      onChange={(e) =>
                        setAddData({
                          ...addData,
                          ['car_licence']: e.target.value,
                        })
                      }
                      label={'vehicle licence'}
                    />
                  </div>
                  <div className="col-start-2 grid grid-cols-2">
                    <div className="col-start-2">
                      <Button onClick={onSubmit} text={'submit'} type={'submit'} />
                    </div>
                  </div>
                </div>
              </form>
          </div>
        </div>
      </div>
    </ClientOnly>
    </>
  );
};
