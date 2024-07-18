const InputField = ({ id, label, type, placeholder, name, onChange }) => {
  return (
    <div>
      <label htmlFor={id} className='block mb-2 text-sm font-medium text-white'>
        {label}
      </label>
      <input
        type={type}
        id={id}
        className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-600 focus:border-orange-600 block w-full p-2.5 placeholder-gray-400'
        placeholder={placeholder}
        name={name}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
