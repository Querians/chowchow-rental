import { CartContact, CartAddress, CartPayment, CartSummary } from 'ui';
import { useState, createContext } from 'react';

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
  return (
    <>
      <AppContext.Provider value={{ data, setData, isSummary, setIsSummary }}>
        {!isSummary ? (
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
        ) : (
          <CartSummary />
        )}
      </AppContext.Provider>
    </>
  );
};
