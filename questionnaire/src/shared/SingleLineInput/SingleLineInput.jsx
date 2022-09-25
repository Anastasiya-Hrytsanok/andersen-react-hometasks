import React from 'react';

class SingleLineInput extends React.Component {
  render() {
    const { label, fieldName, placeholder, errorMessage, maxLength } =
      this.props;

    return (
      <div className={`questionLine ${Boolean(errorMessage) ? 'error' : ''}`}>
        <label htmlFor={label}>{fieldName}</label>
        <div className="field">
          <input
            type={label === 'birthday' ? 'date' : 'text'}
            id={label}
            placeholder={placeholder}
            maxLength={label === 'phonenumber' ? maxLength : ''}
          />
          {errorMessage && <div>{errorMessage}</div>}
        </div>
      </div>
    );
  }
}

export default SingleLineInput;
