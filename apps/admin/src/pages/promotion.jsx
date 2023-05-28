import { useState } from 'react';
import { Sidebar, Button, Breadcrumb,SearchBar } from 'ui';
import Link from 'next/link';

const PromotionAna = () => {

    const role = "SA"
    const itemList = {
        1: {
            promotion_code: 'nvjdk415fg5',
            Q1: '300',
            Q2: '400',
            Q3: '500',
            Q4: '600',
        },
        2: {
            promotion_code: 'nvjdk415fg5',
            Q1: '300',
            Q2: '400',
            Q3: '500',
            Q4: '600',
        },
        3: {
            promotion_code: 'nvjdk415fg5',
            Q1: '300',
            Q2: '400',
            Q3: '500',
            Q4: '600',
        },
        4: {
            promotion_code: 'nvjdk415fg5',
            Q1: '300',
            Q2: '400',
            Q3: '500',
            Q4: '600',
        },
        5: {
            promotion_code: 'nvjdk415fg5',
            Q1: '300',
            Q2: '400',
            Q3: '500',
            Q4: '600',
        },
        6: {
            promotion_code: 'nvjdk415fg5',
            Q1: '300',
            Q2: '400',
            Q3: '500',
            Q4: '600',
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
                <Sidebar role={role} showPromo="true" />
            </aside>
            <main className="container mx-auto lg:ml-64 px-10 space-y-4">
                <Breadcrumb first_name="Promotion" current= "Promotion Overall"  />
                <h1 className="text-4xl font-bold py-6">Promotion Overall</h1>
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
                    <div className="pt-2 px-4">
                            <SearchBar placeholder="Search by Promotion Code" />
                        </div>
                    <div className="p-4">
                        <div class="relative overflow-x-auto overflow-y-auto h-96 rounded-lg">
                            <table class="w-full text-sm text-center text-gray-500">
                                <thead class="text-xs text-gray-700 bg-[#E3C291] uppercase sticky top-0">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            Promotion Code
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            2023-Quarter1
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            2023-Quarter2
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            2023-Quarter3
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            2023-Quarter4
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.keys(itemList).map((key) => (
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" class="bg-[#e1e1e1] px-6 py-4 font-normal">
                                                {itemList[key]['promotion_code']}
                                            </th>
                                            <th scope="row" class="px-6 py-4 font-normal">
                                                {itemList[key]['Q1']}
                                            </th>
                                            <td scope="row" class="px-6 py-4 font-normal">
                                                {itemList[key]['Q2']}
                                            </td>
                                            <th scope="row" class="px-6 py-4 font-normal">
                                                {itemList[key]['Q3']}
                                            </th>
                                            <th scope="row" class="px-6 py-4 font-normal">
                                                {itemList[key]['Q4']}
                                            </th>
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

export default PromotionAna;
