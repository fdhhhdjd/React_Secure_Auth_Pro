import { useState } from 'react';

const InputField = ({
  id,
  label,
  type,
  placeholder,
  name,
  onChange,
  isPassword = false
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='relative'>
      <label
        htmlFor={id}
        className='block mb-2 text-sm font-medium text-gray-900'
      >
        {label}
      </label>
      <div className='flex items-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg '>
        <input
          type={type === 'password' && !showPassword ? 'password' : 'text'}
          id={id}
          className='flex-1 p-2.5 placeholder-gray-400 rounded-lg'
          placeholder={placeholder}
          name={name}
          onChange={onChange}
        />
        {isPassword && (
          <button
            type='button'
            className='pr-3'
            onClick={togglePasswordVisibility}
          >
            {showPassword ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 text-gray-700'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 text-gray-700'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7 .635-2.033 2.088-3.677 3.857-4.909M15 12a3 3 0 11-6 0 3 3 0 016 0zm6 0c0 1.657-.67 3.156-1.757 4.243M22.458 12C21.184 7.943 17.393 5 13 5c-.933 0-1.832.133-2.677.379'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M1 1l22 22'
                />
              </svg>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default InputField;
