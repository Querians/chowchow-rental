import {
  Sidebar,
  Button,
  Breadcrumb,
  TextInput,
  Dropdown,
  DateInput,
} from 'ui';
import { useState } from 'react';
import Link from 'next/link';

const Invoiceedit = () => {
  const role = 'SA';
  const [editInvoice, setEditInvoice] = useState({
    deadline_date: '',
    payment_type_id: '',
  });

  const receive_data1 = {
    order_id: 'order_id',
    customer_name: 'customer_name',
    order_date: 'order_date',
    tel: 'tel',
    invoice_id: 'invoice_id',
    email: 'email',
    payment_type_n: '2001',
  };
  const productList = {
    1: {
        product_code: '30030',
        product_name: 'Black Chair',
        quantity: 20,
        price: 50,
    },
    2: {
        product_code: '30030',
        product_name: 'Black Chair',
        quantity: 10,
        price: 50,

    },
    3: {
        product_code: '30030',
        product_name: 'Black Chair',
        quantity: 30,
        price: 50,

    },
    4: {
        product_code: '30030',
        product_name: 'Black Chair',
        quantity: 30,
        price: 50,

    },
    5: {
        product_code: '30030',
        product_name: 'Black Chair',
        quantity: 30,
        price: 50,

    },
    6: {
        product_code: '30030',
        product_name: 'Black Chair',
        quantity: 30,
        price: 50,

    },
    7: {
        product_code: '30030',
        product_name: 'Black Chair',
        quantity: 30,
        price: 50,

    },
    8: {
        product_code: '30030',
        product_name: 'Black Chair',
        quantity: 30,
        price: 50,

    },
}

  let subtotal = 0;
  let deliveryFee = 500;
  Object.keys(productList).map(key => {
    subtotal += (productList[key]['price'] * productList[key]['quantity'])
  })

  const cost_total = subtotal + deliveryFee;

  const payment_type = {
    '0004': 'superdeal 2023 halfyear offer',
    '1000': 'One-time purchased',
    '2001': '2times/m.',
    '2002': '2times/2m.',
    '3001': '6times/6m.',
  };
  console.log(editInvoice);
  return (
    <>
      <aside>
        <Sidebar role={role} showFinance={"true"} />
      </aside>

      <main className="container mx-auto px-10 lg:ml-64">
        <Breadcrumb
          first_name="Finance"
          second_name="Invoice"
          second="/invoice"
          current="Edit Invoice"
        />
        <h1 className="py-6 text-4xl font-bold">Edit Invoice</h1>
        <div className="w-full rounded-lg border-2 border-black p-4">
          <div className="space-y-4">
            <div className="grid grid-flow-row grid-cols-2 gap-4 sm:grid-cols-2">
              <TextInput
                type={'readOnly'}
                value={receive_data1.order_id}
                label="Order ID"
              />
              <TextInput
                type={'readOnly'}
                value={receive_data1.customer_name}
                label="Custimer Name"
              />
              <TextInput
                type={'readOnly'}
                value={receive_data1.order_date}
                label="Order Date"
              />
              <TextInput
                type={'readOnly'}
                value={receive_data1.tel}
                label="Tel."
              />
              <div className="col-span-2">
                <div className="p-4">
                  <div class="relative h-96 overflow-x-auto rounded-lg">
                    <table class="w-full text-center text-sm text-gray-500">
                      <thead class="sticky top-0 bg-[#E3C291] text-xs uppercase text-gray-700">
                        <tr>
                          <th scope="col" class="px-6 py-3">
                            NO.
                          </th>
                          <th scope="col" class="px-6 py-3">
                            Product Code
                          </th>
                          <th scope="col" class="px-6 py-3">
                            Product Name
                          </th>
                          <th scope="col" class="px-6 py-3">
                            Quantity
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {Object.keys(productList).map((key) => (
                          <tr class="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                            <th
                              scope="row"
                              class="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                            >
                              {key}
                            </th>
                            <td class="px-6 py-4">
                              {productList[key]['product_code']}
                            </td>
                            <td class="px-6 py-4">
                              {productList[key]['product_name']}
                            </td>
                            <td class="px-6 py-4">
                              {productList[key]['quantity']}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <TextInput
                type={'readOnly'}
                value={receive_data1.invoice_id}
                label="Invoice ID"
              />
              <TextInput
                type={'readOnly'}
                value={receive_data1.email}
                label="Email"
              />
              <DateInput onChange={e=>setEditInvoice({...editInvoice, ['deadline_date']:e.target.value})} value={receive_data1.DateInput} label="Deadline Date" />
              <TextInput type={'readOnly'} value={cost_total} label="Cost Amount" />
              <Dropdown onChange={e=>setEditInvoice({...editInvoice, ['payment_type_id']:e.target.value})} defaultValue={receive_data1.payment_type_n} label={'Payment Type Name'} options={payment_type} />
            </div>
            <div class="grid grid-cols-3 justify-items-center">
              <Link href="/invoice" className="col-start-2 w-full">
                <Button type="submit" text="CONFIRM" />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Invoiceedit;
