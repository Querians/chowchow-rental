import { useState } from 'react';
import Image from 'next/image';

export const Navbar = () => {
  const [isShow, setShow] = useState(false);
  const onClick = () => {
    setShow(!isShow);
  };

  return (
    <>
      <nav className="w-full fixed z-50 bg-[#C3A982] dark:bg-gray-900">
        <div className="m-0 flex w-full flex-wrap items-center justify-around border-b-2 border-[#000000]  p-4">
          <ul className="flex flex-col p-4 align-baseline font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 ">
            <li>
              <a href="https://flowbite.com/" className="flex items-center">
                <Image
                  src="/dog.svg"
                  className="mr-3 h-8"
                  alt="Flowbite Logo"
                  width="30"
                  height="30"
                />
                <span className="self-center whitespace-nowrap pr-12 text-2xl font-bold dark:text-white">
                  CHOWCHOW
                </span>
              </a>
            </li>
          </ul>

          {/* hamberger */}
          <button
            onClick={onClick}
            data-collapse-toggle="navbar-hamburger"
            type="button"
            class="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 md:hidden"
            aria-controls="navbar-hamburger"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="h-6 w-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className="hidden w-full items-center justify-self-start md:order-1 md:flex md:w-auto"
            id="mobile-menu-1"
          >
            <div className="align-between mt-4 flex flex-col border border-gray-100 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 md:dark:bg-gray-900">
              <a
                href="/products"
                className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:text-slate-50"
                aria-current="page"
              >
                PRODUCTS
              </a>
              <a
                href=""
                className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:text-slate-50"
              >
                ABOUT US
              </a>
            </div>
          </div>
          <div
            className="hidden w-full items-end justify-between md:order-1 md:flex md:w-auto"
            id="mobile-menu-2"
          >
            <ul className="mt-4 flex flex-col border border-gray-100 p-4 align-baseline font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 md:dark:bg-gray-900">
              {/* <li className='w-[80%]'>
                <SearchBar />
              </li> */}
              <li>
                <a href="/profile" className="flex items-center">
                  <Image
                    src="/profile.svg"
                    className="mr-3 h-8"
                    alt="Profile Logo"
                    width="25"
                    height="25"
                  />
                </a>
              </li>
              <li>
                <a href="/cart" className="flex items-center">
                  <Image
                    src="/cart.svg"
                    className="mr-3 h-8"
                    alt="Cart Logo"
                    width="25"
                    height="25"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        {isShow && (
          <div class="w-full md:hidden" id="navbar-hamburger">
            <ul class="flex flex-col bg-[#8E7F68] font-medium">
              <li>
                <a
                  href="/products"
                  class="block py-2 text-center  text-gray-900 hover:bg-gray-100"
                >
                  PRODUCT
                </a>
              </li>
              <li>
                <a
                  href="/profile"
                  class="block bg-[#C3A982] py-2 text-center text-gray-900 hover:bg-gray-100"
                >
                  PROFILE
                </a>
              </li>
              <li>
                <a
                  href="/cart"
                  class="block py-2 text-center text-gray-900 hover:bg-gray-100"
                >
                  CART
                </a>
              </li>
              <li>
                <a
                  href=""
                  class="block bg-[#C3A982]  py-2 text-center text-gray-950 hover:bg-gray-100"
                >
                  ABOUT US
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};
