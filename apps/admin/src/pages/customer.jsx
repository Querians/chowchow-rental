import {
  Sidebar,
  Breadcrumb,
  SearchBar,
} from 'ui';
import { useState, useEffect } from 'react';
import ClientOnly from '@/components/ClientOnly';
import { gql, useQuery, useLazyQuery } from '@apollo/client';

const CUSTOMER_QUERY = gql`
query Query($firstName: String, $lastName: String) {
  searchCustomerByCustomerName(firstName: $firstName, lastName: $lastName) {
    customerId
    orders {
      orderId
    }
    firstName
    lastName
    email
    tel
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

const Customer = () => {
  const [searchFilterFirst, setSearchFilterFirst] = useState('');
  const [searchFilterLast, setSearchFilterLast] = useState('');
  const [executeSearch, { data, loading, error }] = useLazyQuery(CUSTOMER_QUERY, {pollInterval: 1000});
  // const [productlist, setProductList] = useState('');
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

  const customer_data = {
    1: {
      customer_id: 't1yrw5k5jf1',
      order_id: 'ad1snf8w561',
      customer_name: 'parewa ka1',
      email: 'yo_yaao@gmail.com',
      tel: '0123456789',
    },
    2: {
      customer_id: 't1yrw5k5jf2',
      order_id: 'ad1snf8w562',
      customer_name: 'parewa krub2',
      email: 'yo_yaao@gmail.com',
      tel: '0123456789',
    },
    3: {
      customer_id: 't1yrw5k5jf3',
      order_id: 'ad1snf8w563',
      customer_name: 'parewa kar3',
      email: 'yo_yaao@gmail.com',
      tel: '0123456789',
    },
    4: {
      customer_id: 't1yrw5k5jf4',
      order_id: 'ad1snf8w564',
      customer_name: 'parewa karb4',
      email: 'yo_yaao@gmail.com',
      tel: '0123456789',
    },
    5: {
      customer_id: 't1yrw5k5jf5',
      order_id: 'ad1snf8w565',
      customer_name: 'parewa kub5',
      email: 'yo_yaao@gmail.com',
      tel: '0123456789',
    },
    6: {
      customer_id: 't1yrw5k5jf6',
      order_id: 'ad1snf8w566',
      customer_name: 'parewa kep6',
      email: 'yo_yaao@gmail.com',
      tel: '0123456789',
    },
    7: {
      customer_id: 't1yrw5k5jf7',
      order_id: 'ad1snf8w567',
      customer_name: 'parewa kup7',
      email: 'yo_yaao@gmail.com',
      tel: '0123456789',
    },
    8: {
      customer_id: 't1yrw5k5jf8',
      order_id: 'ad1snf8w568',
      customer_name: 'parewa kab8',
      email: 'yo_yaao@gmail.com',
      tel: '0123456789',
    },
    9: {
      customer_id: 't1yrw5k5jf9',
      order_id: 'ad1snf8w569',
      customer_name: 'parewa kap9',
      email: 'yo_yaao@gmail.com',
      tel: '0123456789',
    },
  };

  return (
    <ClientOnly>
      <aside>
        <Sidebar  role={role}/>
      </aside>
      <main className="container mx-auto space-y-4 px-10 lg:ml-64">
        <Breadcrumb current="Customer" />
        <h1 className="py-6 text-4xl font-bold">Customer</h1>
        <div className="w-full rounded-lg border-2 border-black p-4 bg-white">
          <div className="px-4 pt-2 grid grid-cols-2 gap-x-8">
            <div>
              <h1 className="text-xl font-bold">Customer firstName</h1>
              <SearchBar
              onSubmit={(e) => {
                e.preventDefault(true);
                executeSearch({
                  variables: { firstName: searchFilterFirst, lastName: searchFilterLast }
                })
              }}
              onChange={e=>{setSearchFilterFirst(e.target.value); setSearchFilterLast('')}} placeholder="Search by Customer firstName" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Customer lastName</h1>
              <SearchBar
              onSubmit={(e) => {
                e.preventDefault(true);
                executeSearch({
                  variables: { firstName: searchFilterFirst, lastName: searchFilterLast }
                })
              }}
              onChange={e=>{setSearchFilterFirst('');setSearchFilterLast(e.target.value);}} placeholder="Search by Customer lastName" />
            </div>
          </div>
          <div className="p-4">
            <div class="relative h-96 overflow-x-auto rounded-lg">
              <table class="w-full text-center text-sm text-gray-500">
                <thead class="sticky top-0 bg-[#E3C291] text-xs uppercase text-gray-700">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                    customer_id
                    </th>
                    <th scope="col" class="px-6 py-3">
                    order_id
                    </th>
                    <th scope="col" class="px-6 py-3">
                    customer_name
                    </th>
                    <th scope="col" class="px-6 py-3">
                    email
                    </th>
                    <th scope="col" class="px-6 py-3">
                    tel
                    </th>
                  </tr>
                </thead>
                <tbody>

                  {data && data.searchCustomerByCustomerName?.map((customer) => (
                    customer.orders.map((order) => (
                      <tr class="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                        <th
                          scope="row"
                          class="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                        >
                          {customer.customerId}
                        </th>
                        <td class="px-6 py-4">
                          {order.orderId}
                        </td>
                        <td class="px-6 py-4">
                          { customer.firstName + ' ' + customer.lastName}
                        </td>
                        <td class="px-6 py-4">
                          { customer.email}
                        </td>
                        <td class="px-6 py-4">
                          {customer.tel}
                        </td>
                        </tr>
                    ))
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </ClientOnly>
  );
};

export default Customer;

{/* <ClientOnly>
<aside>
  <Sidebar  role={role}/>
</aside>
<main className="container mx-auto space-y-4 px-10 lg:ml-64">
  <Breadcrumb current="Customer" />
  <h1 className="py-6 text-4xl font-bold">Customer</h1>
  <div className="w-full rounded-lg border-2 border-black p-4">
    <h1 className="text-xl font-bold">Customer ID</h1>
    <div className="px-4 pt-2">
      <SearchBar
       onSubmit={(e) => {
        e.preventDefault(true);
        executeSearch({
          variables: { customerId: searchFilter }
        })
      }}
       onChange={e=>setSearchFilter(e.target.value)} placeholder="Search by Customer ID" />
    </div>
    <div className="p-4">
      <div class="relative h-96 overflow-x-auto rounded-lg">
        <table class="w-full text-center text-sm text-gray-500">
          <thead class="sticky top-0 bg-[#E3C291] text-xs uppercase text-gray-700">
            <tr>
              <th scope="col" class="px-6 py-3">
              customer_id
              </th>
              <th scope="col" class="px-6 py-3">
              order_id
              </th>
              <th scope="col" class="px-6 py-3">
              customer_name
              </th>
              <th scope="col" class="px-6 py-3">
              email
              </th>
              <th scope="col" class="px-6 py-3">
              tel
              </th>
            </tr>
          </thead>
          <tbody>

            {data && data.searchOrderByCustomerId?.map((order) => (
              <tr class="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                <th
                  scope="row"
                  class="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                >
                  {order.customer.customerId}
                </th>
                <td class="px-6 py-4">
                  {order.orderId}
                </td>
                <td class="px-6 py-4">
                  {order.customer.firstName + ' ' + order.customer.lastName}
                </td>
                <td class="px-6 py-4">
                  {order.customer.email}
                </td>
                <td class="px-6 py-4">
                  {order.customer.tel}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</main>
</ClientOnly> */}
