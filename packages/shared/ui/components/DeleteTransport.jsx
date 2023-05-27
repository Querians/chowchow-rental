import { TextInput, Button, Dropdown } from "ui";
import { useState } from "react";
import Link from "next/link";

export const DeleteTransport = () => {

  const [deleteData, setDeleteData] = useState({
    order_id:'',
  })
  const [isShow, setShow] = useState(false);
  const popup = () => {
      setShow(!isShow);
  };
  const drop = () => {
      popup();
      // code for drop row
  };

  // ดึง
  const order_data = {
    '1':{
      'order_id':'xxxxxxxxx',
      'is_return':'2023-04-01 10:30:00',
      'vehicle_licence':'2023-04-02 10:30:00',
      'staff_fname':'nononon',
    },
    '2':{
      'order_id':'yyyy',
      'is_return':'2023-04-01 10:30:00',
      'vehicle_licence':'2023-04-02 10:30:00',
      'staff_fname':'nononon',
    },
    '3':{
      'order_id':'zz',
      'is_return':'2023-04-01 10:30:00',
      'vehicle_licence':'2023-04-02 10:30:00',
      'staff_fname':'nononon',
    },
  }

  return (
    <>
      <div>
      <div className="text-2xl font-bold py-2 m-0">Delete transport</div>
      <div className="w-full rounded-lg border-2 border-black p-4 mb-10">
      {isShow && (
          <div id="alert-additional-content-2" class="p-4 mb-4 text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
              <div class="flex items-center">
                  <svg aria-hidden="true" class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                  <span class="sr-only">Info</span>
                  <h3 class="text-lg font-medium">This is a danger alert</h3>
              </div>
              <div class="mt-2 mb-4 text-sm">
                  {'Are you sure to delete this row. If not please click "Exit" and if you want to delete please click "Delete".'}
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
        <div className="p-4">
          <div class=" relative overflow-x-auto overflow-y-auto h-50 rounded-lg">
            <table class="w-full text-sm text-center text-gray-500">
                <thead class="text-xs text-gray-700 bg-[#E3C291] uppercase sticky top-0">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                          order_id
                        </th>
                        <th scope="col" class="px-6 py-3">
                          arrive_date
                        </th>
                        <th scope="col" class="px-6 py-3">
                          return_date
                        </th>
                        <th scope="col" class="px-6 py-3">
                          staffId
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Delete
                        </th>
                    </tr>
                </thead>
                <tbody>
                  {Object.keys(order_data).map((key) => (

                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          <Link href={'/ordertracking'}>
                            {order_data[key]['order_id']}
                          </Link>
                        </td>
                        <td scope="row" class="px-6 py-4">
                          {order_data[key]['is_return']}
                        </td>
                        <td class="px-6 py-4">
                          {order_data[key]['vehicle_licence']}
                        </td>
                        <td class="px-6 py-4">
                          {order_data[key]['staff_fname']}
                        </td>
                        <td class="px-6 py-4">
                            <a class="font-medium text-red-600 hover:underline" onClick={popup}>Delete</a>
                        </td>
                      </tr>

                  ))}
                </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
