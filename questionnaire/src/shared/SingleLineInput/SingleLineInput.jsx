import React from 'react';

function SingleLineInput({
  label,
  fieldName,
  placeholder,
  errorMessage,
  maxLength,
  type,
}) {
  return (
    <div className={`questionLine ${Boolean(errorMessage) ? 'error' : ''}`}>
      <label htmlFor={label}>{fieldName}</label>
      <div className="field">
        <input
          type={type}
          id={label}
          placeholder={placeholder}
          maxLength={maxLength}
        />
        {errorMessage && <div>{errorMessage}</div>}
      </div>
    </div>
  );
}

export default SingleLineInput;
