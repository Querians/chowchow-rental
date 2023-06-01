import { useState, useEffect } from 'react';
import { Sidebar, Button, Breadcrumb, SearchBar } from 'ui';
import Link from 'next/link';
import { gql, useQuery, useLazyQuery } from '@apollo/client';
import { SideBar } from '@/components/SideBar';
import ClientOnly from '@/components/ClientOnly';

const ITEM_QUERY = gql`
  query Query {
  allPaymentType {
    interest
    paymentTypeId
    paymentTypeName
    times
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


const PaymentType = () => {


  const { data: staff, loading: loadingposition, error: errorposition } = useQuery(STAFF_ROLE);
  const { data, loading, error } = useQuery(ITEM_QUERY, {pollInterval: 1000});
  const [role, setRole] = useState('');

  useEffect(() => {
    console.log(staff?.StaffProfile[0].position.positionId);
    setRole(staff?.StaffProfile[0].position.positionId);
  }, [staff])


  const [isShow, setShow] = useState(false);
  const popup = () => {
      setShow(!isShow);
  };
  const drop = () => {
      popup();
      // code for drop row
  }


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

  console.log(data)

    const paymentTypeList = {
        1: {
            paymentTypeId: '0004',
            paymentTypeName: 'superdeal 2023 halfyear offer',
            interest: '1.2',
            times: 2,
        },
        2: {
            paymentTypeId: '1000',
            paymentTypeName: 'One-time purchased',
            interest: '1.2',
            times: 2,
        },
    };
    const paymentAnalyse = {
        1: {
            paymentTypeId: '0004',
            paymentTypeName: 'superdeal 2023 halfyear offer',
            interest: 0.05,
            times: 2
        },
        2: {
            paymentTypeId: '0004',
            paymentTypeName: 'superdeal 2023 halfyear offer',
            interest: 0.05,
            times: 2
        },
        3: {
            paymentTypeId: '0004',
            paymentTypeName: 'superdeal 2023 halfyear offer',
            interest: 0.05,
            times: 2
        },
    }

    return (
        <>
        <ClientOnly>
            <aside>
                <SideBar role={role} showFinance="true" />
            </aside>

            <main className="container mx-auto lg:ml-64 px-10 space-y-4">
                <Breadcrumb first_name="Finance" current="Payment Type" />
                <h1 className="text-4xl font-bold py-6">Payment Type</h1>

                {isShow && (
                    <div id="alert-additional-content-2" class="p-4 mb-4 text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
                        <div class="flex items-center">
                            <svg aria-hidden="true" class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                            <span class="sr-only">Info</span>
                            <h3 class="text-lg font-medium">This is a danger alert</h3>
                        </div>
                        <div class="mt-2 mb-4 text-sm">
                            Are you sure to delete this row. If not please click "Exit" and if you want to delete please click "Delete".
                        </div>
                        <div class="flex">
                            <button type="button" onClick={popup} class="text-white bg-red-800 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                Exit
                            </button>
                            <button type="button" onClick={drop} class="text-red-800 bg-transparent border border-red-800 hover:bg-red-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-red-600 dark:border-red-600 dark:text-red-500 dark:hover:text-white dark:focus:ring-red-800" data-dismiss-target="#alert-additional-content-2" aria-label="Close">
                                Delete
                            </button>
                        </div>
                    </div>
                )}
                <div className="w-full rounded-lg border-2 border-black p-4 bg-white">
                    <h1 className="text-xl font-bold">Payment Type</h1>
                    <div className="p-4">
                        <div class="relative overflow-x-auto overflow-y-auto h-64 rounded-lg">
                            <table class="w-full text-sm text-center text-gray-500">
                                <thead class="text-xs text-gray-700 bg-[#E3C291] uppercase sticky top-0">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            Payment Type ID
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Payment Type Name
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Interest
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Times
                                        </th>
                                        {/* {role == 'SA' || 'DEV' ? (
                                            <th scope="col" class="px-6 py-3">
                                                Edit
                                            </th>) : (
                                            <></>
                                        )}
                                        {role == 'SA' || 'DEV'? (
                                            <th scope="col" class="px-6 py-3">
                                                Delete
                                            </th>) : (
                                            <></>
                                        )} */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {data && data.allPaymentType?.map((pay) => (
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {pay['paymentTypeId']}
                                            </th>
                                            <td class="px-6 py-4">
                                                {pay['paymentTypeName']}
                                            </td>
                                            <td class="px-6 py-4">
                                                {pay['interest']}
                                            </td>
                                            <td class="px-6 py-4">
                                                {pay['times']}
                                            </td>
                                            {/* {role == 'SA' || 'DEV'? (
                                                <td class="px-6 py-4">
                                                    <a href="/editpaymenttype" class="font-medium text-blue-600 hover:underline">Edit</a>
                                                </td>) : (
                                                <></>
                                            )}
                                            {role == 'SA' || 'DEV'? (
                                                <td class="px-6 py-4">
                                                    <a class="font-medium text-red-600 hover:underline" onClick={popup}>Delete</a>
                                                </td>) : (
                                                <></>
                                            )} */}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {role == 'SA' || 'DEV' ? (
                    <div className='grid justify-items-end pb-8'>
                        <Link href="/paymenttypeform">
                            <Button type="normal" text="Add New Payment Type" />
                        </Link>
                    </div>) : (
                    <></>
                )}
            </main >
        </ClientOnly>
        </>
    );
};

export default PaymentType;
