export const Dropdown = ({
  label,
  placeholder,
  options,
  onChange,
  isRequire = true,
}) => {
  return (
    <>
      <label
        htmlFor={label}
        className="mb-2.5 block text-sm font-medium text-black"
      >
        {label}
      </label>
      <select
        name={label}
        id={label}
        onChange={onChange}
        className="mb-2.5 block w-full rounded-md border-2 border-black p-2.5 text-sm text-black invalid:text-gray-500 focus:border-blue-500 focus:ring-blue-500"
        required={isRequire}
      >
        <option hidden disabled selected value={''}>
          {placeholder}
        </option>
        {Object.keys(options).map((key) => (
          <option value={key}>{options[key]}</option>
        ))}
      </select>
    </>
  );
};
