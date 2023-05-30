import { Sidebar, Breadcrumb, TextInput, Button } from 'ui';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { gql, useQuery, useLazyQuery, useMutation } from '@apollo/client';
import ClientOnly from '@/components/ClientOnly';
import { useEffect, useState } from 'react';

const PRODUCT_QUERY = gql`
  query queryItem($productId: String) {
    searchItemByItemId_ProductId(productId: $productId) {
      itemId
      itemStatus {
        itemStatusName
        itemStatusId
      }
      stockAddress
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

const ADDSUBORDER = gql`
mutation Mutation($orderId: String!, $itemId: String!) {
  addSubOrder(orderId: $orderId, itemId: $itemId) {
    item {
      itemId
    }
    order {
      orderId
    }
  }
}
`;

const UPDATEITEMSTATUS = gql`
mutation Mutation($itemId: String!, $itemStatusId: String!) {
  updateItemstatusInItem(itemId: $itemId, itemStatusId: $itemStatusId) {
    itemId
  }
}
`;



const ItemCheckInOut = () => {

  const router = useRouter();
  const { dt } = router.query

  const [productId, setProduct] = useState('');
  const [orderId, setOrderId] = useState('');
  const [itemId, setItemId] = useState('');

  useEffect(() => {
    setProduct(router.query.dt?.[0])
    setOrderId(router.query.dt?.[1])
  }, [router]);

  const [addSubOrder] = useMutation(ADDSUBORDER, {
    variables: {
      'itemId': itemId,
      'orderId': orderId
    },
    onCompleted: () => {
      // router.push('/categoryproblem')
    }
  })

  console.log(itemId)

  const [updateItemstatusInItem] = useMutation(UPDATEITEMSTATUS, {
    variables: {
      'itemId': itemId,
      'itemStatusId': 'N'
    },
    onCompleted: () => {
      // router.push('/categoryproblem')
    }
  })

  const onSubmit = (e) => {
    e.preventDefault();
    addSubOrder().catch((err) => alert(err))
    updateItemstatusInItem().catch((err) => alert(err))
  }

  const { data, loading, error } = useQuery(PRODUCT_QUERY,
    {
      pollInterval: 1000,
      variables: { productId: productId }
    });

  const { data: data2, loading: loading2, error: error2 } = useQuery(PRODUCT_QUERY,
    {
      pollInterval: 1000,
      variables: { productId: productId }
    });


  // const [productlist, setProductList] = useState('');
  const { data: staff, loading: loadingposition, error: errorposition } = useQuery(STAFF_ROLE);
  const [role, setRole] = useState('');

  return (
    <>
      <aside>
        <Sidebar role={role} showStock="true" />
      </aside>

      <main className="container mx-auto lg:ml-64 px-10 ">
        <Breadcrumb first_name="Order Management" second_name="Order" second="/order" third_name="Order Tracking" third="/ordertracking" current="Edit Item status" />
        <h1 className="text-4xl font-bold py-6">Item Check-Out and Check-In</h1>
        <div className="space-y-2">
          <div className="w-full rounded-lg border-2 border-black p-4 bg-white space-y-4">
            <h1 className="text-2xl font-bold">Item Check-out</h1>
            <TextInput type="readOnly" value={productId} label="Product Name" />
            <div class="relative overflow-x-auto rounded-lg h-60">
              <table class="w-full text-sm text-center text-gray-500 ">
                <thead class="text-xs text-gray-700 bg-[#E3C291] uppercase sticky top-0">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      Item ID
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Stock Address
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Item Status
                    </th>
                    {role == 'INV' || 'DEV' ? (
                      <th scope="col" class="px-6 py-3">
                        Check In
                      </th>) : (
                      <></>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {data && data?.searchItemByItemId_ProductId?.map((item) => (
                    <tr class="bg-white border-b">
                      <th scope="row" class="px-6 py-4 font-normal">
                        {item.itemId}
                      </th>
                      <td class="px-6 py-4">
                        {item.stockAddress}
                      </td>
                      <td class="px-6 py-4">
                        {item.itemStatus.itemStatusName}
                      </td>
                      {role == 'INV' || 'DEV' ? (
                        <td class="px-6 py-4">
                          <Link href="/update/itemstatus/[...dt]"  as={`/update/itemstatus/${item.itemStatus.itemStatusId}/${item.itemId}`} class="font-medium text-red-600 hover:underline">update</Link>
                        </td>) : (
                        <></>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {role == "INV" || "DEV" ? (<form action="">
            <div className="w-full rounded-lg border-2 border-black p-4 bg-white">
              <div className="space-y-4">
                <h1 className="text-2xl font-bold">Item Check-out</h1>
                <div className="grid grid-cols-1 grid-flow-row gap-4">
                  <TextInput placeholder="" label="Item ID" constraint="^([0-9]+([.][0-9]*)?|[.][0-9]+)$" onChange={e => setItemId(e.target.value)} />
                </div>
                <div class="relative overflow-x-auto rounded-lg h-60">
                  <table class="w-full text-sm text-center text-gray-500 ">
                    <thead class="text-xs text-gray-700 bg-[#E3C291] uppercase sticky top-0">
                      <tr>
                        <th scope="col" class="px-6 py-3">
                          Item ID
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Stock Address
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Item Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data && data?.searchItemByItemId_ProductId?.map((item) => (
                        <tr class="bg-white border-b">
                          <th scope="row" class="px-6 py-4 font-normal">
                            {item.itemId}
                          </th>
                          <td class="px-6 py-4">
                            {item.stockAddress}
                          </td>
                          <td class="px-6 py-4">
                            {item.itemStatus.itemStatusName}
                          </td>

                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div class="grid justify-items-center">
                  <Link href="">
                    <Button type="submit" text="Check-out" onClick={onSubmit} />
                  </Link>
                </div>
              </div>
            </div>
          </form>) : (<></>)}
        </div>
      </main>
    </>
  );
};

export default ItemCheckInOut;
