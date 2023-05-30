import { useState, useEffect } from 'react';
import { Sidebar, Button, Breadcrumb, SearchBar } from 'ui';
import Link from 'next/link';
import { SideBar } from '@/components/SideBar';
import ClientOnly from '@/components/ClientOnly';
import { gql, useQuery, useLazyQuery } from '@apollo/client';

const ITEM_QUERY = gql`
  query Query {
  allPromotion {
    orderPromotions {
      order {
        orderDate
      }
    }
    promotionCode
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



const PromotionAna = () => {

  const { data: staff, loading: loadingposition, error: errorposition } = useQuery(STAFF_ROLE);
  const { data, loading, error } = useQuery(ITEM_QUERY, {pollInterval: 1000});
  const [role, setRole] = useState('');

  useEffect(() => {
    console.log(staff?.StaffProfile[0].position.positionId);
    setRole(staff?.StaffProfile[0].position.positionId);
  }, [staff])


  // const role = "SA"
  const itemList = {
    1: {
      promotion_code: '1eadc3f5-81d3-421a-a9d6-c3b8050a8eb5',
      Q1: '1',
      Q2: '0',
      Q3: '0',
      Q4: '1',
    },
    2: {
      promotion_code: '2bee4641-2270-42cf-968b-554093a8b5e0',
      Q1: '0',
      Q2: '0',
      Q3: '0',
      Q4: '0',
    },
    3: {
      promotion_code: '32c075e1-355e-473f-8687-a1aeddfd7979',
      Q1: '1',
      Q2: '0',
      Q3: '0',
      Q4: '0',
    },
    4: {
      promotion_code: '4382df32-43e2-4810-9568-11877b2301ae',
      Q1: '0',
      Q2: '0',
      Q3: '0',
      Q4: '0',
    },
    5: {
      promotion_code: '713b3232-fc02-418c-bc4b-31a0206e356b',
      Q1: '0',
      Q2: '0',
      Q3: '0',
      Q4: '0',
    },
    6: {
      promotion_code: '8377dfb1-91df-471c-9c17-cc8d8c221c7b',
      Q1: '0',
      Q2: '0',
      Q3: '0',
      Q4: '0',
    },
    7: {
      promotion_code: '860b1f08-b9b6-417b-95ce-d10fb1fdd4ad',
      Q1: '0',
      Q2: '0',
      Q3: '1',
      Q4: '0',
    },
    8: {
      promotion_code: '9396b3fa-2ac1-448b-87b1-591a47d07147',
      Q1: '0',
      Q2: '0',
      Q3: '0',
      Q4: '0',
    },
  };
  const [isShow, setShow] = useState(false);
  const popup = () => {
    setShow(!isShow);
  };
  const drop = () => {
    popup();
    // code for drop row
  };

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

  console.log(data)


  return (
    <>
      <aside>
        <SideBar role={role} showPromo="true" />
      </aside>
      <main className="container mx-auto lg:ml-64 px-10 space-y-4">
        <Breadcrumb first_name="Promotion" current="Promotion Overall" />
        <h1 className="text-4xl font-bold py-6">Promotion Overall</h1>
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
          <div className="pt-2 px-4">
            {/* <SearchBar placeholder="Search by Promotion Code" /> */}
          </div>
          <p className="pl-4">Number of promotion code using in each quarter</p>
          <div className="p-4">
            <div class="relative overflow-x-auto overflow-y-auto h-96 rounded-lg">
              <table class="w-full text-sm text-center text-gray-500">
                <thead class="text-xs text-gray-700 bg-[#E3C291] uppercase sticky top-0">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      Promotion Code
                    </th>
                    <th scope="col" class="px-6 py-3">
                      2023-Quarter1
                    </th>
                    <th scope="col" class="px-6 py-3">
                      2023-Quarter2
                    </th>
                    <th scope="col" class="px-6 py-3">
                      2023-Quarter3
                    </th>
                    <th scope="col" class="px-6 py-3">
                      2023-Quarter4
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data && data.allPromotion?.map((key) => (
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row" class="bg-[#e1e1e1] px-6 py-4 font-normal">
                        {key['promotionCode']}
                      </th>
                      <th scope="row" class="px-6 py-4 font-normal">
                        {key['orderPromotions']
                          .filter((a)=>{
                            return ((new Date(a.order.orderDate) >= (new Date(2023, 0, 1)))
                            && ((new Date(a.order.orderDate)) < new Date(2023, 3, 1)))
                        }).length
                        }
                      </th>
                      <td scope="row" class="px-6 py-4 font-normal">
                        {key['orderPromotions']
                          .filter((a)=>{
                            return ((new Date(a.order.orderDate) >= (new Date(2023, 3, 1)))
                            && ((new Date(a.order.orderDate)) < new Date(2023, 6, 1)))
                        }).length
                        }
                      </td>
                      <th scope="row" class="px-6 py-4 font-normal">
                      {key['orderPromotions']
                          .filter((a)=>{
                            return ((new Date(a.order.orderDate) >= (new Date(2023, 6, 1)))
                            && ((new Date(a.order.orderDate)) < new Date(2023, 9, 1)))
                        }).length
                      }
                      </th>
                      <th scope="row" class="px-6 py-4 font-normal">
                      {key['orderPromotions']
                          .filter((a)=>{
                            return ((new Date(a.order.orderDate) >= (new Date(2023, 9, 1)))
                            && ((new Date(a.order.orderDate)) < new Date(2023, 12, 1)))
                        }).length
                      }
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

export default PromotionAna;
