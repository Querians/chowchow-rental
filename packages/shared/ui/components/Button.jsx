import * as React from 'react';
import Link from 'next/link';

export const Button = ({ text, src }) => {
  return (
    <>
      <Link href={src}>
        <button className="mb-2 mr-2 h-10 min-w-[50%] rounded-md border border-2 border-gray-200 border-neutral-900 bg-white px-5 py-2 text-sm font-medium text-gray-900 hover:bg-stone-50 hover:text-red-950 focus:z-10 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-100">
          {text}
        </button>
      </Link>
    </>
  );
};
