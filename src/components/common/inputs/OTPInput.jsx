/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

const OTPInput = ({ length, onComplete, resetFlag }) => {
  const [inputs, setInputs] = React.useState(Array(length).fill(''));
  const inputRefs = React.useRef([]);

  React.useEffect(() => {
    // Focus the first input on mount
    inputRefs.current[0].focus();
  }, []);

  React.useEffect(() => {
    if (resetFlag) {
      // Reset inputs when resetFlag changes
      setInputs(Array(length).fill(''));
      // Optionally, focus the first input after reset
      if (inputRefs.current[0]) {
        inputRefs.current[0].focus();
      }
    }
  }, [resetFlag]); // Dependency array includes resetFlag

  const handleChange = (value, index) => {
    if (/^\d$/.test(value) || value === '') {
      const newInputs = [...inputs];
      newInputs[index] = value;
      setInputs(newInputs);

      if (value && index < length - 1) {
        inputRefs.current[index + 1].focus();
      }

      if (newInputs.every(input => input)) {
        onComplete(newInputs.join(''));
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !inputs[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className='flex justify-center space-x-2'>
      {inputs.map((input, index) => (
        <input
          key={index}
          ref={el => (inputRefs.current[index] = el)}
          className='rounded-lg bg-gray-100 cursor-text light:bg-gray-800 w-14 aspect-square flex items-center justify-center text-center'
          maxLength={1}
          value={input}
          onChange={e => handleChange(e.target.value, index)}
          onKeyDown={e => handleKeyDown(e, index)}
          type='text'
          inputMode='numeric'
          autoComplete='off'
        />
      ))}
    </div>
  );
};

export default OTPInput;
