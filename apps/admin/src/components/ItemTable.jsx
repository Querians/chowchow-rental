import { gql, useQuery, useLazyQuery } from '@apollo/client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { SearchBar, Button } from 'ui';


const ITEM_QUERY = gql`
  query SearchItemByItemStatusId($itemStatusId: String) {
    searchItemByItemStatusId(itemStatusId: $itemStatusId) {
      itemId
      product {
        productId
      }
      itemRegisterDate
      stockAddress
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

export const ItemTable = ({ popup }) => {

  const [searchFilter, setSearchFilter] = useState('');
  const [executeSearch, { data, loading, error }] = useLazyQuery(ITEM_QUERY, {pollInterval: 1000});
  // const [productlist, setProductList] = useState('');
  const { data: staff, loading: loadingposition, error: errorposition } = useQuery(STAFF_ROLE);
  const [role, setRole] = useState('');

  // useEffect(() => {
  //   console.log(staff?.StaffProfile[0].position.positionId);
  //   setRole(staff?.StaffProfile[0].position.positionId);
  // }, [staff])

  useEffect(() => {
    executeSearch()
  }, [executeSearch])

  useEffect(() => {
    console.log(data)
  }, [data])

  useEffect(() => {
    // console.log(staff?.StaffProfile[0].position.positionId);
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

  return (
    <div className='space-y-4'>
      <div className="w-full rounded-lg border-2 border-black p-4 bg-white">
        <h1 className="text-xl font-bold">Items</h1>
        <div className="pt-2 px-4">
          <SearchBar
            placeholder="Search Items by StatusID"
            onSubmit={(e) => {
              e.preventDefault(true);
              executeSearch({
                variables: { itemStatusId: searchFilter }
              })
            }}
            onChange={(e) => {
              setSearchFilter(e.target.value)
              console.log(e.target.value)
            }}
          />
        </div>
        <div className="p-4">
          <div class="relative overflow-x-auto overflow-y-auto h-96 rounded-lg">
            <table class="w-full text-sm text-center text-gray-500">
              <thead class="text-xs text-gray-700 bg-[#E3C291] uppercase sticky top-0">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Item ID
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Product ID
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Item Register Date
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Stock_address
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Item_status ID
                  </th>
                  {role == 'INV' ||
                   role == 'DEV'? (
                    <th scope="col" class="px-6 py-3">
                      Update status
                    </th>) : (
                    <></>
                  )}
                  {/* {role == 'INV' ||
                   role == 'DEV'? (
                    <th scope="col" class="px-6 py-3">
                      Edit Detail
                    </th>) : (
                    <></>
                  )} */}
                  {/* {role == 'INV' ||
                   role == 'DEV'? (
                    <th scope="col" class="px-6 py-3">
                      Delete
                    </th>) : (
                    <></>
                  )} */}
                </tr>
              </thead>
              <tbody>
                {data && data.searchItemByItemStatusId?.map((item) => (
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      {item['itemId'] || '-'}
                    </th>
                    <th class="px-6 py-4 font-normal">
                      {item.product['productId'] || '-'}
                    </th>
                    <td class="px-6 py-4">
                      {item['itemRegisterDate'] || '-'}
                    </td>
                    <th class="px-6 py-4 font-normal">
                      {item['stockAddress'] || '-'}
                    </th>
                    <td class="px-6 py-4">
                      {item.itemStatus['itemStatusName'] || '-'}
                    </td>
                    {role == 'INV' ||
                     role == 'DEV'? (
                      <td class="px-6 py-4">
                        <Link href="/update/itemstatus/[...dt]"  as={`/update/itemstatus/${item.itemStatus.itemStatusId}/${item.itemId}`} class="font-medium text-blue-600 hover:underline">Update</Link>
                      </td>) : (
                      <></>
                    )}
                    {/* {role == 'INV' ||
                     role == 'DEV'? (
                      <td class="px-6 py-4">
                        <a href="/edititem" class="font-medium text-blue-600 hover:underline">Edit</a>
                      </td>) : (
                      <></>
                    )} */}
                    {/* {role == 'INV' ||
                     role == 'DEV'? (
                      <td class="px-6 py-4">
                        <a class="font-medium text-red-600 hover:underline" onClick={popup}>Delete</a>
                      </td>) : (
                      <></>
                    )} */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {role == 'INV' ||
       role == 'DEV'? (
        <div className='grid justify-items-end'>
          <Link href="/itemform">
            <Button type="normal" text="Add New Item" />
          </Link>
        </div>) : (
        <></>
      )}
    </div>
  )
}

