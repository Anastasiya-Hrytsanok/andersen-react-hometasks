import React from 'react';

class SingleLineInput extends React.Component {
  render() {
    const { label, fieldName, placeholder } = this.props;

    return (
      <div className="questionLine">
        <label htmlFor={label}>{fieldName}</label>
        <input type="text" id={label} placeholder={placeholder} />
      </div>
    );
  }
}

export default SingleLineInput;
