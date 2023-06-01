import { gql, useQuery, useLazyQuery } from '@apollo/client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { SearchBar, Button } from 'ui';

const PRODUCT_QUERY = gql`
  query SearchProductByprodName($productName: String) {
    searchProductByProductName(productName: $productName) {
      productId
      productName
      category {
        categoryId
      }
      pictureUrl
      pricePerDay
      weight
      height
      width
      depth
      color
      material
      description
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

export const ProductTable = () => {

  const [searchFilter, setSearchFilter] = useState('');
  const [executeSearch, { data, loading, error }] = useLazyQuery(PRODUCT_QUERY, {pollInterval: 1000});
  // const [productlist, setProductList] = useState('');
  const { data: staff, loading: loadingposition, error: errorposition } = useQuery(STAFF_ROLE);
  const [role, setRole] = useState('');

  const [isShow, setShow] = useState(false);
  const popup = () => {
    setShow(!isShow);
  };
  const drop = () => {
    popup();
    // code for drop row
  }


  useEffect(() => {
    console.log(staff?.StaffProfile[0].position.positionId);
    setRole(staff?.StaffProfile[0].position.positionId);
  }, [staff])

  useEffect(() => {
    executeSearch()
  }, [executeSearch])

  useEffect(() => {
    console.log(data)
  }, [data])

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
      {isShow && (
        <div id="alert-additional-content-2" class="p-4 mb-4 text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
          <div class="flex items-center">
            <svg aria-hidden="true" class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
            <span class="sr-only">Info</span>
            <h3 class="text-lg font-medium">This is a danger alert</h3>
          </div>
          <div class="mt-2 mb-4 text-sm">
            Are you sure to delete this row. If not please click &quot;Exit&quot; and if you want to delete please click &quot;Delete&quot;.
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
        <h1 className="text-xl font-bold">Products</h1>
        <div className="pt-2 px-4">
          <SearchBar
            placeholder="Search by Product Name"
            onSubmit={(e) => {
              e.preventDefault(true);
              executeSearch({
                variables: { productName: searchFilter }
              })
            }}
            onChange={(e) => {
              setSearchFilter(e.target.value)
              console.log(e.target.value)
            }}
          />
        </div>
        <div className="p-4">
          <div class="relative overflow-x-auto rounded-lg h-[60vh]">
            <table class="w-full text-sm text-center text-gray-500">
              <thead class="text-xs text-gray-700 bg-[#E3C291] uppercase sticky top-0">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Product name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Category ID
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Price Per Day
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Weight
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Height
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Width
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Depth
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Color
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Material
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Picture URL
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Description
                  </th>
                  {/* {role == 'INV' ||
                   role == 'DEV'? (
                    <th scope="col" class="px-6 py-3">
                      Edit
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
                {data && data.searchProductByProductName?.map((product, index) => (
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {product.productName}
                    </th>
                    <td class="px-6 py-4">
                      {product.category.categoryId}
                    </td>
                    <td class="px-6 py-4">
                      {product.pricePerDay}
                    </td>
                    <td class="px-6 py-4">
                      {product.weight}
                    </td>
                    <td class="px-6 py-4">
                      {product.height}
                    </td>
                    <td class="px-6 py-4">
                      {product.width}
                    </td>
                    <td class="px-6 py-4">
                      {product.depth}
                    </td>
                    <td class="px-6 py-4">
                      {product.color}
                    </td>
                    <td class="px-6 py-4">
                      {product.material}
                    </td>
                    <td class="px-6 py-4">
                      {product.pictureUrl}
                    </td>
                    <td class="px-6 py-4">
                      {product.description}
                    </td>
                    {/* {role == 'INV' ||
                     role == 'DEV'? (
                      <td class="px-6 py-4">
                        <a href="/editproduct" class="font-medium text-blue-600 hover:underline">Edit</a>
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
        <div className='grid justify-items-end pb-8'>
          <Link href="/productform">
            <Button type="normal" text="Add New Product" />
          </Link>
        </div>) : (
        <></>
      )}
    </div>
  )
}

