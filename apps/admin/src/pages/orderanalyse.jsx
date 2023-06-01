import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Sidebar, Breadcrumb, Button, SearchBar } from 'ui';
import Link from 'next/link';
import { SideBar } from '@/components/SideBar';
import ClientOnly from '@/components/ClientOnly';
import { gql, useQuery, useLazyQuery } from '@apollo/client';

const ITEM_QUERY = gql`
  query Query {
  allOrder {
    orderId
    orderCarts {
      cart {
        cartNo
      }
    }
    sendingDate
    returnDate
    invoices {
      billings {
        billingId
      }
      invoiceId
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


const OrderAnalyse = () => {

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

    // const role = "INV"

    return (
        <>
            <aside>
                <SideBar role={role} showOrder="true" />
            </aside>
            <main className="container mx-auto lg:ml-64 px-10 space-y-4 pb-8">
                <Breadcrumb first_name="Order Management" current="Order" />
                <h1 className="text-4xl font-bold pt-6 pb-4">Order Analysis</h1>
                <div className="w-full rounded-lg border-2 border-black p-4 bg-white">
                    <h1 className="text-xl font-bold">Order Descriptive</h1>
                    <p className="pt-1 px-4">summary of all order to show customer ordering behavior</p>
                    <div className="pt-2 px-4">
                        {/* <SearchBar placeholder="Search by Order ID" /> */}
                    </div>
                    <div className="p-4">
                        <div class="relative overflow-x-auto rounded-lg h-96">
                            <table class="w-full text-sm text-center text-gray-500 ">
                                <thead class="text-xs text-gray-700 bg-[#E3C291] uppercase sticky top-0">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            Order ID
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Total Cart
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Period From Send To Return (days)
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Invoices Count
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data && data.allOrder?.map((or) => (
                                        <tr class="bg-white border-b">
                                            <th scope="row" class="px-6 py-4 font-normal">
                                                {or['orderId']}
                                            </th>
                                            <td class="px-6 py-4">
                                                {or.orderCarts.length}
                                            </td>
                                            <td class="px-6 py-4">
                                                {Math.floor(Math.abs(new Date(or.returnDate) - new Date(or.sendingDate))/(1000*3600*24))}
                                            </td>
                                            <td class="px-6 py-4">
                                                {or.invoices.length}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {/* <div className="w-full rounded-lg border border-2 border-black p-4">
                    <h1 className="text-xl font-bold">Customer Order Statistic</h1>
                    <div className="pt-2 px-4">
                        <SearchBar placeholder="Search by Customer" />
                    </div>
                    <div className="p-4">
                        <div class="relative overflow-x-auto rounded-lg h-60">
                            <table class="w-full text-sm text-center text-gray-500">
                                <thead class="text-xs text-gray-700 bg-[#E3C291] uppercase sticky top-0">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            Customer ID
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Order Count
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Success Order Per all order
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Issue Count
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.keys(item_use).map((key) => (
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" class="px-6 py-4 font-normal">
                                                {item_use[key]['customer_id']}
                                            </th>
                                            <td class="px-6 py-4">
                                                {item_use[key]['order_count']}
                                            </td>
                                            <td class="px-6 py-4">
                                                {item_use[key]['success_per']}
                                            </td>
                                            <td class="px-6 py-4">
                                                {item_use[key]['issue_count']}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div> */}
            </main>
        </>
    );
};

export default OrderAnalyse;
