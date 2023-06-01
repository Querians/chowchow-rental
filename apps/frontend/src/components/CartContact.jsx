import { DropdownCard } from './DropdownCard';
import { useContext } from 'react';
import { AppContext } from './CartInfo';

const CartContact = () => {
  const { data } = useContext(AppContext);
  return (
    <>
      <DropdownCard topic={'การติดต่อ'} backText={'เลือกสินค้าเพิ่มเติม'}>
        <label
          htmlFor="email"
          className="mb-2.5 block text-sm font-medium text-black dark:text-white"
        >
          Email
        </label>
        <input
          name="email"
          type="text"
          value={data.email}
          className="border-1 mb-2.5 block w-full cursor-not-allowed rounded-md border-black bg-[#CDCDCD] p-2.5 text-sm"
          disabled
          readOnly
        />
        <label
          htmlFor="Phone"
          className="mb-2.5 block text-sm font-medium text-black dark:text-white"
        >
          Tel.
        </label>
        <input
          name="Phone"
          type="text"
          value={data.tel}
          className="border-1 mb-2.5 block w-full cursor-not-allowed rounded-md border-black bg-[#CDCDCD] p-2.5 text-sm"
          disabled
          readOnly
        />
      </DropdownCard>
    </>
  );
};

export default CartContact;
