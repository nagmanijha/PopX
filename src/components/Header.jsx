import React from 'react';

export default function FormInput({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  name,
  required = false
}) {
  return (
    <div className="form-group">
      <label className="input-label">{label}{required && '*'}</label>
      <input
        type={type}
        className="form-input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        required={required}
      />
    </div>
  );
}