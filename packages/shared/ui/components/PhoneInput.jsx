import { useState } from 'react';

export const PhoneInput = ({ label="Phone Number", onChange, value, isRequire = true,   type='', defaultValue='', }) => {
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e) => {
    if (!(e.target instanceof HTMLInputElement)) return;
    const phone = e.target.value;
    setIsValid(phone.length == 10 && /^[0-9]*$/.test(phone));
  };

  return (
    <div>
      <label
        htmlFor="Phone Number"
        className="mb-2.5 block text-sm font-medium text-black"
      >
        {label}
      </label>
      {type=='readOnly'
      ?
      <input
        disabled
        readOnly
        defaultValue = {defaultValue}
        name="Phone Number"
        id="Phone Number"
        type="tel"
        onInput={handleChange}
        pattern="^[0-9]{10}$"
        onChange={onChange}
        value={value}
        className="mb-2.5 block w-full rounded-md border-2 border-black p-2.5 text-sm "
        placeholder="0123456789"
        required={isRequire}
      />
      :
      <input
        defaultValue = {defaultValue}
        name="Phone Number"
        id="Phone Number"
        type="tel"
        onInput={handleChange}
        pattern="^[0-9]{10}$"
        onChange={onChange}
        value={value}
        className="mb-2.5 block w-full rounded-md border-2 border-black p-2.5 text-sm "
        placeholder="0123456789"
        required={isRequire}
      />
      }
    </div>
  );
};
