import { DropdownCard, TextInput, Dropdown, Map } from 'ui';
import { useState, useEffect } from 'react';

export const ConfirmAddress = ({ address }) => {
  const [isShow, setIsShow] = useState(false);
  const keysAddress = Object.keys(address);
  const [data, setData] = useState({
    'select_address':null,
    'new_address':null,
    'sending_date':null,
    'return_date':null,
  });
  console.log(data);
  useEffect(() => {
    if (keysAddress.length===0) {
      setIsShow(true)
    }
  }, [keysAddress.length]);
  return(
  <>
    <DropdownCard topic={'การจัดส่ง'} backText={'กลับไปการติดต่อ'}>
        <div>เลือกที่อยู่เพื่อใช้สำหรับรอรับสินค้า</div>
        <div className="mb-2.5 rounded-md border border-black p-2">
          <div className="flex flex-col">
            {keysAddress.map((key) => (
              <div className="flex">
                <div className="flex h-5 items-center">
                  <input
                    onClick={() => setIsShow(false)}
                    onChange={e => setData({...data, ['select_address']:address[e.target.value]})}
                    defaultChecked={key===keysAddress[0] && data['select_address']==null ? true : false}
                    checked={address[key]==data['select_address']}
                    id={key}
                    name="bordered-radio"
                    aria-describedby="helper-radio-text"
                    type="radio"
                    value={key}
                    className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                  />
                </div>
                <div className="ml-2 text-sm">
                  <label for={key} className="font-bold">
                    {address[key].name}
                  </label>
                  <p
                    id="helper-radio-text"
                    className="text-xs font-normal text-gray-500 dark:text-gray-300"
                  >
                    {address[key].phone} <br />
                    {address[key].detail}
                  </p>
                </div>
              </div>
            ))}
            { keysAddress.length>0 && <hr className="my-4 w-full h-px border-0 bg-black dark:bg-gray-700"></hr>}
            <div className="flex mb-2.5">
              <div className="flex h-5 items-center">
                <input
                  onClick={e => setIsShow(true)}
                  defaultChecked={keysAddress.length === 0 ? true : false}
                  id="helper-radio"
                  name="bordered-radio"
                  aria-describedby="helper-radio-text"
                  type="radio"
                  value=""
                  className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                />
              </div>
              <div className="ml-2 text-sm">
                <label for="helper-radio" className="font-bold">
                  เพิ่มที่อยู่ใหม่
                </label>
              </div>
            </div>
            {isShow && (
              <>
                <div className="grid md:grid-cols-2 md:gap-x-4 mb-2.5">
                  <TextInput label={'Address'} />
                  <TextInput label={'Road'} />
                  <div className='md:col-span-2'>
                    <TextInput label={'Sub-district'}/>
                  </div>
                  <div className='md:col-span-2'>
                    <TextInput label={'District'} />
                  </div>
                  <Dropdown
                    label={'Province'}
                    options={{
                      bangkok: 'bangkok',
                      นครปฐม: 'นครปฐม',
                      กาญ: 'กาญ',
                      ราชรี: 'ราชรี',
                    }}
                  />
                  <TextInput label={'ZIP code'} />
                </div>
                <div className='mb-2.5'>
                  <Map height='300px'/>
                </div>
              </>
            )}
          </div>


        </div>
        <div>
          <label
          htmlFor='sending_date'
          className="mb-2.5 block text-sm font-medium text-black"
          >
            เลือกวันที่ต้องการรับสินค้า
          </label>
          <input
            onChange={e => setData({...data, ['sending_date']:e.target.value})}
            value={data['return_date']}
            name='sending_date'
            type="datetime-local"
            autoComplete="true"
            id='sending_date'
            className="mb-2.5 block w-full rounded-md border-2 border-black p-2.5 text-sm "
            required
          >
          </input>

          <label
          htmlFor='return_date'
          className="mb-2.5 block text-sm font-medium text-black"
          >
            เลือกวันที่ต้องการคืนสินค้า
          </label>
          <input
            onChange={e => setData({...data, ['return_date']:e.target.value})}
            value={data['return_date']}
            name='return_date'
            type="datetime-local"
            autoComplete="true"
            id='return_date'
            className="mb-2.5 block w-full rounded-md border-2 border-black p-2.5 text-sm "
            required
          >
          </input>
        </div>
    </DropdownCard>
  </>
  )
}
