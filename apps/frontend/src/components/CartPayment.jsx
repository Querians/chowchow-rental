import { DropdownCard } from './DropdownCard';
import { useContext } from 'react';
import { AppContext } from './CartInfo';

const CartPayment = ({paymentmethod, paymenttype}) => {
  const { data, setData } = useContext(AppContext);
  return (
    <>
      <DropdownCard topic={'การชำระเงิน'} backText={'กลับไปการจัดส่ง'}>
        <div>
          <p className="mb-2.5">เลือกช่วงการแบ่งชำระจ่าย</p>
          <div class="mb-2.5 flex flex-col">
            {Object.keys(paymenttype).map((key) => (
              <div key={key}>
                <input
                checked={data.paymenttype==key}
                  onChange={(e) =>
                    setData({ ...data, ['paymenttype']: e.target.value, ['paymenttype_n']:paymenttype[key] })
                  }
                  required
                  id={key}
                  type="radio"
                  value={key}
                  name="paymenttype"
                  class="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 text-[#C3A982] focus:ring-[#C3A982] border-[#C3A982]"
                />
                <label
                  htmlFor={key}
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {paymenttype[key]}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p>เลือกวิธีการชำระเงิน</p>
          <div class="mb-2.5 flex flex-col">
            {Object.keys(paymentmethod).map((key) => (
              <div key={key}>
                <input
                  checked={data.paymentmethod==key}
                  onChange={(e) =>{
                    setData({ ...data, ['paymentmethod']: e.target.value, ['paymentmethod_n']:paymentmethod[key] })
                  }}
                  required
                  type="radio"
                  value={key}
                  name="paymentmethod"
                  class="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 text-[#C3A982] focus:ring-[#C3A982] border-[#C3A982]"
                />
                <label
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {paymentmethod[key]}
                </label>
              </div>
            ))}
          </div>
        </div>
      </DropdownCard>
    </>
  );
};

export default CartPayment;
