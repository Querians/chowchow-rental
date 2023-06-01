import { useEffect, useState } from 'react';
import { TextInput, DateInput, PhoneInput } from 'ui';
import Image from 'next/image';
import Link from 'next/link';
import { useQuery, gql } from '@apollo/client';

export const CustomerProfile = () => {

  const PROFILE_QUERY = gql`
    query Query {
      Profile {
        customerId
        firstName
        lastName
        dob
        tel
        orders {
          orderId
          totalPrice
          status {
            statusDef
          }
        }
      }
  }
`
  const { data:profile, loading, error } = useQuery(PROFILE_QUERY);

  // ส่งคืน
  const [data, setData] = useState("");

  useEffect(()=>{
    // setData(profile?.Profile[0])
    setData({...profile?.Profile[0], ['dob']: profile?.Profile[0].dob.split("T")[0]  });
    // setData({ ...data, ['dob']: new Date(['dob']) })
  }, [profile])

  useEffect(()=>{
    console.log(data);
  }, [data])

  const [isEdit, setisEdit] = useState(false);

  const INVOICES_FOR_THIS_ORDER_ID_PATH = '/invoice';

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
                  value={data?.firstName}
                  type={isEdit ? '' : 'readOnly'}
                  onChange={(e) =>
                    setData({ ...data, ['firstName']: e.target.value })
                  }
                />
              </div>
              <div className="">Lastname:</div>
              <div className="col-span-2 w-full">
                <TextInput
                  value={data?.lastName}
                  type={isEdit ? '' : 'readOnly'}
                  onChange={(e) => setData({ ...data, ['lastname']: e.target.value })}
                />
              </div>
              <div className="">Date of Birth:</div>
              <div className="col-span-2 w-full">
                <DateInput
                  value={data?.dob}
                  type={isEdit ? '' : 'readOnly'}
                  onChange={(e) => setData({ ...data, ['dob']: e.target.value })}
                />
              </div>
              <div className="">Tel.:</div>
              <div className="col-span-2 w-full">
                <PhoneInput
                  label=""
                  value={data?.tel}
                  type={isEdit ? '' : 'readOnly'}
                  onChange={(e) => setData({ ...data, ['tel']: e.target.value })}
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
                  {data?.orders?.map((order, index) => (
                    <tr key={order} class="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                      <th
                        scope="row"
                        class="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white "
                      >
                        <Link href='/invoice' >
                          {order['orderId']}
                        </Link>
                      </th>
                      <td class="px-6 py-4">{order['totalPrice']}</td>
                      <td class="px-6 py-4">{order.status['statusDef']}</td>
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
