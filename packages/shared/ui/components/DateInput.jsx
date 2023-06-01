export const DateInput = ({ onChange, label, isRequire = true, type='', defaultValue='', value }) => {
  return (
    <div>
      <label
        htmlFor={label}
        className="mb-2.5 block text-sm font-medium text-black"
      >
        {label}
      </label>
      {type=='readOnly'
      ?
      <input
        disabled
        readOnly
        value={value}
        defaultValue={defaultValue}
        name={label}
        id={label}
        type="date"
        onChange={onChange}
        className=" mb-2.5 inline-block w-full rounded-md border-2 border-black p-2.5 text-sm "
        required={isRequire}
      />
      :
      <input
        defaultValue={defaultValue}
        value={value}
        name={label}
        id={label}
        type="date"
        onChange={onChange}
        className=" mb-2.5 inline-block w-full rounded-md border-2 border-black p-2.5 text-sm "
        required={isRequire}
      />
      }
    </div>
  );
};
