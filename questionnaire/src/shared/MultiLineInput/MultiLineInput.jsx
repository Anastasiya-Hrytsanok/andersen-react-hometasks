import React from 'react';

class MultiLineInput extends React.Component {
  render() {
    const { label, linesNumber, fieldName, placeholder } = this.props;

    return (
      <div className="questionLine">
        <label htmlFor={label}>{fieldName}</label>
        <textarea
          id={label}
          placeholder={placeholder}
          rows={linesNumber}
          maxLength="590"
        ></textarea>
      </div>
    );
  }
}

export default MultiLineInput;
