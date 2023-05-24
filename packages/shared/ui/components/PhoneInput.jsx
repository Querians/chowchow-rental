import { useState } from 'react';

export const PhoneInput = ({ onChange, value, isRequire = true }) => {
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e) => {
    if (!(e.target instanceof HTMLInputElement)) return;
    const phone = e.target.value;
    setIsValid(phone.length == 10 && /^[0-9]*$/.test(phone));
  };

  return (
    <>
      <label
        htmlFor="Phone Number"
        className="mb-2.5 block text-sm font-medium text-black"
      >
        Phone Number
      </label>
      <input
        name="Phone Number"
        id="Phone Number"
        type="tel"
        onInput={handleChange}
        onChange={onChange}
        value={value}
        className="mb-2.5 block w-full rounded-md border-2 border-black p-2.5 text-sm "
        placeholder="0123456789"
        required={isRequire}
      />
      <span
        className={
          'text-sm text-[#C26666] ' + (!isValid ? 'visible' : 'invisible')
        }
      >
        The Phone Number you entered is incorrect format.
      </span>
    </>
  );
};
