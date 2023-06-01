import { TextInput, Button, Dropdown } from "ui";
import { useState } from "react";
import Link from "next/link";
import { gql, useQuery, useLazyQuery } from '@apollo/client';


const QUERYTRANSPORT_EDIT =gql`
query AllOrder {
  allOrder {
    orderId
    sendingDate
    returnDate
  }
}
`

export const EditTransport = () => {

  const [editData, setEditData] = useState({
    order_id:'',
    is_return:'',
    staff_id:'',
    car_licence:'',
  })

  // ดึง
  const order_data = {
    '1':{
      'order_id':'0d02a456-b5c7-4377-84c7-41848c84e5c3',
      'arrive_date':'2023-04-01 10:30:00',
      'return_date':'2023-04-02 10:30:00',
    },
    '2':{
      'order_id':'13de5908-bb20-4570-9b10-85d59bdd9a99',
      'arrive_date':'2023-04-01 10:30:00',
      'return_date':'2023-04-02 10:30:00',
    },
    '3':{
      'order_id':'17331d14-0b99-4d6f-84e4-73e293a58bc1',
      'arrive_date':'2023-04-01 10:30:00',
      'return_date':'2023-04-02 10:30:00',
    },
  }

  return (
    <>
      <div>
      <div className="text-2xl font-bold py-2 m-0">Edit transport</div>
      <div className="w-full rounded-lg border-2 border-black p-4 mb-10 bg-white">
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
                        <th scope="col" class="px-6 py-3">
                            Detail
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
                        <td class="px-6 py-4">
                            <a href="./transportdetail" class="font-medium text-blue-600 hover:underline">More detail</a>
                        </td>
                      </tr>

                  ))}
                </tbody>
            </table>
            <form onSubmit={e => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-x-4">
                <TextInput onChange={e => setEditData({...editData, ['order_id']:e.target.value})} label={'OrderID'} placeholder={'r786hlidb3g'} />
                <Dropdown onChange={e => setEditData({...editData, ['is_return']:e.target.value})} defaultValue={'0'} options={{'0':'send', '1':'return'}} label={'send or return'}/>
                <TextInput onChange={e => setAddData({...addData, ['staff_id']:e.target.value})} label={'Staff ID'} />

                <div className="">
                  <TextInput onChange={e => setEditData({...editData, ['car_licence']:e.target.value})} label={'vehicle licence'} placeholder={'หฟ 213'} />
                </div>
                <div className="grid grid-cols-2 col-start-2">
                  <div className="col-start-2">
                    <Button text={'submit'} type={'submit'} />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
