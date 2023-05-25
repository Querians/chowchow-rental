export const Textarea = ({
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
        className="mb-2.5 block text-sm font-medium text-black dark:text-white"
      >
        {label}
      </label>
      <textarea
        name={label}
        id={label}
        rows="4"
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        className="mb-2.5 block w-full rounded-md border-2 border-black p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500"
        required={isRequire}
      />
    </div>
  );
};
