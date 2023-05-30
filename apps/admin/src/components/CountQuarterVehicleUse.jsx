import { useState, useEffect } from 'react';
import { Dropdown } from 'ui';
import { gql, useQuery, useLazyQuery } from '@apollo/client';

const ORDERTRANSPORT_QUERY = gql`
  query AllVehicleType {
    allVehicleType {
      vehicleTypeN
      vehicleInfos {
        orderTransports {
          timeGo
        }
      }
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

export const CountQuarterVehicleUse = () => {
  const [quarter, setQuarter] = useState(1);
  const [executeSearch, { data, loading, error }] =
    useLazyQuery(ORDERTRANSPORT_QUERY, {pollInterval: 1000});
  const {
    data: staff,
    loading: loadingposition,
    error: errorposition,
  } = useQuery(STAFF_ROLE);
  const [role, setRole] = useState('');

  useEffect(() => {
    executeSearch();
  }, [executeSearch]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  useEffect(() => {
    console.log(staff?.StaffProfile[0].position.positionId);
    setRole(staff?.StaffProfile[0].position.positionId);
  }, [staff]);

  if (loadingposition) {
    return <h2>Loading Data...</h2>;
  }

  if (errorposition) {
    console.error(errorposition);
    return <h2>Sorry, {errorposition}...</h2>;
  }

  console.log(staff);

  if (loading) {
    return <h2>Loading Data...</h2>;
  }

  if (error) {
    console.error(error);
    return <h2>Sorry, there&apos;s been an error...</h2>;
  }

  const receive_data = {
    1: {
      vehicle_type: '4 wheel truck',
      2023: 10,
      2022: 7,
      2021: 14,
    },
    2: {
      vehicle_type: '6 wheel truck',
      2023: 14,
      2022: 12,
      2021: 7,
    },
    3: {
      vehicle_type: '10 wheel truck',
      2023: 2,
      2022: 6,
      2021: 12,
    },
    4: {
      vehicle_type: '2 wheel motorcycle',
      2023: 7,
      2022: 2,
      2021: 3,
    },
    5: {
      vehicle_type: 'adjusted motorcycle',
      2023: 7,
      2022: 12,
      2021: 2,
    },
    6: {
      vehicle_type: 'boat',
      2023: 1,
      2022: 2,
      2021: 0,
    },
    7: {
      vehicle_type: 'Helicopter',
      2023: 0,
      2022: 0,
      2021: 0,
    },
  };

  return (
    <>
      <div>
        <div className="mb-10 w-full rounded-lg border-2 border-black p-4 bg-white">
          <div className="text-2xl font-bold">
            {'Number of transport’s times used for each type of vehicle'}
          </div>
          <div className="p-4">
            <div className="grid grid-cols-4 py-2">
              <Dropdown
                options={{ 1: 'Q1', 2: 'Q2', 3: 'Q3', 4: 'Q4' }}
                label={'Quarter'}
                placeholder={'Quarter'}
                defaultValue={1}
                onChange={(e) => setQuarter(e.target.value)}
              />
            </div>
            <div class="h-50 relative overflow-x-auto overflow-y-auto rounded-lg">
              <div>
                <table class="w-full text-center text-sm text-gray-500">
                  <thead class="sticky top-0 bg-[#E3C291] text-xs uppercase text-gray-700">
                    <tr>
                      <th scope="col" class="px-6 py-3">
                        {''}
                      </th>
                      <th scope="col" class="px-6 py-3">
                        2023-Q{quarter}
                      </th>
                      <th scope="col" class="px-6 py-3">
                        2022-Q{quarter}
                      </th>
                      <th scope="col" class="px-6 py-3">
                        2021-Q{quarter}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data && data.allVehicleType?.map((vehicleType) => (
                      <tr class="rounded-t-lg border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                        <td
                          scope="row"
                          class="whitespace-nowrap bg-[#E1E1E1] px-6 py-4 font-medium text-gray-900 dark:text-white"
                        >
                          {vehicleType.vehicleTypeN}
                        </td>
                        <td scope="row" class="px-6 py-4">
                          {
                            vehicleType.vehicleInfos
                              .filter(
                                (vehicle) => vehicle.orderTransports.length > 0,
                              )
                              .map((vehicle)=>{
                                return vehicle.orderTransports.filter((round)=>{
                                  return (
                                        new Date(round.timeGo) >=
                                          new Date(2023, (quarter-1)*3, 1) &&
                                        new Date(round.timeGo) <
                                          new Date(2023, quarter*3, 1)
                                      );
                                }).length
                              })
                              .reduce((acc, cur)=>{
                                return acc + cur
                              }, 0)
                          }
                        </td>
                        <td class="px-6 py-4">
                          {
                            vehicleType.vehicleInfos
                            .filter(
                              (vehicle) => vehicle.orderTransports.length > 0,
                            )
                            .map((vehicle)=>{
                              return vehicle.orderTransports.filter((round)=>{
                                return (
                                      new Date(round.timeGo) >=
                                        new Date(2022, (quarter-1)*3, 1) &&
                                      new Date(round.timeGo) <
                                        new Date(2022, quarter*3, 1)
                                    );
                              }).length
                            })
                            .reduce((acc, cur)=>{
                              return acc + cur
                            }, 0)
                          }
                        </td>
                        <td class="px-6 py-4">
                          {
                             vehicleType.vehicleInfos
                             .filter(
                               (vehicle) => vehicle.orderTransports.length > 0,
                             )
                             .map((vehicle)=>{
                               return vehicle.orderTransports.filter((round)=>{
                                 return (
                                       new Date(round.timeGo) >=
                                         new Date(2021, (quarter-1)*3, 1) &&
                                       new Date(round.timeGo) <
                                         new Date(2021, quarter*3, 1)
                                     );
                               }).length
                             })
                             .reduce((acc, cur)=>{
                               return acc + cur
                             }, 0)
                          }
                        </td>
                      </tr>
                    ))}
                    {/* {Object.keys(receive_data).map((key) => (
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 rounded-t-lg">
                        <td scope="row" class="bg-[#E1E1E1] px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {receive_data[key]['vehicle_type']}
                        </td>
                        <td scope="row" class="px-6 py-4">
                          {receive_data[key]['2023']}
                        </td>
                        <td class="px-6 py-4">
                          {receive_data[key]['2022']}
                        </td>
                        <td class="px-6 py-4">
                          {receive_data[key]['2021']}
                        </td>
                      </tr>
                    ))} */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
