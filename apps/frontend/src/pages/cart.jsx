import Image from 'next/image';
import { Navbar, CartInfo } from 'ui';

const cart = () => {
  const address = {
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
  const contact = { email: 'testtest@gmai.com', phone: '0123456789' };

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4">
        <CartInfo
          address={address}
          contact={contact}
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
      </main>
    </>
  );
};

export default cart;
