import {
  Sidebar,
  Breadcrumb,
  SearchBar,
} from 'ui';
import { useState } from 'react';

const Customer = () => {
  const [customerID, setCustomerID] = useState(''); // use customerID to query data
  const role = 'MA';

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
    <>
      <aside>
        <Sidebar role={role}/>
      </aside>
      <main className="container mx-auto space-y-4 px-10 lg:ml-64">
        <Breadcrumb current="Customer" />
        <h1 className="py-6 text-4xl font-bold">Customer</h1>
        <div className="w-full rounded-lg border-2 border-black p-4">
          <h1 className="text-xl font-bold">Customer ID</h1>
          <div className="px-4 pt-2">
            <SearchBar onChange={e=>setCustomerID(e.target.value)} placeholder="Search by Customer ID" />
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
                  {Object.keys(customer_data).map((key) => (
                    <tr class="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                      <th
                        scope="row"
                        class="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                      >
                        {customer_data[key]['customer_id']}
                      </th>
                      <td class="px-6 py-4">
                        {customer_data[key]['order_id']}
                      </td>
                      <td class="px-6 py-4">
                        {customer_data[key]['customer_name']}
                      </td>
                      <td class="px-6 py-4">
                        {customer_data[key]['email']}
                      </td>
                      <td class="px-6 py-4">
                        {customer_data[key]['tel']}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Customer;
