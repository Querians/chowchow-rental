import { Dropdown, Button, TextInput } from 'ui';
import { useState } from 'react';

export const DelivererCheckinout = () => {
  const [returnData, setReturnData] = useState({
    order_id: '',
    order_status: '',
    time_go: '',
    time_back: '',
  })

  const receiveData = {
    staff_id: 'sm6fk4f52ut',
    this_delivery_work_not_done: {
      'order_id_1': 'order_id_1',
      'order_id_2': 'order_id_2',
      'order_id_3': 'order_id_3',
      'order_id_4': 'order_id_4',
      'order_id_5': 'order_id_5',
    }
  }


  return <>
      <h1 className="text-4xl font-bold py-6">Add New Category</h1>
      <form onSubmit={e => e.preventDefault()}>
        <div className="w-full rounded-lg border border-2 border-black p-4 mb-10">
            <div className="grid grid-cols-2 gap-x-12">
                <Dropdown options={receiveData.this_delivery_work_not_done} label="Order ID" onChange={e => setReturnData({...returnData, ['order_id']:e.target.value})}/>
                <TextInput type={'readOnly'} label={'Staff ID'} value={receiveData.staff_id}/>
                <Button type="submit" text="Check In" onClick={e => setReturnData({...returnData, ['time_back']:new Date(), ['order_status']:232})}/>
                <Button type="submit" text="Check Out" onClick={e => setReturnData({...returnData, ['time_go']:new Date(), ['order_status']:231})} />
            </div>
        </div>
      </form>
  </>;
};
