import { Button } from './Button';
import check from '/public/check.svg';
import Image from 'next/image';
import Link from 'next/link';
import { AppContext } from './CartInfo';
import { useContext } from 'react';

export const CartSummary = () => {
  const { data, setIsSummary } = useContext(AppContext);

  return (
    <>
      <div className=" border-1 mb-4 w-full rounded-md border border-black px-4 py-1">
        <div className=" flex items-center text-xl font-bold">
          <span className="pr-4">การติดต่อ</span>
          <Image
            className="invisible"
            src={check}
            width={40}
            height={40}
            alt="check button"
          />
        </div>
        <label
          htmlFor="email"
          className="mb-2.5 block text-sm font-medium text-black dark:text-white"
        >
          Email
        </label>
        <input
          name="email"
          type="text"
          defaultValue={data.email}
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
          defaultValue={data.tel}
          className="border-1 mb-2.5 block w-full cursor-not-allowed rounded-md border-black bg-[#CDCDCD] p-2.5 text-sm"
          disabled
          readOnly
        />

        <div className=" flex items-center text-xl font-bold">
          <span className="pr-4">การจัดส่ง</span>
          <Image
            className="invisible"
            src={check}
            width={40}
            height={40}
            alt="check button"
          />
        </div>
        <div className="mb-2.5 rounded-md border border-black p-2">
          <div className="flex flex-col">
            <div class="flex">
              <div class="flex h-5 items-center">
                <input
                  disabled
                  checked
                  id="helper-radio"
                  aria-describedby="helper-radio-text"
                  type="radio"
                  value=""
                  class="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                />
              </div>
              <div class="ml-2 text-sm">
                <label
                  htmlFor="helper-radio"
                  class="font-medium text-gray-900 dark:text-gray-300"
                >
                  {data.receiver_tel}
                </label>
                <p
                  id="helper-radio-text"
                  class="text-xs font-normal text-gray-500 dark:text-gray-300"
                >
                  {Object.values(data['address']).map((x) => x + ' ')}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <label
            htmlFor="sending_date"
            className="mb-2.5 block text-sm font-medium text-black dark:text-white"
          >
            เลือกวันที่ต้องการรับสินค้า
          </label>
          <input
            name="sending_date"
            type="text"
            defaultValue={data.sending_date}
            className="border-1 mb-2.5 block w-full cursor-not-allowed rounded-md border-black p-2.5 text-sm"
            disabled
          />
        </div>

        <div>
          <label
            htmlFor="sending_date"
            className="mb-2.5 block text-sm font-medium text-black dark:text-white"
          >
            เลือกวันที่ต้องการคืนสินค้า
          </label>
          <input
            name="sending_date"
            type="text"
            value={data.return_date}
            className="border-1 mb-2.5 block w-full cursor-not-allowed rounded-md border-black p-2.5 text-sm"
            disabled
          />
        </div>

        <div className=" flex items-center text-xl font-bold">
          <span className="pr-4">การชำระเงิน</span>
          <Image
            className="invisible"
            src={check}
            width={40}
            height={40}
            alt="check button"
          />
        </div>

        <div>
          <p className="mb-2.5">เลือกช่วงการแบ่งชำระจ่าย</p>
          <div class="mb-2.5 flex flex-col">
            <div>
              <input
                disabled
                checked
                type="radio"
                name="payment_times"
                class="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
              />
              <label class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                {'แบ่งชำระจ่าย ' + data.payment_times + ' งวด'}
              </label>
            </div>
          </div>
        </div>

        <div>
          <p className="mb-2.5">เลือกวิธีการชำระเงิน</p>
          <div class="mb-2.5 flex flex-col">
            <div>
              <input
                disabled
                checked
                type="radio"
                name="payment_method"
                class="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
              />
              <label class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                {data.payment_method}
              </label>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <div className="">
            <Button
              text={'EDIT'}
              type={'normal'}
              onClick={(e) => setIsSummary(false)}
            />
          </div>
          <div className="col-span-2">
            <Link href="INVOICE_PAGE_PATH">
              <Button text={'CONFIRM'} type={'submit'} />
            </Link>
          </div>
        </div>
        <p className="text-center text-[#C26666]">
          *โปรดตรวจสอบข้อมูลทั้งหมดให้ถูกต้องก่อนกด CONFIRM*
        </p>
      </div>
    </>
  );
};