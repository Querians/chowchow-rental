import { CartContact, CartAddress, CartPayment, CartSummary, TextInput, Button } from 'ui';
import { useState, createContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const AppContext = createContext(null);

export const CartInfo = () => {
  // ดึงมา
  const Address = {
    1: {
      receiver_tel: '0XXXXXXXXX',
      lat: 13.736988050394881,
      lng: 100.52436590194702,
      address: {
        detail: 'แง่ม',
        street: 'เธอถามฉันว่า',
        sub_district: 'บ้านของฉัน',
        district: 'มันอยู่ไหนน่ะหรอ',
        province: 'อยากลองไปก็หาทางดูเซ่',
        zipcode: 'ฉันทิ้งเบาะแสไว้หมดแล้ว !!!',
      },
    },
    2: {
      receiver_tel: '0YYYYYYYYY',
      lat: 13.736988050394881,
      lng: 100.52436590194702,
      address: {
        detail: 'แง่ม',
        street: 'เธอถามฉันว่า',
        sub_district: 'บ้านของฉัน',
        district: 'มันอยู่ไหนน่ะหรอ',
        province: 'อยากลองไปก็หาทางดูเซ่',
        zipcode: 'ฉันทิ้งเบาะแสไว้หมดแล้ว !!!',
      },
    },
  };
  const email = 'testtest@gmai.com';
  const tel = '0123456789';

  // ส่งคืน
  const [data, setData] = useState({
    email: email,
    tel: tel,
    select_address: '',
    lat: '',
    lng: '',
    address: {
      detail: '',
      street: '',
      sub_district: '',
      district: '',
      province: '',
      zipcode: '',
    },
    sending_date: '',
    return_date: '',
    receiver_tel: '',
    payment_times: '',
    payment_method: '',
  });

  const [isSummary, setIsSummary] = useState(false);
  console.log(data)
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
  let total_raw = 0
  let total_price = 0
  let total = 0
  let delivery_fee = 240
  let allQuantity = []
  let allPriceperday = []
  // query จากโปรโมชั่นโค้ด
  let discount = 20
  const calTotal_raw = () => {
    {
      Object.keys(cartList).map((key) => {
        total_raw = total_raw + (cartList[key]['quantity']) * (cartList[key]['price_per_day'])
      })
    }
  };

  const calTotal = () => {
    total_price = total_raw + delivery_fee - discount
  };
  calTotal_raw();
  calTotal();
  return (
    <>
      <AppContext.Provider value={{ data, setData, isSummary, setIsSummary }}>
        {!isSummary ? (
          <div>
            <div className="flex flex-col-reverse md:flex-row py-4 gap-10">
              <div className="basis-1/2">
                <div>
                  <CartContact />
                  <CartAddress address={Address} />
                  <CartPayment
                    payment_method={{
                      mobile_banking: 'mobile banking',
                      debit_card: 'debit card',
                      credit_card: 'credit card',
                    }}
                    payment_times={{
                      2: 'แบ่งชำระจ่าย 2 งวด',
                      3: 'แบ่งชำระจ่าย 3 งวด',
                      4: 'แบ่งชำระจ่าย 4 งวด',
                    }}
                  />
                </div>
              </div>
              <div className="basis-1/2">
                <div className="w-full rounded-lg border border-2 border-black p-4 space-y-2">
                  <h1 className="text-2xl font-bold">รายการสินค้า</h1>
                  <div className="w-full rounded-lg h-72 px-4 overflow-auto space-y-2">
                    {Object.keys(cartList).map((key) => (
                      <div className="flex flex-cols-3 h-fit gap-4 border border-1 rounded items-center">
                        <div className="basic-1/4">
                          <Image
                            src={cartList[key]['pic_URL']}
                            className="w-full rounded justify-items-center p-1"
                            alt={cartList[key]['product_name']}
                            width={100}
                            height={100}
                            quality={100}
                          />
                        </div>
                        <div className="basic-3/4 p-4 pr-6 space-y-2 w-full">
                          <h2 className="text-xl font-bold">{cartList[key]['product_name']}</h2>
                          <div>

                          </div>
                          <div className="flex flex-row justify-between">
                            <p className="text-base font-bold">{cartList[key]['price_per_day']}
                              <span class="inline font-normal pl-1"> THB </span>
                            </p>
                            <p className="text-base font-normal">x {cartList[key]['quantity']} ชิ้น </p>
                          </div>

                        </div>
                      </div>
                    ))}
                  </div>
                  <form action="">
                    <div className="flex flex-row items-center px-4 gap-4">
                      <div className="basis-2/3">
                        <TextInput placeholder="กรอกรหัสโปรโมชัน" />
                      </div>
                      <div className="basis-1/3">
                        <Button type="submit" text="CONFIRM" />
                      </div>
                    </div>
                  </form>

                  <div className="flex flex-row px-4">
                    <div className="basis-2/3 space-y-2">
                      <p>รวมการสั่งซื้อ</p>
                      <p>การจัดส่ง</p>
                      <p>ส่วนลด</p>
                    </div>
                    <div className="basis-1/3 space-y-2">
                      <p className="text-end">{total_raw} THB</p>
                      <p className="text-end">{delivery_fee} THB</p>
                      <p className="text-end text-red-600">-{discount} THB</p>
                    </div>
                  </div>
                  <div className="px-4">
                    <div className="border border-2 rounded border-gray-500"></div>
                  </div>
                  <div className="flex flex-row px-4">
                    <div className="basis-2/3">
                      <p className="font-bold">ราคาสุทธิ</p>
                    </div>
                    <div className="basis-1/3">
                      <p className="text-end font-bold">{total_price} THB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex flex-col-reverse md:flex-row py-4 gap-10">
              <div className="basis-1/2">
                <div>
                  <CartSummary />
                </div>
              </div>
              <div className="basis-1/2">
                <div className="w-full rounded-lg border border-2 border-black p-4 space-y-2">
                  <h1 className="text-2xl font-bold">รายการสินค้า</h1>
                  <div className="w-full rounded-lg h-72 px-4 overflow-auto space-y-2">
                    {Object.keys(cartList).map((key) => (
                      <div className="flex flex-cols-3 h-fit gap-4 border border-1 rounded items-center">
                        <div className="basic-1/4">
                          <Image
                            src={cartList[key]['pic_URL']}
                            className="w-full rounded justify-items-center p-1"
                            alt={cartList[key]['product_name']}
                            width={100}
                            height={100}
                            quality={100}
                          />
                        </div>
                        <div className="basic-3/4 p-4 pr-6 space-y-2 w-full">
                          <h2 className="text-xl font-bold">{cartList[key]['product_name']}</h2>
                          <div>

                          </div>
                          <div className="flex flex-row justify-between">
                            <p className="text-base font-bold">{cartList[key]['price_per_day']}
                              <span class="inline font-normal pl-1"> THB </span>
                            </p>
                            <p className="text-base font-normal">x {cartList[key]['quantity']} ชิ้น </p>
                          </div>

                        </div>
                      </div>
                    ))}
                  </div>
                  <form action="">
                    <div className="flex flex-row items-center px-4 gap-4">
                      <div className="basis-2/3">
                        <TextInput placeholder="กรอกรหัสโปรโมชัน" />
                      </div>
                      <div className="basis-1/3">
                        <Button type="submit" text="CONFIRM" />
                      </div>
                    </div>
                  </form>

                  <div className="flex flex-row px-4">
                    <div className="basis-2/3 space-y-2">
                      <p>รวมการสั่งซื้อ</p>
                      <p>การจัดส่ง</p>
                      <p>ส่วนลด</p>
                    </div>
                    <div className="basis-1/3 space-y-2">
                      <p className="text-end">{total_raw} THB</p>
                      <p className="text-end">{delivery_fee} THB</p>
                      <p className="text-end text-red-600">-{discount} THB</p>
                    </div>
                  </div>
                  <div className="px-4">
                    <div className="border border-2 rounded border-gray-500"></div>
                  </div>
                  <div className="flex flex-row px-4">
                    <div className="basis-2/3">
                      <p className="font-bold">ราคาสุทธิ</p>
                    </div>
                    <div className="basis-1/3">
                      <p className="text-end font-bold">{total_price} THB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-cols justify-center">
              <div className="col-span-2">
                <Link href="INVOICE_PAGE_PATH">
                  <Button text={'CONFIRM ORDER'} type={'submit'} />
                </Link>
              </div>
            </div>
            <p className="text-center text-[#C26666] pt-2">
              *โปรดตรวจสอบข้อมูลทั้งหมดให้ถูกต้องก่อนกด CONFIRM*
            </p>
          </div>
        )}
      </AppContext.Provider>
    </>
  );
};
