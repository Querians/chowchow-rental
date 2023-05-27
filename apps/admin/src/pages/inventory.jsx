import Image from 'next/image';
import { useState } from 'react';
import { Sidebar, Breadcrumb, TextInput, Textarea, Dropdown, Button, SearchBar } from 'ui';
import Link from 'next/link';

const Inventory = () => {

    const role = "inventory"

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

    const data_allTime = {
        1: {
            category_name: 'Chair',
            product_name: 'Black Chair',
            all_time_renting: 392,
            last_month_renting: 28,
            y_2022: 120,
            y_2021: 129,
            y_2020: 92,
        },
        2: {
            category_name: 'Chair',
            product_name: 'Black Chair',
            all_time_renting: 392,
            last_month_renting: 28,
            y_2022: 120,
            y_2021: 129,
            y_2020: 92,
        },
        3: {
            category_name: 'Chair',
            product_name: 'Black Chair',
            all_time_renting: 392,
            last_month_renting: 28,
            y_2022: 120,
            y_2021: 129,
            y_2020: 92,
        },
        4: {
            category_name: 'Chair',
            product_name: 'Black Chair',
            all_time_renting: 392,
            last_month_renting: 28,
            y_2022: 120,
            y_2021: 129,
            y_2020: 92,
        },
        5: {
            category_name: 'Chair',
            product_name: 'Black Chair',
            all_time_renting: 392,
            last_month_renting: 28,
            y_2022: 120,
            y_2021: 129,
            y_2020: 92,
        },
        6: {
            category_name: 'Chair',
            product_name: 'Black Chair',
            all_time_renting: 392,
            last_month_renting: 28,
            y_2022: 120,
            y_2021: 129,
            y_2020: 92,
        },
    }

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
            <aside>
                <Sidebar role={role} showStock="true"/>
            </aside>
            <main className="container mx-auto lg:ml-64 px-10 space-y-4 pb-8">
                <Breadcrumb current="Stock Inventory" />
                <h1 className="text-4xl font-bold py-6">Stock Inventory</h1>
                <div className="w-full rounded-lg border border-2 border-black p-4">
                    <h1 className="text-xl font-bold">Current Stock Summary</h1>
                    <div className="pt-2 px-4">
                        <SearchBar placeholder="Search by Product Name" />
                    </div>
                    <div className="p-4">
                        <div class="relative overflow-x-auto rounded-lg h-60">
                            <table class="w-full text-sm text-center text-gray-500 ">
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
                                    {Object.keys(current_stock).map((key) => (
                                        <tr class="bg-white border-b z-2">
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {current_stock[key]['category_name']}
                                            </th>
                                            <td class="px-6 py-4">
                                                {current_stock[key]['product_name']}
                                            </td>
                                            <td class="px-6 py-4">
                                                {current_stock[key]['available']}
                                            </td>
                                            <td class="px-6 py-4">
                                                {current_stock[key]['not_available']}
                                            </td>
                                            <td class="px-6 py-4">
                                                {current_stock[key]['out_of_order']}
                                            </td>
                                            <td class="px-6 py-4">
                                                {current_stock[key]['total']}
                                            </td>                                            
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="w-full rounded-lg border border-2 border-black p-4">
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
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
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
                </div>
            </main>
        </>
    );
};

export default Inventory;