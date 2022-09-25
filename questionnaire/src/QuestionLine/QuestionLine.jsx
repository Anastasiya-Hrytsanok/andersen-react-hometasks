import React from 'react';
import MultiLineInput from '../shared/MultiLineInput/MultiLineInput';
import SingleLineInput from '../shared/SingleLineInput/SingleLineInput';
import './component.css';

class QuestionLine extends React.Component {
  render() {
    const {
      config: { linesNumber, fieldName, label, placeholder, validation, maxLength },
      reset,
      errorMessage,
    } = this.props;

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
      />
    );
  }
}

export default QuestionLine;
