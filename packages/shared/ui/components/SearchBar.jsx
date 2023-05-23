import * as React from 'react';

export const SearchBar = () => {
    return (
    <>
        <form>
            <div class="flex">
                <div class="relative w-full">
                    <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-l-gray-50 border-l-2 border border-gray-300 focus:border-stone-500 " placeholder="Search Products" />
                        <button type="submit" class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white rounded-r-lg border-l-gray dark:bg-blue-600 dark:hover:bg-blue-700 ">
                            <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            <span class="sr-only">Search</span>
                        </button>
                </div>
            </div>
        </form>
    </>);
};

