import { useState, useEffect } from 'react';
                        <SearchBar placeholder="Search by Product Name" />
import { Sidebar, Button, Breadcrumb,SearchBar } from 'ui';
import Link from 'next/link';
import { SideBar } from '@/components/SideBar';
import ClientOnly from '@/components/ClientOnly';
import { gql, useQuery, useLazyQuery } from '@apollo/client';

const PRO_QUERY = gql`
  query SearchOrderPromotionByPKs($promotionCode: String) {
  searchOrderPromotionByPKs(promotionCode: $promotionCode) {
      order {
        orderId
      }
      promotion {
        promotionCode
      }
    }
  }
  `

const STAFF_ROLE = gql`
  query StaffProfile {
    StaffProfile {
      position {
        positionId
      }
    }
  }
`


const Order_Promotion = () => {

  const [isShow, setShow] = useState(false);
  const popup = () => {
      setShow(!isShow);
  };
  const drop = () => {
      popup();
      // code for drop row
  };

  const [searchFilter, setSearchFilter] = useState('');
  const [executeSearch, { data, loading, error }] = useLazyQuery(PRO_QUERY, {pollInterval: 1000});
  // const [productlist, setProductList] = useState('');
  const { data: staff, loading: loadingposition, error: errorposition } = useQuery(STAFF_ROLE);
  const [role, setRole] = useState('');

  useEffect(() => {
    executeSearch()
  }, [executeSearch])

  useEffect(() => {
    console.log(data)
  }, [data])

  useEffect(() => {
    console.log(staff?.StaffProfile[0].position.positionId);
    setRole(staff?.StaffProfile[0].position.positionId);
  }, [staff])

  if (loadingposition) {
    return (
      <h2>Loading Data...</h2>
    );
  };

  if (errorposition) {
    console.error(errorposition);
    return (
      <h2>Sorry, {errorposition}...</h2>
    );
  };

  console.log(staff)

  if (loading) {
    return (
      <h2>Loading Data...</h2>
    );
  };

  if (error) {
    console.error(error);
    return (
      <h2>Sorry, there&apos;s been an error...</h2>
    );
  };


    // const role = "SA"
    // const itemList = {
    //     1: {
    //         order_id: "94606cec-d94a-45fd-ad2b-15858b15d6f1",
    //         promotion_code: "1eadc3f5-81d3-421a-a9d6-c3b8050a8eb5",
    //     },
    //     2: {
    //         order_id: "94606cec-d94a-45fd-ad2b-15858b15d6f1",
    //         promotion_code: "32c075e1-355e-473f-8687-a1aeddfd7979",
    //     },
    //     3: {
    //         order_id: "eba847f0-50ae-480d-9c8b-7ac63a320060",
    //         promotion_code: "1eadc3f5-81d3-421a-a9d6-c3b8050a8eb5",
    //     },
    //     4: {
    //         order_id: "17331d14-0b99-4d6f-84e4-73e293a58bc1",
    //         promotion_code: "860b1f08-b9b6-417b-95ce-d10fb1fdd4ad",
    //     },
    // };

    return (
        <>
            <aside>
                <SideBar role={role} showPromo="true" />
            </aside>
            <main className="container mx-auto lg:ml-64 px-10 space-y-4">
                <Breadcrumb first_name="Promotion" current="Promotion Used" />
                <h1 className="text-4xl font-bold py-6">Promotion Used</h1>
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
                <div className="w-full rounded-lg border-2 border-black p-4 bg-white">
                <span className="text-red-300 pl-4">Please Input Whole Promotion Code</span>
                        <div className="pt-2 px-4">
                            <SearchBar
                              placeholder="Search by Promotion Code"
                              onSubmit={(e) => {
                                e.preventDefault(true);
                                executeSearch({
                                  variables: { promotionCode: searchFilter }
                                })
                              }}
                              onChange={e => setSearchFilter(e.target.value)}
                            />
                        </div>
                    <div className="p-4">
                        <div class="relative overflow-x-auto overflow-y-auto h-96 rounded-lg">
                            <table class="w-full text-sm text-center text-gray-500">
                                <thead class="text-xs text-gray-700 bg-[#E3C291] uppercase sticky top-0">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            Order ID
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Promotion Code
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data && data.searchOrderPromotionByPKs?.map((key) => (
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" class="px-6 py-4 font-normal">
                                                {key.order['orderId']}
                                            </th>
                                            <th scope="row" class="px-6 py-4 font-normal">
                                                {key.promotion['promotionCode']}
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

export default Order_Promotion;
