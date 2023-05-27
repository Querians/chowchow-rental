export const TextInput = ({
  onChange,
  value,
  placeholder,
  label,
  constraint,
  isRequire = true,
  type='',
  defaultValue='',
}) => {
  return (
    <div>
      <label
        htmlFor={label}
        className="mb-2.5 block text-sm font-medium text-black"
      >
        {label}
      </label>
      { type=='readOnly' ?
        <input
          disabled
          readOnly
          defaultValue={defaultValue}
          name={label}
          pattern={constraint}
          type="text"
          value={value}
          autoComplete="true"
          onChange={onChange}
          id={label}
          className="mb-2.5 block w-full rounded-md border-2 border-black p-2.5 text-sm "
          placeholder={placeholder}
          required={isRequire}
        />
      :
        <input
          defaultValue={defaultValue}
          name={label}
          pattern={constraint}
          type="text"
          value={value}
          autoComplete="true"
          onChange={onChange}
          id={label}
          className="mb-2.5 block w-full rounded-md border-2 border-black p-2.5 text-sm "
          placeholder={placeholder}
          required={isRequire}
        />

      }
    </div>
  );
};
