import { TextInput, Button, Da } from "ui";
import { useState } from "react";

export const BillingInfo = () => {
  const [data, setData] = useState({
    'order_id':'',
    'times_of_purchase':'',
    'url':'',
    'total_amount':'',
    'date_time_hour':'',
  })
  console.log(data)

  return (
    <>
      <div className="mx-auto px-4">
        <div className="mb-4 w-full rounded-md border-2 border-black px-8 py-4">
            <div className="text-2xl font-bold mb-4">ใบแจ้งชำระเงิน</div>
            <div className="grid grid-cols-2 gap-4 md:gap-x-16">
              <div className="">
                <TextInput label={'Order ID'} onChange={e => setData({...data, ['order_id']:e.target.value})}/>
              </div>
              <div className=" col-start-1 col-span-2">
                <div className="mb-2.5">
                  เลือกประเภทการจ่ายเงิน
                </div>
                <div className="">
                  <div class="flex">
                      <div class="flex items-center mr-12 mb:mr-20">
                          <input onChange={e => setData({...data, ['times_of_purchase']:e.target.value})} id="inline-radio" type="radio" value="มัดจำ" name="inline-radio-group" class="text-[#C3A982] focus:ring-[#C3A982] border-[#C3A982] bg-white mr-2.5 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                          <label for="inline-radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">มัดจำ</label>
                      </div>
                      <div class="flex items-center mr-12 mb:mr-20">
                          <input onChange={e => setData({...data, ['times_of_purchase']:e.target.value})} id="inline-2-radio" type="radio" value="1" name="inline-radio-group" class="text-[#C3A982] focus:ring-[#C3A982] border-[#C3A982] bg-white mr-2.5 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                          <label for="inline-2-radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">งวดที่ 1</label>
                      </div>
                      <div class="flex items-center mr-12 mb:mr-20">
                          <input onChange={e => setData({...data, ['times_of_purchase']:e.target.value})} id="inline-3-radio" type="radio" value="2" name="inline-radio-group" class="text-[#C3A982] focus:ring-[#C3A982] border-[#C3A982] bg-white mr-2.5 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                          <label for="inline-3-radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">งวดที่ 2</label>
                      </div>
                      <div class="flex items-center mr-12 mb:mr-20">
                          <input onChange={e => setData({...data, ['times_of_purchase']:e.target.value})} id="inline-4-radio" type="radio" value="3" name="inline-radio-group" class="text-[#C3A982] focus:ring-[#C3A982] border-[#C3A982] bg-white mr-2.5 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                          <label for="inline-4-radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">งวดที่ 3</label>
                      </div>
                  </div>
                </div>
              </div>
              <div className="col-span-2">
                <TextInput label={'Upload Picture'} onChange={e => setData({...data, ['url']:e.target.value})}/>
              </div>
              <TextInput label={'Total Amount'} onChange={e => setData({...data, ['date_time_hour']:e.target.value})}/>
              <div>
                <label
                  htmlFor="return_date"
                  className="mb-2.5 block text-sm font-medium text-black"
                >
                  Date-Time
                </label>
                <input
                  onChange={(e) =>
                    setData({ ...data, ['date_time_hour']: e.target.value })
                  }
                  name="sending_date"
                  type="datetime-local"
                  autoComplete="true"
                  id="sending_date"
                  className="mb-2.5 block w-full rounded-md border-2 border-black p-2.5 text-sm "
                  required
                ></input>
              </div>

            </div>
            <div className="mt-4 grid grid-cols-3">
              <div className="col-start-2">
                <Button text={'CONFIRM'} type={'submit'}/>
              </div>
            </div>

        </div>
      </div>
    </>
  );
};
