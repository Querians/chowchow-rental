export const Dropdown = ({
  label,
  placeholder,
  options,
  onChange,
  value,
  defaultValue,
  isRequire = true,
}) => {
  return (
    <div>
      <label
        htmlFor={label}
        className="mb-2.5 block text-sm font-medium text-black"
      >
        {label}
      </label>
      <select
        name={label}
        defaultValue={defaultValue}
        id={label}
        onChange={onChange}
        value={value}
        className="mb-2.5 block w-full rounded-md border-2 border-black p-2.5 text-sm text-black invalid:text-gray-500 focus:border-blue-500 focus:ring-blue-500"
        required={isRequire}
      >
        <option hidden disabled selected value={''}>
          {placeholder}
        </option>
        {Object.keys(options).map((key) => (
          <option key={key} value={key}>
            {options[key]}
          </option>
        ))}
      </select>
    </div>
  );
};
