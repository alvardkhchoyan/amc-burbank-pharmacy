import React from 'react';

interface InputFieldProps {
  type: string;
  placeholder: string;
  className?: string;
  name: string;  
  value: string;  
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ type, placeholder, className, name, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={className}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}
;

export default InputField;