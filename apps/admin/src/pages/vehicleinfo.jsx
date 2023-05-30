import { SearchBar, Sidebar, Button, Breadcrumb } from 'ui';
import { useState, useEffect } from 'react';
import ClientOnly from '@/components/ClientOnly';
import { gql, useQuery, useLazyQuery } from '@apollo/client';
import Link from 'next/link';
import { SideBar } from '@/components/SideBar';

const VEHICLE_INFO = gql`
query SearchVehicleInfoVehicleLicence($vehicleLicence: String) {
  searchVehicleInfoVehicleLicence(vehicleLicence: $vehicleLicence) {
    vehicleLicence
    vehicleType {
      vehicleTypeN
    }
    brand
    model
  }
}
  `

const STAFF_ROLE = gql`
query StaffProfile {
StaffProfile {
  position {
    positionId
  }
}
}
`

const Vehicleinfo = () => {
  const [isShow, setShow] = useState(false);

  const [searchFilter, setSearchFilter] = useState('');
  const [executeSearch, { data, loading, error }] = useLazyQuery(VEHICLE_INFO, {pollInterval: 1000});

  const { data: staff, loading: loadingposition, error: errorposition } = useQuery(STAFF_ROLE);
  const [role, setRole] = useState('');

  useEffect(() => {
    executeSearch()
  }, [executeSearch])

  useEffect(() => {
    console.log(data)
  }, [data])

  useEffect(() => {
    console.log(staff?.StaffProfile[0].position.positionId);
    setRole(staff?.StaffProfile[0].position.positionId);
  }, [staff])

  if (loadingposition) {
    return (
      <h2>Loading Data...</h2>
    );
  };

  if (errorposition) {
    console.error(errorposition);
    return (
      <h2>Sorry, {errorposition}...</h2>
    );
  };

  console.log(staff)

  if (loading) {
    return (
      <h2>Loading Data...</h2>
    );
  };

  if (error) {
    console.error(error);
    return (
      <h2>Sorry, there&apos;s been an error...</h2>
    );
  };

  const popup = () => {
    setShow(!isShow);
  };
  const drop = () => {
    popup();
    // code for drop row
  };

  return (
    <>
      <aside>
        <SideBar role={role} showDeli="true" />
      </aside>
      <main className="container mx-auto space-y-4 px-10 pb-8 lg:ml-64">
        <Breadcrumb
          first_name="Logistic"
          current="Vehicle Information"
        />
        <h1 className="pb-4 pt-6 text-4xl font-bold">Vehicle Information</h1>
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
        <div className="w-full rounded-lg border-2 border-black p-4 bg-white">
          <h1 className="text-xl font-bold">Vehicle Licence</h1>
          <span className="text-red-300 pl-4">Please Input Whole Licence</span>
          <div className="px-4 pt-2">
            <SearchBar
            onSubmit={(e) => {
              e.preventDefault(true);
              executeSearch({
                variables: { vehicleLicence: searchFilter }
              })
            }}
            onChange={e => setSearchFilter(e.target.value)} placeholder="Search by Vehicle Licence" />
          </div>
          <div className="p-4">
            <div class="relative h-96 overflow-x-auto rounded-lg">
              <table class="w-full text-center text-sm text-gray-500">
                <thead class="sticky top-0 bg-[#E3C291] text-xs uppercase text-gray-700">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      vehicle_licence
                    </th>
                    <th scope="col" class="px-6 py-3">
                      vehicle_type_name
                    </th>
                    <th scope="col" class="px-6 py-3">
                      brand
                    </th>
                    <th scope="col" class="px-6 py-3">
                      model
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
                  {data && data.searchVehicleInfoVehicleLicence?.map((vehicle) => (
                    <tr class="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                      <th
                        scope="row"
                        class="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                      >
                        {vehicle.vehicleLicence}
                      </th>
                      <td class="px-6 py-4">
                        {vehicle.vehicleType.vehicleTypeN}
                      </td>
                      <td class="px-6 py-4">
                        {vehicle.brand}
                      </td>
                      <td class="px-6 py-4">
                        {vehicle.model}
                      </td>

                      {role == 'MA' ? (
                        <td class="px-6 py-4">
                          <a
                            href="/vehicleinfoedit"
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
            <Link href="/vehicleinfoadd">
              <Button type="normal" text="Add New Vehicle Info" />
            </Link>
          </div>
        ) : (
          <></>
        )}
      </main>
    </>
  );
};

export default Vehicleinfo;
