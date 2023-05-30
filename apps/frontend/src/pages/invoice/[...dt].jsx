import { Button } from 'ui';
import Link from 'next/link';
import Image from 'next/image';
import { gql, useMutation } from '@apollo/client';
import ClientOnly from '@/components/ClientOnly';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// dynamic send orderID and times
const ORDER_QUERY = gql`
  query Query($orderId: String) {
    searchOrderByOrderId(orderId: $orderId) {
      orderCarts {
        cart {
          product {
            productName
            pricePerDay
          }
          quantity
        }
      }
      orderId
      orderDate
      sendingDate
      returnDate
      addressDetail
      street
      subdistrict
      zipcode
      totalPrice
    }
  }
`;
const INVOICE_QUERY = gql`
  query SearchInvoiceByOrderId($orderId: String) {
    searchInvoiceByOrderId(orderId: $orderId) {
      invoiceId
    }
  }
`;

export const INFO = () => {
const router = useRouter();
const [executeSearchOrder, { data: data_order, loading: loading_order, error: error_order }] = useLazyQuery(ORDER_QUERY, {pollInterval: 1000});
const [executeSearchInvoice, { data: data_invoice, loading: loading_invoice, error: error_invoice }] = useLazyQuery(INVOICE_QUERY, {pollInterval: 1000});

useEffect(()=>{
    executeSearchOrder({
        variables: {
            "orderId": router.query[0]
        }
    })
    executeSearchInvoice({
        variables: {
            "orderId": router.query[0]
        }
    })
}, [router, executeSearchOrder, executeSearchInvoice])

  const orderData = {
    order_id: '0d02a456-b5c7-4377-84c7-41848c84e5c3',
    order_date: '2023-05-25T04:25:23.000Z',
    sending_date: '2023-06-01T12:00:00.000Z',
    return_date: '2023-07-04T17:00:00.000Z',
    address_detail: '1044/70',
    street: 'Phetkasem',
    sub_distruct: 'Nongkangplu',
    distruct: 'Naongkham',
    province: 'KrungThep',
    zipcode: '10160',
    receiver_tel: '0951165489',
  };
  const cartList = {
    1: {
      product_name: 'Foot Ball',
      quantity: 1,
      price_per_day: 100,
      pic_URL: '/ikea_black_chair.png',
    },
    2: {
      product_name: 'ADiDos chair',
      quantity: 1,
      price_per_day: 100,
      pic_URL: '/ikea_black_chair.png',
    },
    3: {
      product_name: 'ADiDos chair',
      quantity: 2,
      price_per_day: 100,
      pic_URL: '/ikea_black_chair.png',
    },
    4: {
      product_name: 'Gold balloon',
      quantity: 1,
      price_per_day: 100,
      pic_URL: '/ikea_black_chair.png',
    },
  };
  const deliveryFee = 240;
  let priceProduct = 0;
  Object.keys(cartList).map((key) => {
    priceProduct += cartList[key]['quantity'] * cartList[key]['price_per_day'];
  });
  const allPrice = priceProduct + deliveryFee;

  const payment = {
    deposit: 500,
    payment_round: {
      1: {
        total: 370,
      },
      2: {
        total: 370,
      },
    },
  };

  const invoiceInfo = {};

  return (
    <>
      <div className="mx-16 mx-auto px-4">
        <div className=" relative mx-4 mb-4 w-full rounded-md border-2 border-black px-12 py-6">
          <div className="mb-4 text-3xl font-bold md:text-4xl">
            Order {orderData.order_id}
          </div>
          <div className="mb-4 text-3xl font-bold md:text-4xl">
            {/* {data_invoice.searchInvoiceByOrderId.map(x => {
return(
    <p>{x.invoiceId}</p>
)
            })} */}
          </div>
          <div className="mb-4 grid grid-cols-7">
            <div className="col-span-2">
              <p>วันทำรายการสินค้า</p>
              <p className="ml-4 font-bold">{orderData.order_date}</p>
            </div>
            <div className="col-span-2">
              <p>วันรับสินค้า</p>
              <p className="ml-4 font-bold">{orderData.sending_date}</p>
            </div>
            <div className="col-span-2">
              <p>วันคืนสินค้า</p>
              <p className="ml-4 font-bold">{orderData.return_date}</p>
            </div>
          </div>
          <div>
            <div> ที่อยู่ </div>
            <div className="ml-4 font-bold">{orderData.receiver_tel}</div>
            <div className=" ml-4">
              {orderData.address_detail} {orderData.street}{' '}
              {orderData.sub_distruct} {orderData.distruct} {orderData.distruct}{' '}
              {orderData.province} {orderData.zipcode}
            </div>
          </div>

          <div className="p-4">
            <div class="relative overflow-x-auto rounded-lg">
              <table class="w-full text-center text-sm text-black">
                <thead class="bg-[#E1E1E1] text-xs uppercase text-gray-700">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      Item
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Qty
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Price/Day
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(cartList).map((key) => (
                    <tr class="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                      <th
                        scope="row"
                        class="whitespace-nowrap px-6 py-4 font-bold font-medium dark:text-white"
                      >
                        {cartList[key]['product_name']}
                      </th>
                      <td class="px-6 py-4">{cartList[key]['quantity']}</td>
                      <td class="px-6 py-4">
                        {cartList[key]['price_per_day']}
                      </td>
                      <td class="px-6 py-4">
                        {cartList[key]['quantity'] *
                          cartList[key]['price_per_day']}
                      </td>
                    </tr>
                  ))}
                  <tr class="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                    <th
                      scope="row"
                      class="whitespace-nowrap px-6 py-4 font-bold font-medium dark:text-white"
                    >
                      ค่าส่งสินค้า
                    </th>
                    <td class="px-6 py-4">{''}</td>
                    <td class="px-6 py-4 text-right">{''}</td>
                    <td class="border-b px-6 py-4 dark:border-gray-700 dark:bg-gray-800">
                      {deliveryFee}
                    </td>
                  </tr>
                  <tr class="bg-white">
                    <th
                      scope="row"
                      class="whitespace-nowrap px-6 py-4 font-bold font-medium dark:text-white"
                    >
                      {''}
                    </th>
                    <td class="px-6 py-4">{''}</td>
                    <td class="px-6 py-4 text-right">Total Amount</td>
                    <td class="border-b bg-white px-6 py-4 dark:border-gray-700 dark:bg-gray-800">
                      {allPrice}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="p-4">
            <div class="relative overflow-x-auto rounded-lg">
              <table class="w-full bg-white text-center text-sm text-black">
                <thead class="bg-[#E1E1E1] text-xs uppercase text-gray-700">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      การแบ่งจ่าย
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Invoice ID
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class=" border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                    <th
                      scope="row"
                      class="whitespace-nowrap px-6 py-4 font-bold font-medium dark:text-white"
                    >
                      มัดจำ
                    </th>
                    <td></td>
                    <td class="px-6 py-4">{payment['deposit']}</td>
                  </tr>
                  {Object.keys(payment['payment_round']).map((key) => (
                    <tr class=" border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                      <th
                        scope="row"
                        class="whitespace-nowrap px-6 py-4 font-bold font-medium dark:text-white"
                      >
                        แบ่งจ่ายงวดที่ {key}
                      </th>
                      <td class="px-6 py-4">{invoiceInfo.invoiceId}</td>
                      <td class="px-6 py-4">
                        {payment['payment_round'][key]['total']}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-4">
            <div className="mb-2.5">ช่องทางการจ่ายเงิน</div>
            <div className="flex items-center gap-4">
              <div className="h-[100px] w-[100px]">
                <Image
                  src={'/QR.png'}
                  width={100}
                  height={100}
                  alt="QR"
                ></Image>
              </div>
              <div>
                <div>เลขบัญชี: xxxxxxxxxxx</div>
                <div>ชื่อบัญชี: ChowChowCompany999</div>
              </div>
            </div>
          </div>
          <div className="flex gap-x-20">
            <Link className="w-full" href={'/products'}>
              <Button text={'เรียบร้อย'} type={'white'} />
            </Link>
            <Link className="w-full" href={'/billing'}>
              <Button text={'ไปหน้าแจ้งชำระเงิน'} type={'submit'} />
            </Link>
          </div>
          <div className="absolute right-4 top-4 flex flex-col items-center">
            <Image
              src={'/dog.svg'}
              width={50}
              height={50}
              alt="chow chow logo"
            ></Image>
            <div className="font'bold text-xs">
              <div>CHOW CHOW</div>
              <div>-Online Rental-</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
