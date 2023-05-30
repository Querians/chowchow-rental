import { gql, useQuery, useLazyQuery } from '@apollo/client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { SearchBar, Button } from 'ui';

const ITEM_QUERY = gql`
query SearchItemByItemId($itemId: String) {
  searchItemByItemId(itemId: $itemId) {
    itemId
      product {
        productName
        productId
      }
      subOrders {
        order {
          orderId
          status {
            statusDef
            statusCode
          }
        }
      }
      itemStatus {
        itemStatusName
        itemStatusId
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

export const Order2Table = ({ popup }) => {

  const [searchFilter, setSearchFilter] = useState('');
  const [executeSearch, { data, loading, error }] = useLazyQuery(ITEM_QUERY, {pollInterval: 1000});
  // const [productlist, setProductList] = useState('');
  const { data: staff, loading: loadingposition, error: errorposition } = useQuery(STAFF_ROLE);
  const [role, setRole] = useState('');

  useEffect(() => {
    // console.log(staff?.StaffProfile[0].position.positionId);
    setRole(staff?.StaffProfile[0].position.positionId);
  }, [staff])

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

  return (
    <div className='space-y-4'>
      <div className="w-full rounded-lg border-2 border-black p-4 bg-white">
        <h1 className="text-xl font-bold">All Item In Use</h1>
        <span className="text-red-300 p-4">You can search by some part of item ID</span>
        <div className="pt-2 px-4">
          <SearchBar
            placeholder="Search by ItemId"
            onSubmit={(e) => {
              e.preventDefault(true);
              executeSearch({
                variables: { itemId: searchFilter }
              })
            }}
            onChange={(e) => {
              setSearchFilter(e.target.value)
              console.log(e.target.value)
            }}
          />
        </div>
        <div className="p-4">
          <div class="relative overflow-x-auto rounded-lg h-60">
            <table class="w-full text-sm text-center text-gray-500">
              <thead class="text-xs text-gray-700 bg-[#E3C291] uppercase sticky top-0">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Item ID
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Product Name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Order ID
                  </th>
                </tr>
              </thead>
              <tbody>
                {data && data.searchItemByItemId?.map((item) => {
                  if (item.itemStatus.itemStatusId == "N"){

                    return (
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row" class="px-6 py-4 font-normal">
                        {item['itemId']}
                      </th>
                      <td class="px-6 py-4">
                        {item.product['productName']}
                      </td>
                      <td class="px-6 py-4">
                        {item.subOrders.findLast(elem=>{
                          return elem.order.status['statusCode'] != 400
                        })?.order['orderId']

                        }
                      </td>
                    </tr>
                  )
                  }
              }
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

