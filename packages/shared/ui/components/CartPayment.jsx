import { DropdownCard } from './DropdownCard';
import { useContext } from 'react';
import { AppContext } from './CartInfo';

export const CartPayment = ({ payment_method, payment_times }) => {
  const { data, setData } = useContext(AppContext);

  return (
    <>
      <DropdownCard topic={'การชำระเงิน'} backText={'กลับไปการจัดส่ง'}>
        <div>
          <p className="mb-2.5">เลือกช่วงการแบ่งชำระจ่าย</p>
          <div class="mb-2.5 flex flex-col">
            {Object.keys(payment_times).map((key) => (
              <div key={key}>
                <input
                  checked={data.payment_times == key}
                  onChange={(e) =>
                    setData({ ...data, ['payment_times']: e.target.value })
                  }
                  required
                  id={key}
                  type="radio"
                  value={key}
                  name="payment_times"
                  class="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                />
                <label
                  htmlFor={key}
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {payment_times[key]}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p>เลือกวิธีการชำระเงิน</p>
          <div class="mb-2.5 flex flex-col">
            {Object.keys(payment_method).map((key) => (
              <div key={key}>
                <input
                  checked={data.payment_method == key}
                  onChange={(e) =>
                    setData({ ...data, ['payment_method']: e.target.value })
                  }
                  required
                  id={key}
                  type="radio"
                  value={key}
                  name="payment_method"
                  class="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                />
                <label
                  htmlFor={key}
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {payment_method[key]}
                </label>
              </div>
            ))}
          </div>
        </div>
      </DropdownCard>
    </>
  );
};
