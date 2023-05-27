import Image from 'next/image';

export const NavbarFake = () => {

  return (
    <>
      <nav className="w-full top-0 fixed z-50 bg-[#C3A982] dark:bg-gray-900">
        <div className="m-0 flex w-full flex-wrap items-center justify-around border-b-2 border-[#000000]  p-0 md:p-3">
          <div
            className="invisible w-full items-end justify-between md:order-1 md:flex md:w-auto"
            id="mobile-menu-2"
          >
            <ul className="mt-4 flex flex-col border border-gray-100 p-4 align-baseline font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 md:dark:bg-gray-900">
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
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
