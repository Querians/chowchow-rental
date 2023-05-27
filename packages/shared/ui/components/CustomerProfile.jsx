import { useState } from 'react';
import { TextInput, DateInput, PhoneInput } from 'ui';
import Image from 'next/image';
import Link from 'next/link';

export const CustomerProfile = () => {
  // ดึงมา
  const oldData = {
    Firstname: 'nontawat',
    Lastname: 'kunla',
    DOB: '2003-05-28',
    Tel: '0123456789',
  };

  // ส่งคืน
  const [data, setData] = useState(oldData);

  const [isEdit, setisEdit] = useState(false);

  // ดึงมา
  const myOrder = {
    1: {
      order_id: 'XXXXXXXXXXX',
      total_amount: '230000',
      status: 'รอคืนสินค้า',
    },
    2: {
      order_id: 'YYYYYYYYYYY',
      total_amount: '12000',
      status: 'รอคืนสินค้า',
    },
    3: {
      order_id: 'ZZZZZZZZZZZ',
      total_amount: '1000',
      status: 'คืนสินค้าเรียบร้อย',
    },
  };

  // idk how
  const INVOICES_FOR_THIS_ORDER_ID_PATH = '#';

  console.log(data);
  return (
    <>
      <div>
        <div>
          <div className="mb-4 text-4xl font-bold">Customer Profile</div>
          <div className="mb-4 w-full rounded-md border-2 border-black px-8 py-4">
            <div className="flex justify-between">
              <div className="text-2xl font-bold">My Profile</div>
              <div
                className="flex items-center gap-2"
                onClick={() => setisEdit(!isEdit)}
              >
                <span className="font-bold underline">Edit</span>
                <Image src="/edit.svg" width={20} height={20} alt="edit icon" />
              </div>
            </div>
            <div className="grid grid-cols-6 items-center justify-items-start gap-x-4">
              <div className="">Firstname:</div>
              <div className="col-span-2 w-full">
                <TextInput
                  defaultValue={oldData.Firstname}
                  type={isEdit ? '' : 'readOnly'}
                  onChange={(e) =>
                    setData({ ...data, ['Firstname']: e.target.value })
                  }
                />
              </div>
              <div className="">Lastname:</div>
              <div className="col-span-2 w-full">
                <TextInput
                  defaultValue={oldData.Lastname}
                  type={isEdit ? '' : 'readOnly'}
                  onChange={(e) =>
                    setData({ ...data, ['Lastname']: e.target.value })
                  }
                />
              </div>
              <div className="">Date of Birth:</div>
              <div className="col-span-2 w-full">
                <DateInput
                  defaultValue={oldData.DOB}
                  type={isEdit ? '' : 'readOnly'}
                  onChange={(e) => setData({ ...data, ['DOB']: e.target.value })}
                />
              </div>
              <div className="">Tel.:</div>
              <div className="col-span-2 w-full">
                <PhoneInput
                  label=""
                  defaultValue={oldData.Tel}
                  type={isEdit ? '' : 'readOnly'}
                  onChange={(e) => setData({ ...data, ['Tel']: e.target.value })}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full rounded-md border-2 border-black px-8 py-4">
          <div className="text-2xl font-bold">My Order Status</div>
          <div className="p-4">
            <div class="relative overflow-x-auto rounded-lg">
              <table class="w-full text-center text-sm text-gray-500">
                <thead class="bg-[#E3C291] text-xs text-gray-700">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      Order ID
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Total Amount
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className=''>
                  {Object.keys(myOrder).map((key) => (
                    <tr key={key} class="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                      <th
                        scope="row"
                        class="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white "
                      >
                        <Link href={INVOICES_FOR_THIS_ORDER_ID_PATH}>
                          {myOrder[key]['order_id']}
                        </Link>
                      </th>
                      <td class="px-6 py-4">{myOrder[key]['total_amount']}</td>
                      <td class="px-6 py-4">{myOrder[key]['status']}</td>
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
