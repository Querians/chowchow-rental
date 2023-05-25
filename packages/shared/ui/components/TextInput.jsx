export const TextInput = ({
  onChange,
  value,
  placeholder,
  label,
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
      <input
        name={label}
        type="text"
        value={value}
        autoComplete="true"
        onChange={onChange}
        id={label}
        className="mb-2.5 block w-full rounded-md border-2 border-black p-2.5 text-sm "
        placeholder={placeholder}
        required={isRequire}
      />
    </div>
  );
};
