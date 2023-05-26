import { DropdownCard, TextInput, Dropdown, Map, PhoneInput } from 'ui';
import { useContext, useState, useEffect } from 'react';
import { AppContext } from './CartInfo';

export const CartAddress = ({ address }) => {
  const [isShow, setIsShow] = useState(false);
  const { data, setData } = useContext(AppContext);
  useEffect(() => {
    if (Object.keys(address).length === 0) {
      setIsShow(true);
    }
  }, [address]);
  return (
    <>
      <DropdownCard topic={'การจัดส่ง'} backText={'กลับไปการติดต่อ'}>
        <div>เลือกที่อยู่เพื่อใช้สำหรับรอรับสินค้า</div>
        <div className="mb-2.5 rounded-md border border-black p-2">
          <div className="flex flex-col">
            {Object.keys(address).map((key) => (
              <div key={key} className="flex">
                <div className="flex h-5 items-center">
                  <input
                    onClick={() => setIsShow(false)}
                    onChange={(e) =>
                      setData({
                        ...data,
                        ['select_address']: e.target.value,
                        ['address']: address[e.target.value]['address'],
                        ['receiver_tel']: address[key].receiver_tel,
                        ['lat']: address[key].lat,
                        ['lng']: address[key].lng,
                      })
                    }
                    checked={
                      key == data['select_address']
                    }
                    id={key}
                    name="bordered-radio"
                    aria-describedby="helper-radio-text"
                    type="radio"
                    value={key}
                    required
                    className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                  />
                </div>
                <div className="mb-2.5 ml-2 text-sm">
                  <label htmlFor={key} className="font-bold">
                    {address[key].receiver_tel}
                  </label>
                  <p
                    id="helper-radio-text"
                    className="text-xs font-normal text-gray-500 dark:text-gray-300"
                  >
                    {Object.values(address[key]['address']).map((x) => x + ' ')}
                  </p>
                </div>
              </div>
            ))}
            {Object.keys(address).length > 0 && (
              <hr className="my-4 h-px w-full border-0 bg-black dark:bg-gray-700"></hr>
            )}
            <div className="mb-2.5 flex">
              <div className="flex h-5 items-center">
                <input
                  onClick={(e) => setIsShow(true)}
                  onChange={(e) =>
                    setData({
                      ...data,
                      ['select_address']: e.target.value,
                      ['address']: '',
                      ['lat']: '',
                      ['lng']: '',
                      ['phone']: '',
                    })
                  }
                  checked={
                    data['select_address'] == 'new_address' ||
                    Object.keys(address).length === 0
                  }
                  id="helper-radio"
                  name="bordered-radio"
                  aria-describedby="helper-radio-text"
                  type="radio"
                  value="new_address"
                  className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                />
              </div>
              <div className="ml-2 text-sm">
                <label htmlFor="helper-radio" className="font-bold">
                  เพิ่มที่อยู่ใหม่
                </label>
              </div>
            </div>
            {isShow && (
              <>
                <div className="mb-2.5 grid md:grid-cols-2 md:gap-x-4">
                  <div className="md:col-span-2">
                    <TextInput
                      label={'Address Detail'}
                      value={data.address.detail}
                      onChange={(e) =>
                        setData({
                          ...data,
                          ['address']: {
                            ...data.address,
                            ['detail']: e.target.value,
                          },
                        })
                      }
                    />
                  </div>
                  <PhoneInput
                    label={'Tel.'}
                    value={data.receiver_tel}
                    onChange={(e) =>
                      setData({ ...data, ['receiver_tel']: e.target.value })
                    }
                  />
                  <TextInput
                    label={'Street'}
                    value={data.address.street}
                    onChange={(e) =>
                      setData({
                        ...data,
                        ['address']: {
                          ...data.address,
                          ['street']: e.target.value,
                        },
                      })
                    }
                  />
                  <div className="md:col-span-2">
                    <TextInput
                      label={'Sub-district'}
                      value={data.address.sub_district}
                      onChange={(e) =>
                        setData({
                          ...data,
                          ['address']: {
                            ...data.address,
                            ['sub_district']: e.target.value,
                          },
                        })
                      }
                    />
                  </div>
                  <div className="md:col-span-2">
                    <TextInput
                      label={'District'}
                      value={data.address.district}
                      onChange={(e) =>
                        setData({
                          ...data,
                          ['address']: {
                            ...data.address,
                            ['district']: e.target.value,
                          },
                        })
                      }
                    />
                  </div>
                  <TextInput
                    value={data.address.provincee}
                    label={'Province'}
                    onChange={(e) =>
                      setData({
                        ...data,
                        ['address']: {
                          ...data.address,
                          ['province']: e.target.value,
                        },
                      })
                    }
                  />
                  <TextInput
                    value={data.address.zipcode}
                    placeholder={'10140'}
                    constraint={'^([0-9]{5})$'}
                    label={'ZIP code'}
                    onChange={(e) =>
                      setData({
                        ...data,
                        ['address']: {
                          ...data.address,
                          ['zipcode']: e.target.value,
                        },
                      })
                    }
                  />
                </div>
                <div className="mb-2.5">
                  <Map height="300px" />
                </div>
              </>
            )}
          </div>
        </div>
        <div>
          <label
            htmlFor="sending_date"
            className="mb-2.5 block text-sm font-medium text-black"
          >
            เลือกวันที่ต้องการรับสินค้า
          </label>
          <input
            onChange={(e) =>
              setData({ ...data, ['sending_date']: e.target.value })
            }
            value={data['sending_date']}
            name="sending_date"
            type="datetime-local"
            autoComplete="true"
            id="sending_date"
            className="mb-2.5 block w-full rounded-md border-2 border-black p-2.5 text-sm "
            required
          ></input>

          <label
            htmlFor="return_date"
            className="mb-2.5 block text-sm font-medium text-black"
          >
            เลือกวันที่ต้องการคืนสินค้า
          </label>
          <input
            onChange={(e) =>
              setData({ ...data, ['return_date']: e.target.value })
            }
            value={data['return_date']}
            name="return_date"
            type="datetime-local"
            autoComplete="true"
            id="return_date"
            className="mb-2.5 block w-full rounded-md border-2 border-black p-2.5 text-sm "
            required
          ></input>
        </div>
      </DropdownCard>
    </>
  );
};
