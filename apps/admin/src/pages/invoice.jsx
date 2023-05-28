import { SearchBar, Sidebar, Button, Breadcrumb } from 'ui';
import { useState } from 'react';
import Link from 'next/link';

const Invoice = () => {
  const role = 'SA';
  const [invoiceId, setInvoiceID] = useState('') // use invoiceId to query data
  const [orderId, setOrderID] = useState('') // use orderId to query data
  console.log('invoice',invoiceId)
  console.log('orderid',orderId)
  const invoiceList = {
    1: {
      invoice_id: 'zgfzgfsgs56',
      order_id: '11111',
      customer_name: 'Son Hung',
      status_code: '400',
      deadline_data: '12-12-12 00:00:00',
    },
    2: {
      invoice_id: 'zgfzgfsgs56',
      order_id: '11111',
      customer_name: 'Son Hung',
      status_code: '400',
      deadline_data: '12-12-12 00:00:00',
    },
    3: {
      invoice_id: 'zgfzgfsgs56',
      order_id: '11111',
      customer_name: 'Son Hung',
      status_code: '400',
      deadline_data: '12-12-12 00:00:00',
    },
    4: {
      invoice_id: 'zgfzgfsgs56',
      order_id: '11111',
      customer_name: 'Son Hung',
      status_code: '400',
      deadline_data: '12-12-12 00:00:00',
    },
    4: {
      invoice_id: 'zgfzgfsgs56',
      order_id: '11111',
      customer_name: 'Son Hung',
      status_code: '400',
      deadline_data: '12-12-12 00:00:00',
    },
    5: {
      invoice_id: 'zgfzgfsgs56',
      order_id: '11111',
      customer_name: 'Son Hung',
      status_code: '400',
      deadline_data: '12-12-12 00:00:00',
    },
    6: {
      invoice_id: 'zgfzgfsgs56',
      order_id: '11111',
      customer_name: 'Son Hung',
      status_code: '400',
      deadline_data: '12-12-12 00:00:00',
    },
    7: {
      invoice_id: 'zgfzgfsgs56',
      order_id: '11111',
      customer_name: 'Son Hung',
      status_code: '400',
      deadline_data: '12-12-12 00:00:00',
    },
    8: {
      invoice_id: 'zgfzgfsgs56',
      order_id: '11111',
      customer_name: 'Son Hung',
      status_code: '400',
      deadline_data: '12-12-12 00:00:00',
    },
  };
  const [isShow, setShow] = useState(false);
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
        <Sidebar role={role} showFinance={"true"} />
      </aside>
      <main className="container mx-auto space-y-4 px-10 lg:ml-64">
        <Breadcrumb
          first_name="Finance"
          current="Invoice"
        />
        <h1 className="py-6 text-4xl font-bold">Invoice</h1>
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
              {'Are you sure to delete this row. If not please click "Exit" and if'}
              {'you want to delete please click "Delete".'}
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
          <div className='grid grid-cols-2'>
            <div>
              <h1 className="text-xl font-bold">Invoice ID</h1>
              <div className="px-4 pt-2">
                <SearchBar onChange={e=>setInvoiceID(e.target.value)} placeholder="Search by Invoice ID" />
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold">Order ID</h1>
              <div className="px-4 pt-2">
                <SearchBar onChange={e=>setOrderID(e.target.value)} placeholder="Search by Order ID" />
              </div>
            </div>
          </div>
          <div className="p-4">
            <div class="relative h-96 overflow-x-auto rounded-lg">
              <table class="w-full text-center text-sm text-gray-500">
                <thead class="sticky top-0 bg-[#E3C291] text-xs uppercase text-gray-700">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      invoice id
                    </th>
                    <th scope="col" class="px-6 py-3">
                      order id
                    </th>
                    <th scope="col" class="px-6 py-3">
                      customer name
                    </th>
                    <th scope="col" class="px-6 py-3">
                      status code
                    </th>
                    <th scope="col" class="px-6 py-3">
                      deadline date
                    </th>
                    {role == 'SA' ? (
                      <th scope="col" class="px-6 py-3">
                        Edit
                      </th>
                    ) : (
                      <></>
                    )}
                    {role == 'SA' ? (
                      <th scope="col" class="px-6 py-3">
                        Delete
                      </th>
                    ) : (
                      <></>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(invoiceList).map((key) => (
                    <tr class="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                      <th
                        scope="row"
                        class="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                      >
                        {invoiceList[key]['invoice_id']}
                      </th>
                      <td class="px-6 py-4">
                        {invoiceList[key]['order_id']}
                      </td>
                      <td class="px-6 py-4">
                        {invoiceList[key]['customer_name']}
                      </td>
                      <td class="px-6 py-4">
                        {invoiceList[key]['status_code']}
                      </td>
                      <td class="px-6 py-4">
                        {invoiceList[key]['deadline_data']}
                      </td>
                      {role == 'SA' ? (
                        <td class="px-6 py-4">
                          <a
                            href="/invoiceedit"
                            class="font-medium text-blue-600 hover:underline"
                          >
                            Edit
                          </a>
                        </td>
                      ) : (
                        <></>
                      )}
                      {role == 'SA' ? (
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
      </main>
    </>
  );
};

export default Invoice;
