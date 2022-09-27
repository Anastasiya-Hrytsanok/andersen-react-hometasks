import React, { useState, useEffect } from 'react';

function MultiLineInput({
  label,
  linesNumber,
  fieldName,
  placeholder,
  errorMessage: outerErrorMessage,
  validation,
  reset,
}) {
  const [fieldLength, setFieldLength] = useState(0);

  useEffect(() => {
    if (reset) {
      setFieldLength(0);
    }
  }, [reset]);

  const handleChange = (e) => {
    setFieldLength(e.target.value.length);
  };

  const { characterLimit, errorMessage: innerErrorMessage } =
    validation.find((el) => el.type === 'CHARACTER_LIMIT') || {};

  return (
    <div
      className={`questionLine ${Boolean(outerErrorMessage) ? 'error' : ''}`}
    >
      <label htmlFor={label}>{fieldName}</label>
      <div className="field">
        <textarea
          id={label}
          placeholder={placeholder}
          rows={linesNumber}
          onChange={(e) => handleChange(e)}
        />
        {characterLimit && (
          <>
            {fieldLength > characterLimit ? (
              <div>{innerErrorMessage}</div>
            ) : outerErrorMessage ? (
              <div>{outerErrorMessage}</div>
            ) : (
              <div>{`Осталось ${
                characterLimit - fieldLength
              }/${characterLimit} символов`}</div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default MultiLineInput;
