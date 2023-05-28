import Image from 'next/image';
import { useState } from 'react';
import { Sidebar, Breadcrumb, TextInput, Textarea, Dropdown, Button, SearchBar } from 'ui';
import Link from 'next/link';

const Products = () => {

    const role = "INV"
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
                <Sidebar role={role} showStock="true" />
            </aside>
            <main className="container mx-auto lg:ml-64 px-10 space-y-4">
                <Breadcrumb first_name="Stock Inventory" first="/inventory" current="Products" />
                <h1 className="text-4xl font-bold py-6">Product Management</h1>
                {/* <div className="w-full rounded-lg border border-2 border-black p-4">
                    <h1 className="text-xl font-bold">All Time Product Renting</h1>
                    <div className="pt-2 px-4">
                        <SearchBar placeholder="Search by Product Name" />
                    </div>
                    <div className="p-4">
                        <div class="relative overflow-x-auto rounded-lg">
                            <table class="w-full text-sm text-center text-gray-500">
                                <thead class="text-xs text-gray-700 bg-[#E3C291] uppercase">
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
                                                {data[key]['last_month_rentin']}
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
                </div> */}
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
                <div className="w-full rounded-lg border border-2 border-black p-4">
                    <h1 className="text-xl font-bold">Products</h1>
                    <div className="pt-2 px-4">
                        <SearchBar placeholder="Search by Product Name" />
                    </div>
                    <div className="p-4">
                        <div class="relative overflow-x-auto rounded-lg h-96">
                            <table class="w-full text-sm text-center text-gray-500">
                                <thead class="text-xs text-gray-700 bg-[#E3C291] uppercase sticky top-0">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            Product ID
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Product name
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Category ID
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Price Per Day
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Weight
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Height
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Width
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Depth
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Color
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Material
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Picture URL
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Description
                                        </th>
                                        {role == 'INV' ? (
                                            <th scope="col" class="px-6 py-3">
                                                Edit
                                            </th>) : (
                                            <></>
                                        )}
                                        {role == 'INV' ? (
                                            <th scope="col" class="px-6 py-3">
                                                Delete
                                            </th>) : (
                                            <></>
                                        )}
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.keys(data).map((key) => (
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {productList[key]['product_id']}
                                            </th>
                                            <td class="px-6 py-4">
                                                {productList[key]['product_name']}
                                            </td>
                                            <td class="px-6 py-4">
                                                {productList[key]['category_id']}
                                            </td>
                                            <td class="px-6 py-4">
                                                {productList[key]['price_per_day']}
                                            </td>
                                            <td class="px-6 py-4">
                                                {productList[key]['weight']}
                                            </td>
                                            <td class="px-6 py-4">
                                                {productList[key]['height']}
                                            </td>
                                            <td class="px-6 py-4">
                                                {productList[key]['width']}
                                            </td>
                                            <td class="px-6 py-4">
                                                {productList[key]['depth']}
                                            </td>
                                            <td class="px-6 py-4">
                                                {productList[key]['color']}
                                            </td>
                                            <td class="px-6 py-4">
                                                {productList[key]['material']}
                                            </td>
                                            <td class="px-6 py-4">
                                                {productList[key]['picture_URL']}
                                            </td>
                                            <td class="px-6 py-4">
                                                {productList[key]['description']}
                                            </td>
                                            {role == 'INV' ? (
                                                <td class="px-6 py-4">
                                                    <a href="/editproduct" class="font-medium text-blue-600 hover:underline">Edit</a>
                                                </td>) : (
                                                <></>
                                            )}
                                            {role == 'INV' ? (
                                                <td class="px-6 py-4">
                                                    <a class="font-medium text-red-600 hover:underline" onClick={popup}>Delete</a>
                                                </td>) : (
                                                <></>
                                            )}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {role == 'inventory' ? (
                    <div className='grid justify-items-end pb-8'>
                        <Link href="/productform">
                            <Button type="normal" text="Add New Product" />
                        </Link>
                    </div>) : (
                    <></>
                )}
            </main>
        </>
    );
};

export default Products;