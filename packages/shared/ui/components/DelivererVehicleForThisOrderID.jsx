import {TextInput} from 'ui';

export const DelivererVehicleForThisOrderID = () => {
  const receiveData = {
    Licence: 'กข 123',
    type: '4 wheel truck',
    brand: 'ISUZU',
  }

  return <>
    <div className="w-full rounded-lg border border-2 border-black p-4 m-0 bg-white item">
        <div className="grid grid-cols-2 gap-x-12">
            <TextInput placeholder="" label="Vehicle Licence" type={'readOnly'} value={receiveData.Licence}/>
            <TextInput placeholder="" label="Vehicle Type" type={'readOnly'} value={receiveData.type}/>
            <TextInput placeholder="" label="Vehicle Brand" type={'readOnly'} value={receiveData.brand}/>
        </div>
    </div>
  </>;
};
