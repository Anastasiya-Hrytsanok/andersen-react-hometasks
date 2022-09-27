import React from 'react';
import MultiLineInput from '../shared/MultiLineInput/MultiLineInput';
import SingleLineInput from '../shared/SingleLineInput/SingleLineInput';
import './component.css';

function QuestionLine({
  config: {
    linesNumber,
    fieldName,
    label,
    placeholder,
    validation,
    maxLength,
    type,
  },
  reset,
  errorMessage,
}) {
  return linesNumber ? (
    <MultiLineInput
      linesNumber={linesNumber}
      fieldName={fieldName}
      label={label}
      placeholder={placeholder}
      validation={validation}
      errorMessage={errorMessage}
      reset={reset}
    />
  ) : (
    <SingleLineInput
      fieldName={fieldName}
      label={label}
      placeholder={placeholder}
      errorMessage={errorMessage}
      maxLength={maxLength || ''}
      type={type || 'text'}
    />
  );
}

export default QuestionLine;
