import * as React from 'react';

export const SearchBar = () => {
  return (
    <>
      <form>
        <div class="flex">
          <div class="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              class="z-20 block w-full rounded-lg border border-l-2 border-gray-300 border-l-gray-50 bg-gray-50 p-2.5 text-sm text-gray-900 ring-[#C3A982] hover:ring-2"
              placeholder="Search Products"
            />
            <button
              type="submit"
              class="border-l-gray absolute right-0 top-0 rounded-r-lg p-2.5 text-sm font-medium text-white "
            >
              <svg
                aria-hidden="true"
                class="h-5 w-5 hover:stroke-[#C3A982]"
                fill="none"
                stroke="black"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
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
