import React from 'react';
import MultiLineInput from '../shared/MultiLineInput/MultiLineInput';
import SingleLineInput from '../shared/SingleLineInput/SingleLineInput';
import './component.css';

class QuestionLine extends React.Component {
  render() {
    const {
      it: { linesNumber, fieldName, label, placeholder },
    } = this.props;

    return linesNumber ? (
      <MultiLineInput
        linesNumber={linesNumber}
        fieldName={fieldName}
        label={label}
        placeholder={placeholder}
      />
    ) : (
      <SingleLineInput
        fieldName={fieldName}
        label={label}
        placeholder={placeholder}
      />
    );
  }
}

export default QuestionLine;
