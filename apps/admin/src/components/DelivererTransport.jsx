import { useState, useEffect } from 'react';
import ClientOnly from '@/components/ClientOnly';
import { gql, useQuery, useLazyQuery } from '@apollo/client';

const TRANSPORT_QUERY = gql`
query Query {
  allOrderTransport {
    order {
      orderId
      sendingDate
      status {
        statusDef
      }
      returnDate
    }
    timeAssign
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

export const DelivererTransport = () => {

  const [executeSearch, { data, loading, error }] = useLazyQuery(TRANSPORT_QUERY, {pollInterval: 1000});
  // const [productlist, setProductList] = useState('');
  const { data: staff, loading: loadingposition, error: errorposition } = useQuery(STAFF_ROLE);
  const [role, setRole] = useState('');

  useEffect(() => {
    executeSearch()
  }, [executeSearch])

  useEffect(() => {
    console.log(data)
  }, [data])

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

  return <>
    <ClientOnly>
      <div className="w-full rounded-lg border-2 border-black p-4 bg-white">
        <div className="text-2xl font-bold m-0">Order Transport</div>
        <div className="p-4">
            <div class="relative overflow-x-auto overflow-y-auto h-72 rounded-lg">
                <table class="w-full text-sm text-center text-gray-500">
                    <thead class="text-xs text-gray-700 bg-[#E3C291] uppercase sticky top-0">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                              order_id
                            </th>
                            <th scope="col" class="px-6 py-3">
                              timeAssign
                            </th>
                            <th scope="col" class="px-6 py-3">
                              arrive_time
                            </th>
                            <th scope="col" class="px-6 py-3">
                              return_time
                            </th>
                            <th scope="col" class="px-6 py-3">
                              order_status
                            </th>
                            {/* <th scope="col" class="px-6 py-3">
                                Detail
                            </th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.allOrderTransport.map((order) => (
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {order.order.orderId}
                                </th>
                                <td class="px-6 py-4">
                                    {order.timeAssign || '-'}
                                </td>
                                <td class="px-6 py-4">
                                    {order.order.sendingDate || '-'}
                                </td>
                                <td class="px-6 py-4">
                                    {order.order.returnDate || '-'}
                                </td>
                                <td class="px-6 py-4">
                                    {order.order.status.statusDef}
                                </td>
                                {/* <td class="px-6 py-4">
                                    <a href="./transportdetail" class="font-medium text-blue-600 hover:underline">More detail</a>
                                </td> */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
      </div>
      </ClientOnly>
  </>;
};
