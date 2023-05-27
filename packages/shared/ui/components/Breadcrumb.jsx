import * as React from 'react';

export const Breadcrumb = ({
  first,
  first_name,
  second,
  second_name,
  third,
  third_name,
  current,
}) => {
  return (
    <>
      <nav class="flex" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
          <li class="inline-flex items-center">
            <a
              href={first}
              class="inline-flex items-center text-base font-medium text-gray-700 hover:text-[#C3A982]"
            >
              <svg
                aria-hidden="true"
                class="mr-2 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
              {first_name}
            </a>
          </li>
          {second_name ? (
            <li>
              <div class="flex items-center">
                <svg
                  aria-hidden="true"
                  class="h-6 w-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <a
                  href={second}
                  class="ml-1 text-base font-medium text-gray-700 hover:text-[#C3A982] md:ml-2 "
                >
                  {second_name}
                </a>
              </div>
            </li>
          ) : (
            <></>
          )}
          {third_name ? (
            <li>
              <div class="flex items-center">
                <svg
                  aria-hidden="true"
                  class="h-6 w-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <a
                  href={third}
                  class="ml-1 text-base font-medium text-gray-700 hover:text-[#C3A982] md:ml-2 "
                >
                  {third_name}
                </a>
              </div>
            </li>
          ) : (
            <></>
          )}
          <li aria-current="page">
            <div class="flex items-center">
              <svg
                aria-hidden="true"
                class="h-6 w-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="ml-1 text-base font-medium text-gray-500 md:ml-2 ">
                {current}
              </span>
            </div>
          </li>
        </ol>
      </nav>
    </>
  );
};
