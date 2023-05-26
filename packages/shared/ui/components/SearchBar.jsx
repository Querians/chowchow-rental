import * as React from 'react';

export const SearchBar = ({placeholder}) => {
  return (
    <>
      <form>
        <div class="flex">
          <div class="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              class="z-20 block w-full rounded-lg border-2 border-gray-800 bg-gray-50 p-2.5 pl-4 text-sm text-gray-900 ring-[#C3A982] hover:ring-2"
              placeholder={placeholder}
            />
            <button
              type="submit"
              class="border-gray-800  border-2 absolute right-0 top-0 rounded-r-lg p-2 px-4 text-sm font-medium bg-[#C3A982] hover:bg-[#89724E] hover:text-white"
            >
              <svg
                aria-hidden="true"
                class="h-6 w-5"
                fill="none"
                stroke="black"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="4"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              <span class="sr-only">Search</span>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
