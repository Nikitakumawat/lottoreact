import React from "react";
import "./style.css";

const InputField = ({
  type,
  value,
  onChange,
  minLength,
  maxLength,
  placeholder,
  required
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      minLength={minLength}
      maxLength={maxLength}
      placeholder={placeholder}
      aria-valuemin={minLength}
      aria-valuemax={maxLength}    
      aria-valuenow={value}
      aria-placeholder={placeholder}
      required={required}
    />
  );
};

export default InputField;

