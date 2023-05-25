import { useState } from 'react';

export const PasswordInput = ({
  type,
  label = 'Password',
  onChange,
  value,
  placeholder,
}) => {
  const [isValid, setIsValid] = useState({});
  const choose = {
    sign_up: 0,
    sign_in: 1,
    confirmPassword: 2,
  };

  const constraints = {
    lowerCase: {
      reg: /(?=.*[a-z])/,
      text: 'atleast 1 letter in lower case',
    },
    upperCase: {
      reg: /(?=.*[A-Z])/,
      text: 'atleast 1 letter in upper case',
    },
    digit: {
      reg: /(?=.*\d)/,
      text: 'atleast 1 digit character',
    },
    special: {
      reg: /(?=.*[@$!%*?&])/,
      text: 'atleast 1 special characters',
    },
    atleast8: {
      reg: /.{8,}/,
      text: 'atleast 8 characters',
    },
  };

  const result = {};
  const handleChange = (event) => {
    if (!(event.target instanceof HTMLInputElement) || choose[type]) return;
    const password = event.target.value;
    Object.keys(constraints).forEach(
      (key) => (result[key] = constraints[key]['reg'].test(password)),
    );
    setIsValid({
      ...isValid,
      ...result,
    });
  };

  return (
    <>
      <div>
        <label
          htmlFor="password"
          className="mb-2.5 block text-sm font-medium text-black"
        >
          {label}
        </label>
        <input
          name={choose[type] === 2 ? 'confirmPassword' : 'password'}
          type="password"
          value={value}
          autoComplete="true"
          onInput={handleChange}
          onChange={onChange}
          onCopy={(e) => e.preventDefault()}
          onPaste={(e) => e.preventDefault()}
          onCut={(e) => e.preventDefault()}
          id={choose[type] === 2 ? 'confirmPassword' : 'password'}
          className="mb-2.5 block w-full rounded-md border-2 border-black p-2.5 text-sm "
          placeholder={placeholder}
          required
        />
      </div>
      <div className="grid grid-cols-2 gap-1 text-sm text-[#C26666]">
        {choose[type] === 0 &&
          Object.keys(constraints).map((keyName) => (
            <div
              className={
                (isValid[keyName] ? 'text-[#54825B] ' : '') + 'flex items-end'
              }
            >
              <span>
                {isValid[keyName] ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    class="h-6 w-6 fill-[#54825B]"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                      clip-rule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    class="h-6 w-6 fill-[#C26666]"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                      clip-rule="evenodd"
                    />
                  </svg>
                )}
              </span>
              {constraints[keyName]['text']}
            </div>
          ))}
      </div>
    </>
  );
};
