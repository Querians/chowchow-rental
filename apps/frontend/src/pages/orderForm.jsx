import Image from 'next/image';
import {
  Navbar,
  Header,
  DateInput,
  Map,
  PasswordInput,
  EmailInput,
  PhoneInput,
  ConfirmInfo,
} from 'ui';

const orderForm = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4">
        <h1 className="text-4xl font-bold">Customer</h1>
        {/* <form> */}
        <ConfirmInfo
          contact={{ email: 'testtest@gmai.com', phone: '0123456789' }}
          address={{
            1: {
              name: 'ศาสตราจารย์ดอกเตอร์ สุดตึงตะลึงเกิน',
              phone: '0XX-XXX-XXXX',
              detail:
                'เธอถามฉันว่าบ้านของฉันมันอยู่ไหนน่ะหรอ อยากลองไปก็หาทางดูเซ่ ฉันทิ้งเบาะแสไว้หมดแล้ว !!!',
            },
            2: {
              name: 'nonnon',
              phone: '0YY-YYY-YYYY',
              detail:
                'เธอถามฉันว่าบ้านของฉันมันอยู่ไหนน่ะหรอ อยากลองไปก็หาทางดูเซ่ ฉันทิ้งเบาะแสไว้หมดแล้ว !!!',
            },
          }}
        />
        {/* <input type="submit" className='block border-2 p-2.5 mb-2.5 rounded-md border-black' onClick={(e) => e.preventDefault}></input> */}
        {/* </form> */}
      </main>
    </>
  );
};

export default orderForm;
