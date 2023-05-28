import Image from 'next/image';
import { useState } from 'react';
import { Sidebar, Breadcrumb, Button, SearchBar } from 'ui';
import Link from 'next/link';

const OrderAnalyse = () => {

    const role = "inventory"
    const order_sum = {
        1: {
            order_id: 'dfhdhrreseww',
            total_cart: 3,
            period_return: 30,
            bill_count: 4,
            invoice: 3
        },
        2: {
            order_id: 'dfhdhrreseww',
            total_cart: 3,
            period_return: 30,
            bill_count: 4,
            invoice: 3
        },
        3: {
            order_id: 'dfhdhrreseww',
            total_cart: 3,
            period_return: 30,
            bill_count: 4,
            invoice: 3
        },
        4: {
            order_id: 'dfhdhrreseww',
            total_cart: 3,
            period_return: 30,
            bill_count: 4,
            invoice: 3
        },
    };

    const item_use = {
        1: {
            customer_id: "3dd0030",
            order_count: 3,
            success_per: 0.25,
            avg_period: 23,
            most_create_intval: '12:00-16:00',
            issue_count:3,
        },
        2: {
            customer_id: "3dd0030",
            order_count: 3,
            success_per: 0.25,
            avg_period: 23,
            most_create_intval: '12:00-16:00',
            issue_count:3,
        },
        3: {
            customer_id: "3dd0030",
            order_count: 3,
            success_per: 0.25,
            avg_period: 23,
            most_create_intval: '12:00-16:00',
            issue_count:3,
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
                <Breadcrumb first_name="Order Management" current="Order" />
                <h1 className="text-4xl font-bold pt-6 pb-4">Order Analysis</h1>
                <div className="w-full rounded-lg border border-2 border-black p-4">
                    <h1 className="text-xl font-bold">Order Descriptive</h1>
                    <div className="pt-2 px-4">
                        <SearchBar placeholder="Search by Order ID" />
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
                                            Total Cart
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Period From Send To Return (days)
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Bill Count
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Invoice Count
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.keys(order_sum).map((key) => (
                                        <tr class="bg-white border-b">
                                            <th scope="row" class="px-6 py-4 font-normal">
                                                {order_sum[key]['order_id']}
                                            </th>
                                            <td class="px-6 py-4">
                                                {order_sum[key]['total_cart']}
                                            </td>
                                            <td class="px-6 py-4">
                                                {order_sum[key]['period_return']}
                                            </td>
                                            <td class="px-6 py-4">
                                                {order_sum[key]['bill_count']}
                                            </td>
                                            <td class="px-6 py-4">
                                                {order_sum[key]['invoice']}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="w-full rounded-lg border border-2 border-black p-4">
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
                                            Average period from send to return
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Most Time Interval That Create Order
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
                                                {item_use[key]['avg_period']}
                                            </td>
                                            <td class="px-6 py-4">
                                                {item_use[key]['most_create_intval']}
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
                </div>
            </main>
        </>
    );
};

export default OrderAnalyse;