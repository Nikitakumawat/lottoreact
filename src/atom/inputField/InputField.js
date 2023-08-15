import React from "react";
import "./style.css";

const InputField = ({
  type,
  value,
  onChange,
  minLength,
  maxLength,
  placeholder,
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      minLength={minLength}
      maxLength={maxLength}
      placeholder={placeholder}
    />
  );
};

export default InputField;
