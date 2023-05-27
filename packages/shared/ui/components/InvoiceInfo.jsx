import { Button } from "./Button";
import Link from 'next/link';
import Image from 'next/image';

export const InvoiceInfo = () => {
  const orderData = {
    'order_id':'XXXXXXXXXXX',
    'order_date':'asdasdasd',
    'sending_date':'2023/01/30',
    'return_date':'2023/01/30',
    'address_detail':'detail',
    'street':'street',
    'sub_distruct':'subdis',
    'distruct':'distruct',
    'province':'province',
    'zipcode':'zipcode',
    'receiver_tel':'0123456789',
  }
  const cartList = {
    1: {
      product_name: "Black Table",
      quantity: 3,
      price_per_day: 66,
      pic_URL: "/ikea_black_chair.png",
    },
    2: {
      product_name: "Black Table",
      quantity: 3,
      price_per_day: 66,
      pic_URL: "/ikea_black_chair.png",
    },
    3: {
      product_name: "Black Table",
      quantity: 3,
      price_per_day: 66,
      pic_URL: "/ikea_black_chair.png",
    },
    4: {
      product_name: "Black Table",
      quantity: 3,
      price_per_day: 66,
      pic_URL: "/ikea_black_chair.png",
    },
    }
    const deliveryFee = 500;
    let priceProduct = 0;
    Object.keys(cartList).map(key=>{
      priceProduct += cartList[key]['quantity']*cartList[key]['price_per_day']
    })
    const allPrice = priceProduct + deliveryFee;

    const payment = {
      deposit:500,
      payment_round:{
        1:{
          total:670,
        },
        2:{
          total:60,
        },
      },
    }

  return (
    <>
      <div className="mx-auto px-4 mx-16">
        <div className=" relative mb-4 w-full rounded-md border-2 border-black px-12 py-6 mx-4">
            <div className="text-3xl md:text-4xl font-bold mb-4">Order {orderData.order_id}</div>
            <div className='mb-4 grid grid-cols-7'>
              <div className='col-span-2'>
                <p>วันทำรายการสินค้า</p>
                <p className='ml-4 font-bold'>{orderData.order_date}</p>
              </div>
              <div className='col-span-2'>
                <p>วันรับสินค้า</p>
                <p className='ml-4 font-bold'>{orderData.sending_date}</p>
              </div>
              <div className='col-span-2'>
                <p>วันคืนสินค้า</p>
                <p className='ml-4 font-bold'>{orderData.return_date}</p>
              </div>
            </div>
            <div>
              <div> ที่อยู่ </div>
              <div className='font-bold ml-4'>{orderData.receiver_tel}</div>
              <div className=' ml-4'>{orderData.address_detail} {orderData.street} {orderData.sub_distruct} {orderData.distruct} {orderData.distruct} {orderData.province} {orderData.zipcode}</div>
            </div>

            <div className="p-4">
              <div class="relative overflow-x-auto rounded-lg">
                  <table class="w-full text-sm text-center text-black">
                      <thead class="text-xs text-gray-700 bg-[#E1E1E1] uppercase">
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
                              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                  <th scope="row" class="px-6 py-4 font-medium font-bold whitespace-nowrap dark:text-white">
                                      {cartList[key]['product_name']}
                                  </th>
                                  <td class="px-6 py-4">
                                      {cartList[key]['quantity']}
                                  </td>
                                  <td class="px-6 py-4">
                                      {cartList[key]['price_per_day']}
                                  </td>
                                  <td class="px-6 py-4">
                                      {cartList[key]['quantity'] * cartList[key]['price_per_day']}
                                  </td>
                              </tr>
                          ))}
                              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                  <th scope="row" class="px-6 py-4 font-medium font-bold whitespace-nowrap dark:text-white">
                                    ค่าส่งสินค้า
                                  </th>
                                  <td class="px-6 py-4">
                                    {''}
                                  </td>
                                  <td class="px-6 py-4 text-right">
                                    {''}
                                  </td>
                                  <td class="px-6 py-4 border-b dark:bg-gray-800 dark:border-gray-700">
                                    {deliveryFee}
                                  </td>
                              </tr>
                              <tr class="bg-white">
                                  <th scope="row" class="px-6 py-4 font-medium font-bold whitespace-nowrap dark:text-white">
                                    {''}
                                  </th>
                                  <td class="px-6 py-4">
                                    {''}
                                  </td>
                                  <td class="px-6 py-4 text-right">
                                    Total Amount
                                  </td>
                                  <td class="px-6 py-4 bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    {allPrice}
                                  </td>
                              </tr>
                      </tbody>
                  </table>
              </div>
            </div>

            <div className="p-4">
              <div class="relative overflow-x-auto rounded-lg">
                  <table class="w-full text-sm text-center text-black">
                      <thead class="text-xs text-gray-700 bg-[#E1E1E1] uppercase">
                          <tr>
                              <th scope="col" class="px-6 py-3">
                                การแบ่งจ่าย
                              </th>
                              <th scope="col" class="px-6 py-3">
                                Total
                              </th>
                          </tr>
                      </thead>
                      <tbody>
                        <tr class=" bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium font-bold whitespace-nowrap dark:text-white">
                                มัดจำ
                            </th>
                            <td class="px-6 py-4">
                                {payment['deposit']}
                            </td>
                        </tr>
                          {Object.keys(payment['payment_round']).map((key) => (
                              <tr class=" bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                  <th scope="row" class="px-6 py-4 font-medium font-bold whitespace-nowrap dark:text-white">
                                      แบ่งจ่ายงวดที่ {key}
                                  </th>
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
              <div className='mb-2.5'>ช่องทางการจ่ายเงิน</div>
              <div className='flex gap-4 items-center'>
                <div className='w-[100px] h-[100px]'>
                  <Image src={'/QR.png'} width={100} height={100} alt="QR"></Image>
                </div>
                <div>
                  <div>เลขบัญชี: xxxxxxxxxxx</div>
                  <div>ชื่อบัญชี: ChowChowCompany999</div>
                </div>
              </div>
            </div>
            <div className="flex gap-x-20">
              <Link className="w-full" href={'/products'}>
                <Button text={'เรียบร้อย'} type={'white'}/>
              </Link>
              <Link className="w-full" href={'/billing'}>
                <Button text={'ไปหน้าแจ้งชำระเงิน'} type={'submit'}/>
              </Link>
            </div>
            <div className="absolute top-4 right-4 flex flex-col items-center">
                <Image src={'/dog.svg'} width={50} height={50} alt="chow chow logo"></Image>
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
