import { TextInput, Button, Dropdown } from "ui";
import { useState } from "react";
import Link from "next/link";

export const EditTransport = () => {

  const [addData, setAddData] = useState({
    order_id:'',
    is_return:'',
    staff_id:'',
    car_licence:'',
  })

  // ดึง
  const order_data = {
    '1':{
      'order_id':'xxxxxxxxx',
      'arrive_date':'2023-04-01 10:30:00',
      'return_date':'2023-04-02 10:30:00',
    },
    '2':{
      'order_id':'yyyy',
      'arrive_date':'2023-04-01 10:30:00',
      'return_date':'2023-04-02 10:30:00',
    },
    '3':{
      'order_id':'zz',
      'arrive_date':'2023-04-01 10:30:00',
      'return_date':'2023-04-02 10:30:00',
    },
  }

  // ดึง or แต่จะ lock ค่าเป็น 3 ตัวนี้ก็ได้นะ5555
  const vehicle_type = {
    1:{
      vehicle_type_n:'4 wheels truck',
    },
    2:{
      vehicle_type_n:'6 wheels truck',
    },
    3:{
      vehicle_type_n:'10 wheels truck',
    },
  }
  // ดึง
  const free_vehicle = {
    1:{
      vehicle_licence:'หข 123',
    },
    2:{
      vehicle_licence:'หข 124',
    },
    3:{
      vehicle_licence:'หข 125',
    },
  }
  // ดึง
  const deliverer = {
    1:{
      staff_id: 'xxxxxxx',
    },
    2:{
      staff_id: 'yyy',
    },
    3:{
      staff_id: 'zzzzz',
    },
  }

  console.log(addData)

  return (
    <>
      <div>
      <div className="text-2xl font-bold py-2 m-0">Add transport</div>
      <div className="w-full rounded-lg border-2 border-black p-4 mb-10">
        <div className="p-4">
          <div class=" relative overflow-x-auto overflow-y-auto h-50 rounded-lg">
            <table class="w-full text-sm text-center text-gray-500">
                <thead class="text-xs text-gray-700 bg-[#E3C291] uppercase sticky top-0">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                          order_id
                        </th>
                        <th scope="col" class="px-6 py-3">
                          arrive_date
                        </th>
                        <th scope="col" class="px-6 py-3">
                          return_date
                        </th>
                    </tr>
                </thead>
                <tbody>
                  {Object.keys(order_data).map((key) => (

                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          <Link href={'/ordertracking'}>
                            {order_data[key]['order_id']}
                          </Link>
                        </td>
                        <td scope="row" class="px-6 py-4">
                          {order_data[key]['arrive_date']}
                        </td>
                        <td class="px-6 py-4">
                          {order_data[key]['return_date']}
                        </td>
                      </tr>

                  ))}
                </tbody>
            </table>
            <div className="grid grid-cols-2 gap-x-4">
              <Dropdown defaultValue={'0'} options={{'0':'send', '1':'return'}} label={'send or return'}/>
              <TextInput label={'staff ID'} placeholder={'staff ID'} />
              <div className="col-start-1">
                <TextInput label={'vehicle licence'} placeholder={'หฟ 213'} />
              </div>
            </div>
            <div className="grid grid-cols-3">
              <div className="col-start-2">
                <Button text={'submit'} type={'submit'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
