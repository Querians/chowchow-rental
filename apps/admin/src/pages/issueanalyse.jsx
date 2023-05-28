import Image from 'next/image';
import { useState } from 'react';
import { Sidebar, Breadcrumb, Button, SearchBar } from 'ui';
import Link from 'next/link';

const IssueAnalyse = () => {

    const role = "inventory"
    const issue_sum = {
        1: {
            customer_id: '8239r4i9f',
            app_not: '356',
            server_down: '35',
            order_tracking: '355',
            payment_err: '1',
            insufficient: '24',
        },
        2: {
            customer_id: '8239r4i9f',
            app_not: '356',
            server_down: '35',
            order_tracking: '355',
            payment_err: '1',
            insufficient: '24',
        },
        3: {
            customer_id: '8239r4i9f',
            app_not: '356',
            server_down: '35',
            order_tracking: '355',
            payment_err: '1',
            insufficient: '24',
        },
        4: {
            customer_id: '8239r4i9f',
            app_not: '356',
            server_down: '35',
            order_tracking: '355',
            payment_err: '1',
            insufficient: '24',
        },
        5: {
            customer_id: '8239r4i9f',
            app_not: '356',
            server_down: '35',
            order_tracking: '355',
            payment_err: '1',
            insufficient: '24',
        },
        6: {
            customer_id: '8239r4i9f',
            app_not: '356',
            server_down: '35',
            order_tracking: '355',
            payment_err: '1',
            insufficient: '24',
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
            <aside>
                <Sidebar role={role} showOrder="true" />
            </aside>
            <main className="container mx-auto lg:ml-64 px-10 space-y-4 pb-8">
                <Breadcrumb first_name="Order Management" first="/order" current="Order" />
                <h1 className="text-4xl font-bold pt-6 pb-4">Issue Analysis</h1>
                <div className="w-full rounded-lg border border-2 border-black p-4">
                    <h1 className="text-xl font-bold">Number Of Issue</h1>
                    <div className="p-4">
                        <div class="relative overflow-x-auto rounded-lg h-60">
                            <table class="w-full text-sm text-center text-gray-500 ">
                                <thead class="text-xs text-gray-700 bg-[#E3C291] uppercase sticky top-0">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                          
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            App not Respond
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Server Down
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Order Tracking
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Payment Error
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Insufficient
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.keys(issue_sum).map((key) => (
                                        <tr class="bg-white border-b">
                                            <th scope="row" class="px-6 py-4 font-normal bg-[#E3C291]">
                                                {issue_sum[key]['customer_id']}
                                            </th>
                                            <td class="px-6 py-4">
                                                {issue_sum[key]['app_not']}
                                            </td>
                                            <td class="px-6 py-4">
                                                {issue_sum[key]['server_down']}
                                            </td>
                                            <td class="px-6 py-4">
                                                {issue_sum[key]['order_tracking']}
                                            </td>
                                            <td class="px-6 py-4">
                                                {issue_sum[key]['payment_err']}
                                            </td>
                                            <td class="px-6 py-4">
                                                {issue_sum[key]['insufficient']}
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

export default IssueAnalyse;