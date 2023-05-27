import { useState } from 'react';
import { Dropdown } from 'ui';

export const CountQuarterVehicleUse = () => {
  const [quarter, setQuarter] = useState(1);
  // lock vehicle type เลยละกันคิดไม่ออก ;-;
  const receive_data = {
    '4 wheels truck':{
      '2023':23,
      '2022':57,
      '2021':250,
    },
    '6 wheels truck':{
      '2023':94,
      '2022':234,
      '2021':123,
    },
    '10 wheels truck':{
      '2023':34,
      '2022':123,
      '2021':234,
    },
  }

  return (
    <>
    <div>
      <div className="text-2xl font-bold py-2 m-0">{"Number of transport’s times used for each type of vehicle"}</div>
      <div className='grid grid-cols-4'>
        <Dropdown options={{1:'Q1', 2:'Q2', 3:'Q3', 4:'Q4'}} label={'Quarter'} placeholder={'Quarter'} defaultValue={1} onChange={e => setQuarter(e.target.value)}/>
      </div>
      <div className="w-full rounded-lg border-2 border-black p-4 mb-10">
        <div className="p-4">
          <div class="relative overflow-x-auto overflow-y-auto h-50 rounded-lg">
            <table class="w-full text-sm text-center text-gray-500">
                <thead class="text-xs text-gray-700 bg-[#E3C291] uppercase sticky top-0">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                          {''}
                        </th>
                        <th scope="col" class="px-6 py-3">
                          2023-Q{quarter}
                        </th>
                        <th scope="col" class="px-6 py-3">
                          2021-Q{quarter}
                        </th>
                        <th scope="col" class="px-6 py-3">
                          2020-Q{quarter}
                        </th>
                    </tr>
                </thead>
                <tbody>
                  {Object.keys(receive_data).map((key) => (
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {key}
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
                  ))}
                </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
