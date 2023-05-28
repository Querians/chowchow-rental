import { useState } from 'react';
import { Sidebar, Button, Breadcrumb,SearchBar } from 'ui';
import Link from 'next/link';

const Issue = () => {

    const role = "sales"
    const itemList = {
        1: {
            issue_id: 'nvjdk415fg5',
            customer_name: "Letme Sleep",
            tel: '0XXXXXXXXX',
            category_prob_name: "missing order",
            status: true,
            timestamp:"2023-01-01 13:30:44",
        },
        2: {
            issue_id: 'nvjdk415fg5',
            customer_name: "Letme Sleep",
            tel: '0XXXXXXXXX',
            category_prob_name: "missing order",
            status: false,
            timestamp:"2023-01-01 13:30:44",
        },
        3: {
            issue_id: 'nvjdk415fg5',
            customer_name: "Letme Sleep",
            tel: '0XXXXXXXXX',
            category_prob_name: "missing order",
            status: false,
            timestamp:"2023-01-01 13:30:44",
        },
        4: {
            issue_id: 'nvjdk415fg5',
            customer_name: "Letme Sleep",
            tel: '0XXXXXXXXX',
            category_prob_name: "missing order",
            status: true,
            timestamp:"2023-01-01 13:30:44",
        },
        5: {
            issue_id: 'nvjdk415fg5',
            customer_name: "Letme Sleep",
            tel: '0XXXXXXXXX',
            category_prob_name: "missing order",
            status: true,
            timestamp:"2023-01-01 13:30:44",
        },
        6: {
            issue_id: 'nvjdk415fg5',
            customer_name: "Letme Sleep",
            tel: '0XXXXXXXXX',
            category_prob_name: "missing order",
            status: false,
            timestamp:"2023-01-01 13:30:44",
        },
    };
    const [isShow, setShow] = useState(false);
    const popup = () => {
        setShow(!isShow);
    };
    const drop = () => {
        popup();
        // code for drop row
    };

    return (
        <>
            <aside>
                <Sidebar role={role} showIssue="true" />
            </aside>
            <main className="container mx-auto lg:ml-64 px-10 space-y-4">
                <Breadcrumb first_name= "Issue" current= "Issue"  />
                <h1 className="text-4xl font-bold py-6">Issue</h1>
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
                <div className="w-full rounded-lg border border-2 border-black p-4 ">
                <h1 className="text-xl font-bold">Issue ID</h1>
                    <div className="pt-2 px-4">
                            <SearchBar placeholder="Search by Issue ID" />
                        </div>
                    <div className="p-4">
                        <div class="relative overflow-x-auto overflow-y-auto h-96 rounded-lg">
                            <table class="w-full text-sm text-center text-gray-500">
                                <thead class="text-xs text-gray-700 bg-[#E3C291] uppercase sticky top-0">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            Issue ID
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Customer Name
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Tel.
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Category Problem Name
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Status
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Timestamp
                                        </th>
                                        {role == 'sales' ? (
                                            <th scope="col" class="px-6 py-3">
                                                Edit
                                            </th>) : (
                                            <></>
                                        )}
                                        {role == 'sales' ? (
                                            <th scope="col" class="px-6 py-3">
                                                Delete
                                            </th>) : (
                                            <></>
                                        )}
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.keys(itemList).map((key) => (
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" class="px-6 py-4 font-normal">
                                                {itemList[key]['issue_id']}
                                            </th>
                                            <th scope="row" class="px-6 py-4 font-normal">
                                                {itemList[key]['customer_name']}
                                            </th>
                                            <td scope="row" class="px-6 py-4 font-normal">
                                                {itemList[key]['tel']}
                                            </td>
                                            <th scope="row" class="px-6 py-4 font-normal">
                                                {itemList[key]['category_prob_name']}
                                            </th>
                                            <th scope="row" class="px-6 py-4 font-normal">
                                                {itemList[key]['status']?
                                                <input checked id="disabled-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded "/>:
                                                <input id="disabled-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded "/>}
                                            </th>
                                            <th scope="row" class="px-6 py-4 font-normal">
                                                {itemList[key]['timestamp']}
                                            </th>
                                            {role == 'sales' ? (
                                                <td class="px-6 py-4">
                                                    <a href="/editcateprob" class="font-medium text-blue-600 hover:underline">Edit</a>
                                                </td>) : (
                                                <></>
                                            )}
                                            {role == 'sales' ? (
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
            </main>
        </>
    );
};

export default Issue;
