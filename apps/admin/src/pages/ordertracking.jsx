import Image from 'next/image';
import { useState } from 'react';
import { Sidebar, SearchBar, Breadcrumb, TextInput, Dropdown } from 'ui';

const Ordertracking = () => {

    const role = "inventory"
    const query = {
        order_id: 342044,
        status_name: "pack waiting",
    }
    const order_status = {
        110: 'payment waiting',
        120: 'pack waiting',
        130: 'logistic waiting',
        131: 'send waiting',
        132: 'revieve waiting',
        210: 'payment in progress',
        220: 'pack in progress',
        230: 'logistic in progress',
        231: 'send in progress',
        232: 'receive in progress',
        310: 'payment problems',
        320: 'pack problem',
        330: 'logistic problem',
        331: 'receive problem',
        400: 'finish overall',
    }
    const all_order = {
        1: {
            order_id: 'dfhdhrreseww',
            product_name: 'Black Chair',
            quantity: 32,
            active: 12,
        },
        2: {
            order_id: 'dfhdhrreseww',
            product_name: 'Black Chair',
            quantity: 32,
            active: 12,
        },
        3: {
            order_id: 'dfhdhrreseww',
            product_name: 'Black Chair',
            quantity: 32,
            active: 12,
        },
        4: {
            order_id: 'dfhdhrreseww',
            product_name: 'Black Chair',
            quantity: 32,
            active: 12,
        },
    }

    const order_detail = {
        1: {
            car_licence: "กข2934",
            is_return: "Yes",
            staff_fname: "Doggy",
            staff_lname: "Gogo"
        },
        2: {
            car_licence: "กข2934",
            is_return: "Yes",
            staff_fname: "Doggy",
            staff_lname: "Gogo"
        },
        3: {
            car_licence: "กข2934",
            is_return: "Yes",
            staff_fname: "Doggy",
            staff_lname: "Gogo"
        },
        4: {
            car_licence: "กข2934",
            is_return: "Yes",
            staff_fname: "Doggy",
            staff_lname: "Gogo"
        },
    }
    const item_use = {
        1: {
            item_id: "23994482",
            product_name: "White Chair",
            order_id: "r344xxidb7t"
        },
        2: {
            item_id: "23994482",
            product_name: "White Chair",
            order_id: "r344xxidb7t"
        },
        3: {
            item_id: "23994482",
            product_name: "White Chair",
            order_id: "r344xxidb7t"
        },
        4: {
            item_id: "23994482",
            product_name: "White Chair",
            order_id: "r344xxidb7t"
        },
        5: {
            item_id: "23994482",
            product_name: "White Chair",
            order_id: "r344xxidb7t"
        },
        6: {
            item_id: "23994482",
            product_name: "White Chair",
            order_id: "r344xxidb7t"
        },
    }
    

    return (
        <>
            <aside>
                <Sidebar role={role} showOrder="true" />
            </aside>
            <main className="container mx-auto lg:ml-64 px-10 space-y-4 pb-8">
                <Breadcrumb first_name="Order Management" second_name="Order" second="/order" current="Order Tracking" />
                <h1 className="text-4xl font-bold pt-6 pb-4">Order Tracking</h1>
                <div className="w-full rounded-lg border border-2 border-black p-4 space-y-2 ">
                    <div className="grid grid-cols-2 gap-4">
                        <TextInput type="readOnly" defaultValue={query.order_id} label="Order ID" />
                        <TextInput type="readOnly" defaultValue={query.status_name} label="Order Status" />

                        <div className="col-span-2">
                            <h1 className="text-xl font-bold pb-2">Stock Preparing</h1>
                            <div class="relative overflow-x-auto rounded-lg h-60">
                                <table class="w-full text-sm text-center text-gray-500 ">
                                    <thead class="text-xs text-gray-700 bg-[#E3C291] uppercase sticky top-0">
                                        <tr>
                                            <th scope="col" class="px-6 py-3">
                                                Product Name
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Quantity
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Active
                                            </th>
                                            {role == 'inventory' ? (
                                                <th scope="col" class="px-6 py-3">
                                                    Check-Out and Check-In
                                                </th>) : (
                                                <></>
                                            )}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Object.keys(all_order).map((key) => (
                                            <tr class="bg-white border-b">
                                                <td class="px-6 py-4">
                                                    {all_order[key]['product_name']}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {all_order[key]['quantity']}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {all_order[key]['active']}
                                                </td>
                                                {role == 'inventory' ? (
                                                    <td class="px-6 py-4">
                                                        <a href="/itemcheckinout" class="font-medium text-red-600 hover:underline">update</a>
                                                    </td>) : (
                                                    <></>
                                                )}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <h1 className="text-xl font-bold pb-2">Car Assign</h1>
                            <div class="relative overflow-x-auto rounded-lg h-60">
                                <table class="w-full text-sm text-center text-gray-500 ">
                                    <thead class="text-xs text-gray-700 bg-[#E3C291] uppercase sticky top-0">
                                        <tr>
                                            <th scope="col" class="px-6 py-3">
                                                Car Licence
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Is Return
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Staff Firstname
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Staff Lastname
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Object.keys(order_detail).map((key) => (
                                            <tr class="bg-white border-b">
                                                <th scope="row" class="px-6 py-4 font-normal">
                                                    {order_detail[key]['car_licence']}
                                                </th>
                                                <td class="px-6 py-4">
                                                    {order_detail[key]['is_return']}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {order_detail[key]['staff_fname']}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {order_detail[key]['staff_lname']}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Ordertracking;
