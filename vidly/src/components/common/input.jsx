import React from 'react';
const Input = (props) => {
  const { name, label, value, onChange, error } = props;
  return (
    <div className="form-group">
      <label htmlFor={name} >{label}</label>
      <input
        value={value}
        id={name}
        type="text"
        className="form-control"
        onChange={onChange}
        name={name}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>);
}

export default Input;