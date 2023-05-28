import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Sidebar = ({ fullName, staffID, role, showStock, showOrder, showFinance, showDeli }) => {
  const [isShow, setShow] = useState(true);
  const onClick = () => {
    setShow(!isShow);
  };
  const [isShowOrder, setShowOrder] = useState(showOrder);
  const onClickOrder = () => {
    setShowOrder(!isShowOrder);
  };
  const [isShowStore, setShowStore] = useState(showStock);
  const onClickStore = () => {
    setShowStore(!isShowStore);
  };
  const [isShowFinance, setShowFinance] = useState(showFinance);
  const onClickFinance = () => {
    setShowFinance(!isShowFinance);
  };
  const [isShowDeli, setShowDeli] = useState(showDeli);
  const onClickDeli = () => {
    setShowDeli(!isShowDeli);
  };

  return (
    <>
      <button
        onClick={onClick}
        data-drawer-target="sidebar-multi-level-sidebar"
        data-drawer-toggle="sidebar-multi-level-sidebar"
        aria-controls="sidebar-multi-level-sidebar"
        type="button"
        class="ml-3 mt-2 inline-flex items-center rounded-lg bg-[#C3A982] p-2 text-sm text-black hover:bg-[#89724E] hover:text-white"
      >
        <span class="sr-only">Open sidebar</span>
        <svg
          class="h-6 w-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      {isShow && (
        <aside
          id="sidebar-multi-level-sidebar"
          class="-translate-x fixed left-0 top-0 z-40 h-screen w-64 transition-transform sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div class="h-full overflow-y-auto bg-[#C3A982] p-8 pt-16">
            <ul class="space-y-2 font-medium">
              <li class="flex justify-between">
                <Image
                  src="/dog.svg"
                  className=" ml-2 "
                  alt="Flowbite Logo"
                  width="50"
                  height="50"
                />
                <button
                  onClick={onClick}
                  data-drawer-target="sidebar-multi-level-sidebar"
                  data-drawer-toggle="sidebar-multi-level-sidebar"
                  aria-controls="sidebar-multi-level-sidebar"
                  type="button"
                  class="ml-3 mt-2 inline-flex items-center rounded-lg p-2 lg:hidden text-sm text-gray-500 hover:bg-gray-100"
                >
                  <span class="sr-only">Open sidebar</span>
                  <svg
                    class="h-6 w-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                      d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    ></path>
                  </svg>
                </button>
              </li>
              <li class="pb-4 pl-2 pt-1">
                <p class="flex items-center rounded-lg text-lg text-black">
                  {fullName}
                </p>
                <p class="flex items-center rounded-lg text-lg text-black">
                  {staffID}
                </p>
              </li>
              <li></li>
              <li>
                <a
                  href="/staffinfo"
                  class="flex items-center rounded-lg py-2 text-gray-900 hover:bg-[#89724E] hover:text-white"
                >
                  <span class="pl-2">Staff Profile</span>
                </a>
              </li>
              {role == 'MA' ? (
                <li>
                  <a
                    href="/allstaff"
                    class="flex items-center rounded-lg py-2 text-gray-900 hover:bg-[#89724E] hover:text-white"
                  >
                    <span class="pl-2">Staff Management</span>
                  </a>
                </li>
              ) : (<></>)}
              <li>
                <a
                  href="/customer"
                  class="flex items-center rounded-lg py-2 text-gray-900 hover:bg-[#89724E] hover:text-white"
                >
                  <span class="pl-2">Customer</span>
                </a>
              </li>
              <li>
                <button
                  onClick={onClickStore}
                  type="button"
                  aria-expanded="false"
                  class="group flex w-full items-center rounded-lg py-2 pl-2 pr-[3px] text-gray-900 transition duration-75 hover:bg-[#89724E] hover:text-white"
                  aria-controls="dropdown-example"
                  data-collapse-toggle="dropdown-example"
                >
                  <span
                    class="flex-1 whitespace-nowrap text-left"
                    sidebar-toggle-item
                  >
                    Stock Inventory
                  </span>
                  <svg
                    onClick={onClickStore}
                    sidebar-toggle-item
                    class="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>

                {isShowStore && (
                  <ul id="dropdown-example" class="space-y-2 py-2">
                    <li>
                      <a
                        href="/inventory"
                        class="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        Inventory Analysis
                      </a>
                    </li>
                    <li>
                      <a
                        href="/products"
                        class="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        Products
                      </a>
                    </li>
                    <li>
                      <a
                        href="/category"
                        class="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        Category
                      </a>
                    </li>
                    {role == 'INV' ||
                      role == 'MA' ||
                      role == 'DL' ? (
                      <li>
                        <a
                          href="/items"
                          class="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                          Items
                        </a>
                      </li>
                    ) : (
                      <></>
                    )}
                  </ul>
                )}
              </li>
              <li>
                <button
                  type="button"
                  onClick={onClickOrder}
                  aria-expanded="false"
                  class="group flex w-full items-center rounded-lg py-2 pl-2 pr-[3px] text-gray-900 transition duration-75 hover:bg-[#89724E] hover:text-white"
                  aria-controls="dropdown-example"
                  data-collapse-toggle="dropdown-example"
                >
                  <span
                    class="flex-1 whitespace-nowrap text-left"
                    sidebar-toggle-item
                  >
                    Order Management
                  </span>
                  <svg
                    sidebar-toggle-item
                    class="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
                {isShowOrder && (
                  <ul id="dropdown-example" class="space-y-2 py-2">
                    <li>
                      <a
                        href="/order"
                        class="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        Order
                      </a>
                    </li>
                    <li>
                      <a
                        href="orderanalyse"
                        class="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        Order Analysis
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              {role == 'MA' || role == 'SA' ? (
                <li>
                  <button
                    type="button"
                    onClick={onClickFinance}
                    aria-expanded="false"
                    class="group flex w-full items-center rounded-lg py-2 pl-2 pr-[3px] text-gray-900 transition duration-75 hover:bg-[#89724E] hover:text-white"
                    aria-controls="dropdown-example"
                    data-collapse-toggle="dropdown-example"
                  >
                    <span
                      class="flex-1 whitespace-nowrap text-left"
                      sidebar-toggle-item
                    >
                      Finance
                    </span>
                    <svg
                      sidebar-toggle-item
                      class="h-6pr-2 w-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  {isShowFinance && (
                    <ul id="dropdown-example" class="space-y-2 py-2">
                      <li>
                        <a
                          href="/invoice"
                          class="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                          Invoice
                        </a>
                      </li>
                      <li>
                        <a
                          href="/billing"
                          class="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                          Billing
                        </a>
                      </li>
                      <li>
                        <a
                          href="/paymentmethod"
                          class="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                          Payment Method
                        </a>
                      </li>
                      <li>
                        <a
                          href="/paymenttype"
                          class="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                          Payment Type
                        </a>
                      </li>
                    </ul>
                  )}
                </li>
              ) : (
                <></>
              )}
              <li>
                <button
                  type="button"
                  onClick={onClickDeli}
                  aria-expanded="false"
                  class="group flex w-full items-center rounded-lg py-2 pl-2 pr-[3px] text-gray-900 transition duration-75 hover:bg-[#89724E] hover:text-white"
                  aria-controls="dropdown-example"
                  data-collapse-toggle="dropdown-example"
                >
                  <span
                    class="flex-1 whitespace-nowrap text-left"
                    sidebar-toggle-item
                  >
                    Delivery Management
                  </span>
                  <svg
                    sidebar-toggle-item
                    class="h-6pr-2 w-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
                {isShowDeli && (
                  <ul id="dropdown-example" class="space-y-2 py-2">
                    <li>
                      <a
                        href="/transport"
                        class="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        Transport Update
                      </a>
                    </li>
                    <li>
                      <a
                        href="/logisticAnalyse"
                        class="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        Logistic Analyse
                      </a>
                    </li>
                    <li>
                      <a
                        href="/logisticManagement"
                        class="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        Logistic Management
                      </a>
                    </li>
                    <li>
                      <a
                        href="/vehicleinfo"
                        class="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        Vehicle Informatiom
                      </a>
                    </li>
                    <li>
                      <a
                        href="/vehicletype"
                        class="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        Vehicle Type
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <a
                  href="/issue"
                  class="flex items-center rounded-lg py-2 text-gray-900 hover:bg-[#89724E] hover:text-white"
                >
                  <span class="pl-2">Issue</span>
                </a>
              </li>
            </ul>
          </div>
        </aside >
      )}
    </>
  );
};
