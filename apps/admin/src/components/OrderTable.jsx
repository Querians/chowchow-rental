import { gql, useQuery, useLazyQuery } from '@apollo/client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { SearchBar, Button } from 'ui';

const ORDER_QUERY = gql`
    query SearchOrderByStatusCode($statusCode: Int) {
      searchOrderByStatusCode(statusCode: $statusCode) {
      orderId
      orderDate
      status {
        statusDef
        statusCode
      }
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

export const OrderTable = ({ popup }) => {

  const [searchFilter, setSearchFilter] = useState(0);
  const [executeSearch, { data, loading, error }] = useLazyQuery(ORDER_QUERY, {pollInterval: 1000});
  // const [productlist, setProductList] = useState('');
  const { data: staff, loading: loadingposition, error: errorposition } = useQuery(STAFF_ROLE);
  const [role, setRole] = useState('');

  useEffect(() => {
    // console.log(staff?.StaffProfile[0].position.positionId);
    setRole(staff?.StaffProfile[0].position.positionId);
  }, [staff])

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

  return (
    <div className='space-y-4'>
      <div className="w-full rounded-lg border-2 border-black p-4 bg-white">
        <h1 className="text-xl font-bold">All Order Receiving</h1>
        <span className="text-red-300 pl-4">Please input status code (number)</span>
        <div className="pt-2 px-4">
          <SearchBar
            placeholder="Search Order by Status Code"
            onSubmit={(e) => {
              e.preventDefault(true);
              executeSearch({
                variables: { statusCode: Number(searchFilter) }
              })
            }}
            onChange={(e) => {
              setSearchFilter(e.target.value)
              console.log(e.target.value)
            }}
          />
        </div>
        <div className="p-4">
          <div class="relative overflow-x-auto rounded-lg h-60">
            <table class="w-full text-sm text-center text-gray-500 ">
              <thead class="text-xs text-gray-700 bg-[#E3C291] uppercase sticky top-0">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Order ID
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Order Status
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Order Date
                  </th>
                  {role == 'CA' ||
                   role == 'SA' ||
                   role == 'INV' ||
                   role == 'DL' ||
                   role == 'DEV'? (
                    <th scope="col" class="px-6 py-3">
                      Update Status
                    </th>) : (
                    <></>
                  )}
                  {role == 'INV' ||
                   role == 'DEV'? (
                    <th scope="col" class="px-6 py-3">
                      Detail
                    </th>) : (
                    <></>
                  )}
                </tr>
              </thead>
              <tbody>
                {data && data.searchOrderByStatusCode?.map((order) => (
                  <tr class="bg-white border-b">
                    <th scope="row" class="px-6 py-4 font-normal">
                      {order['orderId']}
                    </th>
                    <td class="px-6 py-4">
                      {order['status']['statusDef']}
                    </td>
                    <td class="px-6 py-4">
                      {order['orderDate']}
                    </td>
                    {role == 'CA' ||
                     role == 'SA' ||
                     role == 'INV' ||
                     role == 'DL' ||
                     role == 'DEV'? (
                      <td class="px-6 py-4">
                        <Link href="/update/orderstatus/[...dt]"  as={`/update/orderstatus/${order.status.statusCode}/${order.orderId}`} class="font-medium text-blue-600 hover:underline">Update</Link>
                      </td>) : (
                      <></>
                    )}
                    {role == 'INV' ||
                     role == 'DEV'? (
                      <td class="px-6 py-4">
                        <Link
                          href="/ordertracking/[orderId]"
                          as={`/ordertracking/${order.orderId}`}
                          class="font-medium text-blue-600 hover:underline">Detail</Link>
                      </td>) : (
                      <></>
                    )}


                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

