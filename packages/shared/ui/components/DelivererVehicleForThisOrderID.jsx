import {TextInput} from 'ui';

export const DelivererVehicleForThisOrderID = () => {
  const receiveData = {
    Licence: 'คย 1124',
    type: '6 ล้อ',
    brand: 'EZUZU',
  }

  return <>
    <div className="w-full rounded-lg border border-2 border-black p-4 m-0">
        <div className="grid grid-cols-2 gap-x-12">
            <TextInput placeholder="" label="Vehicle Licence" type={'readOnly'} value={receiveData.Licence}/>
            <TextInput placeholder="" label="Vehicle Type" type={'readOnly'} value={receiveData.type}/>
            <TextInput placeholder="" label="Vehicle Brand" type={'readOnly'} value={receiveData.brand}/>
        </div>
    </div>
  </>;
};
