import { gql, useQuery, useLazyQuery } from '@apollo/client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Sidebar, Breadcrumb, TextInput, Textarea, Dropdown, Button, SearchBar } from 'ui';
import Link from 'next/link';
import ClientOnly from '@/components/ClientOnly';
import { SideBar } from '@/components/SideBar';

const ITEM_QUERY = gql`
  query AllProduct {
  allProduct {
    items {
      itemStatus {
        itemStatusId
      }
    }
    category {
      categoryName
    }
    productName
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



const Inventory = () => {

    // const role = "inventory"

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


    const current_stock = {
        1: {
            category_name: 2301,
            product_name: 'Black Chair',
            available: 196,
            not_available: 26,
            out_of_order: 12,
            total: 234,
        },
        2: {
            category_name: 2300,
            product_name: 'White Table',
            available: 196,
            not_available: 26,
            out_of_order: 12,
            total: 234,
        },
        3: {
            category_name: 2452,
            product_name: 'Table Chair',
            available: 196,
            not_available: 26,
            out_of_order: 12,
            total: 234,
        },
        4: {
            category_name: 2301,
            product_name: 'Black Chair',
            available: 196,
            not_available: 26,
            out_of_order: 12,
            total: 234,
        },
        5: {
            category_name: 2300,
            product_name: 'White Table',
            available: 196,
            not_available: 26,
            out_of_order: 12,
            total: 234,
        },
        6: {
            category_name: 2452,
            product_name: 'Table Chair',
            available: 196,
            not_available: 26,
            out_of_order: 12,
            total: 234,
        },
    }

    // const data_allTime = {
    //     1: {
    //         category_name: 'Chair',
    //         product_name: 'Black Chair',
    //         all_time_renting: 392,
    //         last_month_renting: 28,
    //         y_2022: 120,
    //         y_2021: 129,
    //         y_2020: 92,
    //     },
    //     2: {
    //         category_name: 'Chair',
    //         product_name: 'Black Chair',
    //         all_time_renting: 392,
    //         last_month_renting: 28,
    //         y_2022: 120,
    //         y_2021: 129,
    //         y_2020: 92,
    //     },
    //     3: {
    //         category_name: 'Chair',
    //         product_name: 'Black Chair',
    //         all_time_renting: 392,
    //         last_month_renting: 28,
    //         y_2022: 120,
    //         y_2021: 129,
    //         y_2020: 92,
    //     },
    //     4: {
    //         category_name: 'Chair',
    //         product_name: 'Black Chair',
    //         all_time_renting: 392,
    //         last_month_renting: 28,
    //         y_2022: 120,
    //         y_2021: 129,
    //         y_2020: 92,
    //     },
    //     5: {
    //         category_name: 'Chair',
    //         product_name: 'Black Chair',
    //         all_time_renting: 392,
    //         last_month_renting: 28,
    //         y_2022: 120,
    //         y_2021: 129,
    //         y_2020: 92,
    //     },
    //     6: {
    //         category_name: 'Chair',
    //         product_name: 'Black Chair',
    //         all_time_renting: 392,
    //         last_month_renting: 28,
    //         y_2022: 120,
    //         y_2021: 129,
    //         y_2020: 92,
    //     },
    // }


    return (
        <>
        <ClientOnly>
            <aside>
                <SideBar role={role} showStock="true"/>
            </aside>
            <main className="container mx-auto lg:ml-64 px-10 space-y-4 pb-8 h-screen">
                <Breadcrumb first_name="Stock Inventory" current="Inventory Analysis" />
                <h1 className="text-4xl font-bold py-6">Stock Inventory</h1>
                <div className="w-full rounded-lg border-2 border-black p-4 bg-white h-4/10">
                    <h1 className="text-xl font-bold">Current Stock Summary</h1>
                    <p className="pt-1 px-4">show number product item in each status</p>
                    {/* <div className="pt-2 px-4">
                        <SearchBar placeholder="Search by Product Name" />
                    </div> */}
                    <div className="p-4">
                        <div class="relative overflow-x-auto overflow-y-auto rounded-lg h-96">
                            <table class="w-full text-sm text-center text-gray-500">
                                <thead class="text-xs text-gray-700 bg-[#E3C291] uppercase sticky top-0">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            Category name
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Product name
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Available
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Not Available
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Out Of Order
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Total
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className='z-1'>
                                    {data && data.allProduct?.map((pro) => (
                                        <tr class="bg-white border-b z-2">
                                            <th scope="row" class="px-6 py-4 font-normal">
                                                {pro.category['categoryName']}
                                            </th>
                                            <td class="px-6 py-4">
                                                {pro['productName']}
                                            </td>
                                            <td class="px-6 py-4">
                                                { pro.items != 0 ? pro.items?.filter((e)=>{
                                                  return e.itemStatus.itemStatusId == 'A'
                                                 })?.length : 0 }
                                            </td>
                                            <td class="px-6 py-4">
                                            { pro.items != 0 ? pro.items?.filter((e)=>{
                                                  return e.itemStatus.itemStatusId == 'N'
                                                 })?.length : 0 }
                                            </td>
                                            <td class="px-6 py-4">
                                            { pro.items != 0 ? pro.items?.filter((e)=>{
                                                  return e.itemStatus.itemStatusId == 'O'
                                                 })?.length : 0 }
                                            </td>
                                            <td class="px-6 py-4">
                                            { pro.items != 0 ? pro.items?.length : 0 }
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {/* <div className="w-full rounded-lg border border-2 border-black p-4">
                    <h1 className="text-xl font-bold">All Time Product Renting</h1>
                    <div className="pt-2 px-4">
                        <SearchBar placeholder="Search by Product Name" />
                    </div>
                    <div className="p-4">
                        <div class="relative overflow-x-auto rounded-lg h-60">
                            <table class="w-full text-sm text-center text-gray-500">
                                <thead class="text-xs text-gray-700 bg-[#E3C291] uppercase sticky top-0">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            Category name
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Product name
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            All Time Renting
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Last Month Renting
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            2022
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            2021
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            2020
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.keys(data_allTime).map((key) => (
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" class="px-6 py-4 font-normal">
                                                {data_allTime[key]['category_name']}
                                            </th>
                                            <td class="px-6 py-4">
                                                {data_allTime[key]['product_name']}
                                            </td>
                                            <td class="px-6 py-4">
                                                {data_allTime[key]['all_time_renting']}
                                            </td>
                                            <td class="px-6 py-4">
                                                {data_allTime[key]['last_month_renting']}
                                            </td>
                                            <td class="px-6 py-4">
                                                {data_allTime[key]['y_2022']}
                                            </td>
                                            <td class="px-6 py-4">
                                                {data_allTime[key]['y_2021']}
                                            </td>
                                            <td class="px-6 py-4">
                                                {data_allTime[key]['y_2020']}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div> */}
            </main>
        </ClientOnly>
        </>
    );
};

export default Inventory;
