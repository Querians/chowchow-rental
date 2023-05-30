import { TextInput, Button } from 'ui';
import CartContact from './CartContact';
import CartAddress from './CartAddress';
import CartPayment from './CartPayment';
import CartSummary from './CartSummary';
import { useState, createContext, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ClientOnly from './ClientOnly';
import { useRouter } from 'next/router';
import { DropdownCard } from './DropdownCard';
import { gql, useQuery, useLazyQuery, useMutation } from '@apollo/client';

export const AppContext = createContext(null);

const ADD_INVOICE = gql`
mutation Mutation($paymentTypeId: String!, $orderId: String!, $costAmount: Float!, $deadlineDate: String!) {
  addInvoice(paymentTypeId: $paymentTypeId, orderId: $orderId, costAmount: $costAmount, deadlineDate: $deadlineDate) {
    invoiceId
  }
}
`

const PAYMENTTYPE_QUERY = gql`
  query Query {
    allPaymentType {
      paymentTypeId
      paymentTypeName
    }
  }
`;

const PROMOTION_QUERY = gql`
  query Query {
    allPromotion {
      discountPercent
      minimumPrice
      maximumDiscount
      endDate
      promotionCode
      startDate
    }
  }
`;

const ADD_ORDER = gql`
  mutation Mutation(
    $addressDetail: String!
    $street: String!
    $subdistrict: String!
    $zipcode: String!
    $latitude: Float!
    $longitude: Float!
    $receiverTel: String!
    $totalPrice: Float!
    $sendingDate: String!
    $returnDate: String!
    $statusCode: Int!
  ) {
    addUserOrder(
      addressDetail: $addressDetail
      street: $street
      subdistrict: $subdistrict
      zipcode: $zipcode
      latitude: $latitude
      longitude: $longitude
      receiverTel: $receiverTel
      totalPrice: $totalPrice
      sendingDate: $sendingDate
      returnDate: $returnDate
      statusCode: $statusCode
    ) {
      orderId
    }
  }
`;

const ORDER_PROMOTION_ADD = gql`
mutation Mutation($promotionCode: String!, $orderId: String!) {
  addOrderPromotion(promotionCode: $promotionCode, orderId: $orderId) {
    order {
      orderId
    }
    promotion {
      promotionCode
    }
  }
}
`

const PROFILE_QUERY = gql`
  query Profile {
    Profile {
      customerId
      firstName
      lastName
      email
      tel
      orders {
        addressDetail
        latitude
        longitude
        street
        subdistrict
        zipcode
      }
      carts {
        cartNo
        status
        quantity
        product {
          pricePerDay
          pictureUrl
          productName
        }
      }
    }
  }
`;

// let discount = 0

export const CartInfo = () => {
  const [discount, setDiscount] = useState(0);
  const router = useRouter();
  const {
    data: profile,
    loading: loading_profile,
    error: error_profile,
  } = useQuery(PROFILE_QUERY);
  const {
    data: promotion,
    loading: loading_promotion,
    error: error_promotion,
  } = useQuery(PROMOTION_QUERY);
  const {
    data: paymenttype,
    loading: loading_paymenttype,
    error: error_paymenttype,
  } = useQuery(PAYMENTTYPE_QUERY);

  const [cart, setCart] = useState({});
  const [isSummary, setIsSummary] = useState(false);
  const [usePromotion, setUsePromotion] = useState('');

  const [price, setPrice] = useState(-1);

  let total_raw = 0;
  let delivery_fee = 240;
  let total_price = 0;

  // ส่งคืน

  const [data, setData] = useState({
    email: '',
    tel: '',
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
    paymentmethod: '',
    paymentmethod_n: '',
    paymenttype: '',
    paymenttype_n: '',
  });
  console.log('send:',data)

  const [orderId, setOrderId] = useState('');



let forCalculate = -1;
data.paymenttype == '0004' ? forCalculate = 6.0025 :
data.paymenttype == '1000' ? forCalculate = 1.0 :
data.paymenttype == '2001' ? forCalculate = 2.005 :
data.paymenttype == '2002' ? forCalculate = 2.005 :
data.paymenttype == '3001' ? forCalculate = 6.005 :
data.paymenttype == '4001' ? forCalculate = 12.0075 : forCalculate = -1;
const interest = forCalculate % 1
const times = forCalculate - interest
const today = new Date();
let tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
let finalRound = new Date();
// finalRound.getMonth()+times
let copyTimeForLoop = times

let nextTime = new Date()
function getNextTime() {
  nextTime.setMonth(nextTime.getMonth() + (copyTimeForLoop--));
  return nextTime;
}

  const [executeINVOICEADD] = useMutation(ADD_INVOICE, {
      variables:{  "paymentTypeId": data.paymenttype,
      "orderId": orderId?.addUserOrder?.orderId,
      "costAmount": (price - discount)*(1+interest),
      "deadlineDate": data.paymenttype == '1000' ? String(tomorrow) : getNextTime(),
    },
    onCompleted: ()=>{
      alert('Complete ADD Invoice Please Check invoice Profile')
    }
  });
  const [executeORDERPROMOTIONADD] = useMutation(ORDER_PROMOTION_ADD, {
      variables:{
        "promotionCode": usePromotion,
        "orderId": orderId?.addUserOrder?.orderId,
      },
    onCompleted: ()=>{
      alert('ADD ORDERPROMOTIONADD complete ')
      router.push(`/invoice/${orderId?.addUserOrder?.orderId}/${times}`);
    }
  });

  const [executeADD, {data: return_data}] = useMutation(ADD_ORDER, {
    variables: {
      addressDetail: String(data.address.detail),
      street: String(data.address.street),
      subdistrict: String(data.address.sub_district),
      zipcode: String(data.address.zipcode),
      latitude: data.lat,
      longitude: data.lng,
      receiverTel: data.receiver_tel,
      totalPrice: price - discount,
      sendingDate: data.sending_date,
      returnDate: data.return_date,
      statusCode: 110,
    },
    onCompleted: () => {
      alert('ADD ORDER COMPLETE ')

    }
  });


  useEffect(()=>{
    setOrderId(return_data)
  }, [return_data])

  function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }


  useEffect(()=>{
    let a = async ()=>{
      console.log('P kim here: ',orderId)
      const result = await resolveAfter2Seconds();
      console.log(typeof(orderId))
      console.log(result);
      for(let i=1; i <= times ; i++){
        executeINVOICEADD().catch((err) => alert(err));
      }

      let currentPromotion = promotion?.allPromotion?.filter((promotion) => {
        return (
          promotion.promotionCode == usePromotion &&
          price - delivery_fee > parseFloat(promotion.minimumPrice) &&
          new Date() >= new Date(promotion.startDate) &&
          new Date() <= new Date(promotion.endDate)
        );
      });
      if (currentPromotion && currentPromotion.length == 1){
        executeORDERPROMOTIONADD()
      }
    }
    a();
  }, [orderId])

  // ดึงมา
  const Address = {
    1: {
      receiver_tel: '0584689945',
      lat: 13.736988050394881,
      lng: 100.52436590194702,
      address: {
        detail: '221b',
        street: 'Baker Street',
        sub_district: 'Marylebone',
        district: 'Westminster',
        province: 'London',
        zipcode: '1412',
      },
    },
    2: {
      receiver_tel: '0951165489',
      lat: 13.736988050394881,
      lng: 100.52436590194702,
      address: {
        detail: '1044/70',
        street: 'Phetkasem',
        sub_district: 'Nongkangplu',
        district: 'Naongkham',
        province: 'KrungThep',
        zipcode: '10160',
      },
    },
  };

  useEffect(() => {
    setData({
      ...data,
      email: profile?.Profile[0].email,
      tel: profile?.Profile[0].tel,
    });

    setCart({
      ...profile?.Profile[0],
    });
  }, [profile]);

  useEffect(() => {
    console.log(cart);
    let total_raw1 = 0;
    let total_price1 = 0;
    cart?.carts?.forEach((pro) => {
      total_raw1 = total_raw1 + pro['quantity'] * pro.product['pricePerDay'];
    });
    total_price1 = total_raw1 + delivery_fee;
    console.log('current total_price:', total_price1);
    setPrice(total_price1);
  }, [cart, delivery_fee]);

  const cartList = {
    1: {
      product_name: 'Black Table',
      quantity: 3,
      price_per_day: 66,
      pic_URL: '/ikea_black_chair.png',
    },
    2: {
      product_name: 'Black Table',
      quantity: 3,
      price_per_day: 66,
      pic_URL: '/ikea_black_chair.png',
    },
    3: {
      product_name: 'Black Table',
      quantity: 3,
      price_per_day: 66,
      pic_URL: '/ikea_black_chair.png',
    },
    4: {
      product_name: 'Black Table',
      quantity: 3,
      price_per_day: 66,
      pic_URL: '/ikea_black_chair.png',
    },
  };

  let total = 0;
  let allQuantity = [];
  let allPriceperday = [];
  // query จากโปรโมชั่นโค้ด
  const calTotal_raw = () => {
    {
      Object.keys(cartList).map((key) => {
        // total_raw = total_raw + (cartList[key]['quantity']) * (cartList[key]['price_per_day'])
      });
    }
  };

  calTotal_raw();

  const checkPromotion = (e) => {
    e.preventDefault();
    let currentPromotion = promotion.allPromotion.filter((promotion) => {
      return (
        promotion.promotionCode == usePromotion &&
        price - delivery_fee > parseFloat(promotion.minimumPrice) &&
        new Date() >= new Date(promotion.startDate) &&
        new Date() <= new Date(promotion.endDate)
      );
    });
    console.log('current promo', currentPromotion);
    if (currentPromotion.length <= 0) {
      alert('your promotionCode is invalid');
      return;
    }
    setDiscount(
      parseFloat(currentPromotion[0].discountPercent) *
        parseFloat(price - delivery_fee),
    );
    setPrice(price);
  };

  const onClick = (e) => {
    e.preventDefault();
    executeADD().catch((err) => alert(err));
    console.log('im here:', return_data)
    // for(let i=1; i <= times ; i++){
    //   executeINVOICEADD().catch((err) => alert(err));
    // }

    // router.push('/invoice', { shallow: false })
  };

  return (
    <>
      <ClientOnly>
        <AppContext.Provider value={{ data, setData, isSummary, setIsSummary }}>
          {!isSummary ? (
            <div>
              <div className="flex flex-col-reverse gap-10 py-4 md:flex-row">
                <div className="basis-1/2 ">
                  <div>
                    <CartContact />
                    <CartAddress address={Address} />
                    <CartPayment
                      paymenttype={{
                        '0004': 'superdeal 2023 halfyear offer',
                        1000: 'One-time purchased',
                        2001: '2 times / m.',
                        2002: '2 times / 2 m.',
                        3001: '6 times / 6 m.',
                        4001: '1 year monthy',
                      }}
                      paymentmethod={{
                        B7: '7-BARCODE',
                        BC: 'Bitcoin (Querian Coin)',
                        CC: 'Credit Card',
                        DC: 'Debit Card',
                        EB: 'E-BANKING',
                        PP: 'Paypol',
                        TR: 'Transfer',
                      }}
                    />
                  </div>
                </div>
                <div className="basis-1/2">
                  <div className="w-full space-y-2 rounded-lg border-2 border-black bg-white p-4">
                    <h1 className="text-2xl font-bold">รายการสินค้า</h1>
                    <div className="h-72 w-full space-y-2 overflow-auto rounded-lg px-4">
                      {cart &&
                        cart?.carts?.map((pro) => {
                          total_raw =
                            total_raw +
                            pro['quantity'] * pro.product['pricePerDay'];
                          // total_price = total_raw + delivery_fee - discount;
                          return (
                            <div className="flex-cols-3 border-1 flex h-fit items-center gap-4 rounded border bg-white">
                              <div className="basic-1/4">
                                <Image
                                  src={pro.product['pictureUrl']}
                                  className="w-full justify-items-center rounded p-1"
                                  alt={pro.product['productName']}
                                  width={100}
                                  height={100}
                                  quality={100}
                                />
                              </div>
                              <div className="basic-3/4 w-full space-y-2 p-4 pr-6">
                                <h2 className="text-xl font-bold">
                                  {pro.product['productName']}
                                </h2>
                                <div></div>
                                <div className="flex flex-row justify-between">
                                  <p className="text-base font-bold">
                                    {pro.product['pricePerDay']}
                                    <span class="inline pl-1 font-normal">
                                      {' '}
                                      THB{' '}
                                    </span>
                                  </p>
                                  <p className="text-base font-normal">
                                    x {pro['quantity']} ชิ้น{' '}
                                  </p>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                    <form action="">
                      <div className="flex flex-row items-center gap-4 px-4">
                        <div className="basis-2/3">
                          <TextInput
                            onChange={(e) => setUsePromotion(e.target.value)}
                            placeholder="กรอกรหัสโปรโมชัน"
                          />
                        </div>
                        <div className="basis-1/3">
                          <Button
                            onClick={checkPromotion}
                            type="submit"
                            text="CONFIRM"
                          />
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
                      <div className="rounded border-2 border-gray-500 bg-white"></div>
                    </div>
                    <div className="flex flex-row px-4">
                      <div className="basis-2/3">
                        <p className="font-bold">ราคาสุทธิ</p>
                      </div>
                      <div className="basis-1/3">
                        <p className="text-end font-bold">
                          {price - discount} THB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex flex-col-reverse gap-10 py-4 md:flex-row">
                <div className="basis-1/2">
                  <div>
                    <CartSummary />
                  </div>
                </div>
                <div className="basis-1/2">
                  <div className="w-full space-y-2 rounded-lg border-2 border-black bg-white p-4">
                    <h1 className="text-2xl font-bold">รายการสินค้า</h1>
                    <div className="h-72 w-full space-y-2 overflow-auto rounded-lg px-4">
                      {cart &&
                        cart?.carts?.map((pro) => {
                          total_raw =
                            total_raw +
                            pro['quantity'] * pro.product['pricePerDay'];
                          // total_price = total_raw + delivery_fee - discount;
                          return (
                            <div className="flex-cols-3 border-1 flex h-fit items-center gap-4 rounded border bg-white">
                              <div className="basic-1/4">
                                <Image
                                  src={pro.product['pictureUrl']}
                                  className="w-full justify-items-center rounded p-1"
                                  alt={pro.product['productName']}
                                  width={100}
                                  height={100}
                                  quality={100}
                                />
                              </div>
                              <div className="basic-3/4 w-full space-y-2 p-4 pr-6">
                                <h2 className="text-xl font-bold">
                                  {pro.product['productName']}
                                </h2>
                                <div></div>
                                <div className="flex flex-row justify-between">
                                  <p className="text-base font-bold">
                                    {pro.product['pricePerDay']}
                                    <span class="inline pl-1 font-normal">
                                      {' '}
                                      THB{' '}
                                    </span>
                                  </p>
                                  <p className="text-base font-normal">
                                    x {pro['quantity']} ชิ้น{' '}
                                  </p>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                    <form action="">
                      <div className="flex flex-row items-center gap-4 px-4">
                        <div className="basis-2/3">
                          <TextInput onChange={(e) => setUsePromotion(e.target.value)} placeholder="กรอกรหัสโปรโมชัน" />
                        </div>
                        <div className="basis-1/3">
                          <Button onClick={checkPromotion} type="submit" text="CONFIRM" />
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
                      <div className="rounded border-2 border-gray-500 bg-white"></div>
                    </div>
                    <div className="flex flex-row px-4">
                      <div className="basis-2/3">
                        <p className="font-bold">ราคาสุทธิ</p>
                      </div>
                      <div className="basis-1/3">
                        <p className="text-end font-bold">
                          {price - discount} THB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-cols flex justify-center">
                <div className="col-span-2">
                    <Button
                      text={'CONFIRM ORDER'}
                      type={'submit'}
                      onClick={onClick}
                    />
                </div>
              </div>
              <p className="pt-2 text-center text-[#C26666]">
                *โปรดตรวจสอบข้อมูลทั้งหมดให้ถูกต้องก่อนกด CONFIRM*
              </p>
            </div>
          )}
        </AppContext.Provider>
      </ClientOnly>
    </>
  );
};
