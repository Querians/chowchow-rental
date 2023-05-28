import { SearchBar, Sidebar, Button, Breadcrumb } from 'ui';
import { useState } from 'react';
import Link from 'next/link';

const Vehicletype = () => {
  const role='MA'
  const [isShow, setShow] = useState(false);
  const [vehicleTypeID, setVehicleTypeID] = useState(''); // use vehicleTypeID to query data

  const popup = () => {
    setShow(!isShow);
  };
  const drop = () => {
    popup();
    // code for drop row
  };

  const receive_data = {
    1:{
      vehicle_type_id:'001',
      vehicle_type_n:'4 wheels truck',
    },
    2:{
      vehicle_type_id:'002',
      vehicle_type_n:'6 wheels truck',
    },
    3:{
      vehicle_type_id:'003',
      vehicle_type_n:'10 wheels truck',
    },
  }

  return (
    <>
      <aside>
        <Sidebar role={role} showDeli="true" />
      </aside>
      <main className="container mx-auto space-y-4 px-10 pb-8 lg:ml-64">
        <Breadcrumb
          first_name="Delivery"
          first="/logisticAnalyse"
          current="Vehicle Type"
        />
        <h1 className="pb-4 pt-6 text-4xl font-bold">Vehicle Type</h1>
        {isShow && (
          <div
            id="alert-additional-content-2"
            class="mb-4 rounded-lg border border-red-300 bg-red-50 p-4 text-red-800 dark:border-red-800 dark:bg-gray-800 dark:text-red-400"
            role="alert"
          >
            <div class="flex items-center">
              <svg
                aria-hidden="true"
                class="mr-2 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Info</span>
              <h3 class="text-lg font-medium">This is a danger alert</h3>
            </div>
            <div class="mb-4 mt-2 text-sm">
              {
                'Are you sure to delete this row. If not please click "Exit" and'
              }
              {'if you want to delete please click "Delete".'}
            </div>
            <div class="flex">
              <button
                type="button"
                onClick={popup}
                class="mr-2 inline-flex items-center rounded-lg bg-red-800 px-3 py-1.5 text-center text-xs font-medium text-white hover:bg-red-900 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              >
                Exit
              </button>
              <button
                type="button"
                onClick={drop}
                class="rounded-lg border border-red-800 bg-transparent px-3 py-1.5 text-center text-xs font-medium text-red-800 hover:bg-red-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-red-300 dark:border-red-600 dark:text-red-500 dark:hover:bg-red-600 dark:hover:text-white dark:focus:ring-red-800"
                data-dismiss-target="#alert-additional-content-2"
                aria-label="Close"
              >
                Delete
              </button>
            </div>
          </div>
        )}
        <div className="w-full rounded-lg border-2 border-black p-4">
          <h1 className="text-xl font-bold">Vehicle Type ID</h1>
          <div className="px-4 pt-2">
            <SearchBar onChange={e => setVehicleTypeID(e.target.value)} placeholder="Search by Vehicle Type ID" />
          </div>
          <div className="p-4">
            <div class="relative h-96 overflow-x-auto rounded-lg">
              <table class="w-full text-center text-sm text-gray-500">
                <thead class="sticky top-0 bg-[#E3C291] text-xs uppercase text-gray-700">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                    vehicle_type_id
                    </th>
                    <th scope="col" class="px-6 py-3">
                    name
                    </th>

                    {role == 'MA' ? (
                      <th scope="col" class="px-6 py-3">
                        Edit
                      </th>
                    ) : (
                      <></>
                    )}
                    {role == 'MA' ? (
                      <th scope="col" class="px-6 py-3">
                        Delete
                      </th>
                    ) : (
                      <></>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(receive_data).map((key) => (
                    <tr class="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                      <td class="px-6 py-4">
                        {receive_data[key]['vehicle_type_id']}
                      </td>
                      <td class="px-6 py-4">{receive_data[key]['vehicle_type_n']}</td>


                      {role == 'MA' ? (
                        <td class="px-6 py-4">
                          <a
                            href="/vehicletypeedit"
                            class="font-medium text-blue-600 hover:underline"
                          >
                            Edit
                          </a>
                        </td>
                      ) : (
                        <></>
                      )}
                      {role == 'MA' ? (
                        <td class="px-6 py-4">
                          <a
                            class="font-medium text-red-600 hover:underline"
                            onClick={popup}
                          >
                            Delete
                          </a>
                        </td>
                      ) : (
                        <></>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {role == 'MA' ? (
          <div className="grid justify-items-end pb-8">
            <Link href="/vehicletypeadd">
              <Button type="normal" text="Add New Vehicle Type" />
            </Link>
          </div>
        ) : (
          <></>
        )}
      </main>
    </>
  );
};

export default Vehicletype;
