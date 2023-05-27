export const DelivererTransport = () => {

  const receive_data_this_delivery_work_not_done = {
      '1': {
        order_id: 'XXXXXXX',
        arrive_time:'2023-03-01 06:48:17',
        order_status:'logistic in progress',
      },
      '2': {
        order_id: 'XXXXXXX',
        arrive_time:'2023-03-01 06:48:17',
        order_status:'logistic in progress',
      },
      '3': {
        order_id: 'XXXXXXX',
        arrive_time:'2023-03-01 06:48:17',
        order_status:'pack in progress',
      },
      '4': {
        order_id: 'XXXXXXX',
        arrive_time:'2023-03-01 06:48:17',
        order_status:'pack in progress',
      },
  }

  const order_status = {
    110: 'payment waiting',
    120: 'pack waiting',
    130: 'logistic waiting',
    131: 'send waiting',
    132: 'revieve waiting',
    210: 'payment in progress',
    220: 'pack in progress',
    230: 'logistic in progress',
    231: 'send in progress',
    232: 'receive in progress',
    310: 'payment problems',
    320: 'pack problem',
    330: 'logistic problem',
    331: 'receive problem',
    400: 'finish overall',
  }


  return <>
      <h1 className="text-4xl font-bold py-6">Order Transport</h1>
      <div className="w-full rounded-lg border border-2 border-black p-4 mb-10">
        <div className="p-4">
            <div class="relative overflow-x-auto overflow-y-auto h-72 rounded-lg">
                <table class="w-full text-sm text-center text-gray-500">
                    <thead class="text-xs text-gray-700 bg-[#E3C291] uppercase sticky top-0">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                              order_id
                            </th>
                            <th scope="col" class="px-6 py-3">
                              arrive_time
                            </th>
                            <th scope="col" class="px-6 py-3">
                              order_status
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Detail
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(receive_data_this_delivery_work_not_done).map((key) => (
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {receive_data_this_delivery_work_not_done[key]['order_id']}
                                </th>
                                <td class="px-6 py-4">
                                    {receive_data_this_delivery_work_not_done[key]['arrive_time']}
                                </td>
                                <td class="px-6 py-4">
                                    {receive_data_this_delivery_work_not_done[key]['order_status']}
                                </td>
                                <td class="px-6 py-4">
                                    <a href="#" class="font-medium text-blue-600 hover:underline">More detail</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
      </div>
  </>;
};
