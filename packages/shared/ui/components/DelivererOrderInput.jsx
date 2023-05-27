import {TextInput, Button} from 'ui';
import { useState } from 'react';

export const DelivererOrderInput = () => {
  const receiveData = {
    customer_name: 'nontawat',
    arrive_time: '2023-05-30 11.59', //ไม่รู้เก็บยังไงไม่ต้องจัด
    receiver_tel: 'receiver_tel',
    sub_district: 'sub_district',
    district: 'district',
    province: 'province',
    zipcode: '10140',
  }

  const [returnData, setReturnData] = useState({
    receiver_name: '',
  })

  console.log(returnData)

  return <>
      <form onSubmit={e => e.preventDefault()}>
        <div className="w-full rounded-lg border border-2 border-black p-4 mb-10">
            <div className="grid grid-cols-2 gap-x-12">
                <TextInput placeholder="" label="Customer Name" type={'readOnly'} value={receiveData.customer_name}/>
                <TextInput placeholder="" label="Arrive Time" type={'readOnly'} value={receiveData.arrive_time}/>
                <TextInput placeholder="" label="Receiver Name" value={returnData.receiver_name} onChange={e => setReturnData({...returnData, ['receiver_name']:e.target.value})}/>
                <TextInput placeholder="" label="Receiver Tel." type={'readOnly'} value={receiveData.receiver_tel}/>
                <TextInput placeholder="" label="Sub-District" type={'readOnly'} value={receiveData.sub_district}/>
                <TextInput placeholder="" label="District" type={'readOnly'} value={receiveData.district}/>
                <TextInput placeholder="" label="Province" type={'readOnly'} value={receiveData.province}/>
                <TextInput placeholder="" label="Zipcode" type={'readOnly'} value={receiveData.zipcode}/>
            </div>
        </div>
        <div className='grid grid-cols-3'>
          <div className='col-start-2'>
            <Button type="submit" text="DONE" />
          </div>
        </div>
      </form>
  </>;
};
