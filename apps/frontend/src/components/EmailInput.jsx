import { useState, useContext } from 'react';
import { RegisterIsValidContext } from '@/components/RegisterInfo';

export const EmailInput = ({ onChange, value, placeholder }) => {
  const [isValid, setIsValid] = useState(true);
  const { isCorrect, setIsCorrect } = useContext(RegisterIsValidContext);

  const reg =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  const handleChange = (event) => {
    if (!(event.target instanceof HTMLInputElement)) return;
    const email = event.target.value;
    reg.test(email) === false ? setIsValid(false) : setIsValid(true);
    setIsCorrect({...isCorrect , ['EmailFormat']:reg.test(email)});
  };
  return (
    <>
      <div>
        <label
          htmlFor="email"
          class="mb-2.5 block text-sm font-medium text-black dark:text-white"
        >
          Email
        </label>
        <input
          name="email"
          type="email"
          onInput={handleChange}
          onChange={onChange}
          value={value}
          id="email"
          className="mb-2.5 block w-full rounded-md border-2 border-black p-2.5 text-sm"
          placeholder={placeholder}
          required
        />
        <span
          className={
            'text-sm text-[#C26666] ' + (!isValid ? '' : 'hidden')
          }
        >
          The email you entered is incorrect format. Please try again.
        </span>
      </div>
    </>
  );
};
