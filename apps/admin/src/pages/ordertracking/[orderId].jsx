import { useRouter } from 'next/router';
import { SideBar } from '@/components/SideBar';
import { Sidebar, Breadcrumb, TextInput} from 'ui';
import { useEffect, useState } from 'react';
import { gql, useQuery, useLazyQuery } from '@apollo/client';
import Link from 'next/link';

const ORDER_QUERY = gql`
query SearchOrderCartByPKs($orderId: String) {
  searchOrderCartByPKs(orderId: $orderId) {
    cart {
      product {
        productName
        productId
      }
      quantity
    }
    order {
      subOrders {
        item {
          itemId
          product {
            productName
            productId
          }
        }
      }
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

const Ordertracking = () => {

    const router = useRouter();
    const { orderId } = router.query

    const [searchFilter, setSearchFilter] = useState(0);
    const [executeSearch, { data, loading, error }] = useLazyQuery(ORDER_QUERY, {pollInterval: 3000});
    // const [productlist, setProductList] = useState('');
    const { data: staff, loading: loadingposition, error: errorposition } = useQuery(STAFF_ROLE);
    const [role, setRole] = useState('');

    useEffect(() => {
      // console.log(staff?.StaffProfile[0].position.positionId);
      setRole(staff?.StaffProfile[0].position.positionId);
    }, [staff])

    useEffect(() => {
      executeSearch({
        variables: {
          'orderId': orderId
        }
      })
    }, [executeSearch, router, orderId])

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
        <>
            <aside>
                <SideBar role={role} showOrder="true" />
            </aside>
            <main className="container mx-auto lg:ml-64 px-10 space-y-4 pb-8">
                <Breadcrumb first_name="Order Management" second_name="Order" second="/order" current="Order Tracking" />
                <h1 className="text-4xl font-bold pt-6 pb-4">Order Tracking</h1>
                <div className="w-full rounded-lg border-2 border-black p-4 space-y-2 bg-white">
                    <div className="grid grid-cols-2 gap-4">
                        <TextInput type="readOnly" defaultValue={router.query.orderId} label="Order ID" />

                        <div className="col-span-2">
                            <h1 className="text-xl font-bold pb-2">Stock Preparing</h1>
                            <div class="relative overflow-x-auto rounded-lg h-60">
                                <table class="w-full text-sm text-center text-gray-500 ">
                                    <thead class="text-xs text-gray-700 bg-[#E3C291] uppercase sticky top-0">
                                        <tr>
                                            <th scope="col" class="px-6 py-3">
                                                Product Name
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Quantity
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Active
                                            </th>
                                            {role == 'INV' || 'DEV' ? (
                                                <th scope="col" class="px-6 py-3">
                                                    Check-Out and Check-In
                                                </th>) : (
                                                <></>
                                            )}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data && data.searchOrderCartByPKs?.map((key) => (
                                            <tr class="bg-white border-b">
                                                <td class="px-6 py-4">
                                                    {key.cart.product.productName}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {key.cart.quantity}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {key.order.subOrders?.filter(so=>{
                                                        return so.item.product.productId == key.cart.product.productId
                                                    }).length
                                                    }
                                                </td>
                                                { (role == 'INV' || 'DEV' ) ? (
                                                    <td class="px-6 py-4">
                                                        <Link href="/update/itemcheck/[...dt]" as={`/update/itemcheck/${key.cart.product.productId}/${orderId}`} class="font-medium text-red-600 hover:underline">update</Link>
                                                    </td>) : (
                                                    <></>
                                                )}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {/* <div className="col-span-2">
                            <h1 className="text-xl font-bold pb-2">Car Assign</h1>
                            <div class="relative overflow-x-auto rounded-lg h-60">
                                <table class="w-full text-sm text-center text-gray-500 ">
                                    <thead class="text-xs text-gray-700 bg-[#E3C291] uppercase sticky top-0">
                                        <tr>
                                            <th scope="col" class="px-6 py-3">
                                                Car Licence
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Is Return
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Staff Firstname
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Staff Lastname
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Object.keys(order_detail).map((key) => (
                                            <tr class="bg-white border-b">
                                                <th scope="row" class="px-6 py-4 font-normal">
                                                    {order_detail[key]['car_licence']}
                                                </th>
                                                <td class="px-6 py-4">
                                                    {order_detail[key]['is_return']}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {order_detail[key]['staff_fname']}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {order_detail[key]['staff_lname']}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div> */}
                    </div>
                </div>
            </main>
        </>
    );
};

export default Ordertracking;
