import Image from 'next/image';
import { useState } from 'react';
import { Sidebar, Breadcrumb, TextInput, Textarea, Dropdown, Button, SearchBar } from 'ui';
import Link from 'next/link';

const Inventory = () => {

    const role = "manager"
    const data = {
        1: {
            category_name: 'Chair',
            product_name: 'Black Chair',
            all_time_renting: 392,
            lastmonth_renting: 28,
            y_2022: 120,
            y_2021: 129,
            y_2020: 92,
        },
        2: {
            category_name: 'Chair',
            product_name: 'Black Chair',
            all_time_renting: 392,
            lastmonth_renting: 28,
            y_2022: 120,
            y_2021: 129,
            y_2020: 92,
        },
        3: {
            category_name: 'Chair',
            product_name: 'Black Chair',
            all_time_renting: 392,
            lastmonth_renting: 28,
            y_2022: 120,
            y_2021: 129,
            y_2020: 92,
        },
    }

    const productList = {
        1: {
            product_id: 30030,
            product_name: 'Black Chair',
            category_id: 2300,
            price_per_day: 28,
            weight: 4.3,
            height: 150,
            width: 50,
            depth: 50,
            color: "black",
            material: "wood",
            picture_URL: "https://www.ikea.com/us/en/images/products/lerhamn-chair-black-brown-vittaryd-beige__0728160_pe736117_s5.jpg?f=s",
            description: "ใครมันคิดจะทำโปรเจคเรื่องนี้วะ"
        },
        2: {
            product_id: 30030,
            product_name: 'Black Chair',
            category_id: 2300,
            price_per_day: 28,
            weight: 4.3,
            height: 150,
            width: 50,
            depth: 50,
            color: "black",
            material: "wood",
            picture_URL: "https://www.ikea.com/us/en/images/products/lerhamn-chair-black-brown-vittaryd-beige__0728160_pe736117_s5.jpg?f=s",
            description: "ใครมันคิดจะทำโปรเจคเรื่องนี้วะ"
        },
        3: {
            product_id: 30030,
            product_name: 'Black Chair',
            category_id: 2300,
            price_per_day: 28,
            weight: 4.3,
            height: 150,
            width: 50,
            depth: 50,
            color: "black",
            material: "wood",
            picture_URL: "https://www.ikea.com/us/en/images/products/lerhamn-chair-black-brown-vittaryd-beige__0728160_pe736117_s5.jpg?f=s",
            description: "ใครมันคิดจะทำโปรเจคเรื่องนี้วะ"
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
                                <tbody>
                                    {Object.keys(data).map((key) => (
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 sticky top-0">
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {data[key]['category_name']}
                                            </th>
                                            <td class="px-6 py-4">
                                                {data[key]['product_name']}
                                            </td>
                                            <td class="px-6 py-4">
                                                {data[key]['all_time_renting']}
                                            </td>
                                            <td class="px-6 py-4">
                                                {data[key]['last_month_rentin']}
                                            </td>
                                            <td class="px-6 py-4">
                                                {data[key]['y_2022']}
                                            </td>
                                            <td class="px-6 py-4">
                                                {data[key]['y_2021']}
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
                                    {Object.keys(data).map((key) => (
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {data[key]['category_name']}
                                            </th>
                                            <td class="px-6 py-4">
                                                {data[key]['product_name']}
                                            </td>
                                            <td class="px-6 py-4">
                                                {data[key]['all_time_renting']}
                                            </td>
                                            <td class="px-6 py-4">
                                                {data[key]['lastmonth_rentin']}
                                            </td>
                                            <td class="px-6 py-4">
                                                {data[key]['y_2022']}
                                            </td>
                                            <td class="px-6 py-4">
                                                {data[key]['y_2021']}
                                            </td>
                                            <td class="px-6 py-4">
                                                {data[key]['y_2020']}
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