import { useState, useEffect } from 'react';
import { gql, useQuery, useLazyQuery } from '@apollo/client';
import { Sidebar, Button, Breadcrumb, SearchBar } from 'ui';
import Link from 'next/link';
import ClientOnly from '@/components/ClientOnly';

const ITEM_QUERY = gql`
  query Query {
    allBilling {
      billingId
      firstName
      lastName
      tel
      paidAmount
      billTimestamp
      paymentSlipUrl
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


const Billing = () => {

  const { data: staff, loading: loadingposition, error: errorposition } = useQuery(STAFF_ROLE);
  const { data, loading, error } = useQuery(ITEM_QUERY, {pollInterval: 1000});
  const [role, setRole] = useState('');

  useEffect(() => {
    console.log(staff?.StaffProfile[0].position.positionId);
    setRole(staff?.StaffProfile[0].position.positionId);
  }, [staff])

    // const role = "SA"
    const billingList = {
        1: {
            billing_id: 'ad1snf8w56s',
            payer: 'Zack Clatonr',
            tel: '0449205452',
            paid_amount: 1234.56,
            bill_timestamp: '2023-01-23 08:44:21',
            payment_slip_url: 'https://www.ikea.com/us/en/images/products/lerhamn-chair-black-brown-vittaryd-beige__0728160_pe736117_s5.jpg?f=s',
        },
        2: {
            billing_id: 'ad1snf8w56s',
            payer: 'Zack Clatonr',
            tel: '0449205452',
            paid_amount: 1234.56,
            bill_timestamp: '2023-01-23 08:44:21',
            payment_slip_url: "https://www.ikea.com/us/en/images/products/lerhamn-chair-black-brown-vittaryd-beige__0728160_pe736117_s5.jpg?f=s",
        },
        3: {
            billing_id: 'ad1snf8w56s',
            payer: 'Zack Clatonr',
            tel: '0449205452',
            paid_amount: 1234.56,
            bill_timestamp: '2023-01-23 08:44:21',
            payment_slip_url: 'https://www.ikea.com/us/en/images/products/lerhamn-chair-black-brown-vittaryd-beige__0728160_pe736117_s5.jpg?f=s',
        },
        4: {
            billing_id: 'ad1snf8w56s',
            payer: 'Zack Clatonr',
            tel: '0449205452',
            paid_amount: 1234.56,
            bill_timestamp: '2023-01-23 08:44:21',
            payment_slip_url: "https://www.ikea.com/us/en/images/products/lerhamn-chair-black-brown-vittaryd-beige__0728160_pe736117_s5.jpg?f=s",
        },
    };
    const [isShow, setShow] = useState(false);
    const popup = () => {
        setShow(!isShow);
    };
    const drop = () => {
        popup();
        // code for drop row
    }

    return (
        <>
        <ClientOnly>
            <aside>
                <Sidebar role={role} showFinance="true" />
            </aside>

            <main className="container mx-auto lg:ml-64 px-10 space-y-4">
                <Breadcrumb first_name="Finance" current="Billing" />
                <h1 className="text-4xl font-bold py-6">Billing</h1>
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
                    <h1 className="text-xl font-bold">Billing</h1>
                    <div className="p-4">
                    <div class="relative overflow-x-auto rounded-lg h-96">
                            <table class="w-full text-sm text-center text-gray-500 ">
                                <thead class="text-xs text-gray-700 bg-[#E3C291] uppercase sticky top-0">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            Billing ID
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Payer
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Tel.
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Paid Amount
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Bill Timestamp
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Payment Slip URL
                                        </th>
                                        {/* {role == 'SA' || 'DEV' ? (
                                            <th scope="col" class="px-6 py-3">
                                                Edit
                                            </th>) : (
                                            <></>
                                        )}
                                        {role == 'SA' || 'DEV' ? (
                                            <th scope="col" class="px-6 py-3">
                                                Delete
                                            </th>) : (
                                            <></>
                                        )} */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {data && data.allBilling?.map((key) => (
                                        <tr class="bg-white border-b ">
                                            <th scope="row" class="px-6 py-4 font-medium ">
                                                {key['billingId']}
                                            </th>
                                            <td class="px-6 py-4">
                                                {key['firstName'] + ' ' + key['lastName']}
                                            </td>
                                            <td class="px-6 py-4">
                                                {key['tel']}
                                            </td>
                                            <td class="px-6 py-4">
                                                {key['paidAmount']}
                                            </td>
                                            <td class="px-6 py-4">
                                                {key['billTimestamp']}
                                            </td>
                                            <td class="px-6 py-4">
                                                {key['paymentSlipUrl']}
                                            </td>
                                            {/* {role == 'SA' || 'DEV' ? (
                                                <td class="px-6 py-4">
                                                    <a href="/editbilling" class="font-medium text-blue-600 hover:underline">Edit</a>
                                                </td>) : (
                                                <></>
                                            )}
                                            {role == 'SA' || 'DEV' ? (
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
            </main >
        </ClientOnly>
        </>
    );
};

export default Billing;
