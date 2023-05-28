import Image from 'next/image';
import { useState } from 'react';
import { Sidebar, Breadcrumb, Button, SearchBar } from 'ui';
import Link from 'next/link';

const Order = () => {

    const role = "MA"
    const all_order = {
        1: {
            order_id: 'dfhdhrreseww',
            order_status: 'pack waiting',
            sending_date: '2023-04-02 06:48:00'
        },
        2: {
            order_id: 'dfhdhrreseww',
            order_status: 'pack waiting',
            sending_date: '2023-04-02 06:48:00'
        },
        3: {
            order_id: 'dfhdhrreseww',
            order_status: 'pack waiting',
            sending_date: '2023-04-02 06:48:00'
        },
        4: {
            order_id: 'dfhdhrreseww',
            order_status: 'pack waiting',
            sending_date: '2023-04-02 06:48:00'
        },
    }

    const item_use = {
        1: {
            item_id: 30030,
            product_name: 'Black Chair',
            order_id: 2300,
        },
        2: {
            item_id: 30030,
            product_name: 'Black Chair',
            order_id: 2300,
        },
        3: {
            item_id: 30030,
            product_name: 'Black Chair',
            order_id: 2300,
        },
        4: {
            item_id: 30030,
            product_name: 'Black Chair',
            order_id: 2300,
        },
        5: {
            item_id: 30030,
            product_name: 'Black Chair',
            order_id: 2300,
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
                <Sidebar role={role} showOrder="true" />
            </aside>
            <main className="container mx-auto lg:ml-64 px-10 space-y-4 pb-8">
                <Breadcrumb first_name="Order Management" first="/order" current="Order" />
                <h1 className="text-4xl font-bold pt-6 pb-4">Order Management</h1>
                <div className="w-full rounded-lg border border-2 border-black p-4">
                    <h1 className="text-xl font-bold">All Order Receiving</h1>
                    <div className="pt-2 px-4">
                        <SearchBar placeholder="Search by Product Name" />
                    </div>
                    <div className="p-4">
                        <div class="relative overflow-x-auto rounded-lg h-60">
                            <table class="w-full text-sm text-center text-gray-500 ">
                                <thead class="text-xs text-gray-700 bg-[#E3C291] uppercase sticky top-0">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            Order ID
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Order Status
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Sending Date
                                        </th>
                                        {role == 'inventory' ? (
                                            <th scope="col" class="px-6 py-3">
                                                Update Status
                                            </th>) : (
                                            <></>
                                        )}
                                        <th scope="col" class="px-6 py-3">
                                            Detail
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.keys(all_order).map((key) => (
                                        <tr class="bg-white border-b">
                                            <th scope="row" class="px-6 py-4 font-normal">
                                                {all_order[key]['order_id']}
                                            </th>
                                            <td class="px-6 py-4">
                                                {all_order[key]['order_status']}
                                            </td>
                                            <td class="px-6 py-4">
                                                {all_order[key]['sending_date']}
                                            </td>
                                            {role == 'customer' || role == 'sales' || role == 'inventory' || role == 'deliverer'? (
                                                <td class="px-6 py-4">
                                                    <a href="/orderstatus" class="font-medium text-blue-600 hover:underline">Update</a>
                                                </td>) : (
                                                <></>
                                            )}
                                            <td class="px-6 py-4">
                                                <a href="/ordertracking" class="font-medium text-blue-600 hover:underline">Detail</a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="w-full rounded-lg border border-2 border-black p-4">
                    <h1 className="text-xl font-bold">All Item In Use</h1>
                    <div className="pt-2 px-4">
                        <SearchBar placeholder="Search by Product Name" />
                    </div>
                    <div className="p-4">
                        <div class="relative overflow-x-auto rounded-lg h-60">
                            <table class="w-full text-sm text-center text-gray-500">
                                <thead class="text-xs text-gray-700 bg-[#E3C291] uppercase sticky top-0">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            Item ID
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Product Name
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Order ID
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.keys(item_use).map((key) => (
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" class="px-6 py-4 font-normal">
                                                {item_use[key]['item_id']}
                                            </th>
                                            <td class="px-6 py-4">
                                                {item_use[key]['product_name']}
                                            </td>
                                            <td class="px-6 py-4">
                                                {item_use[key]['order_id']}
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

export default Order;