import React from 'react';

class MultiLineInput extends React.Component {
  constructor() {
    super();
    this.state = { fieldLength: 0 };
  }

  componentDidUpdate({ reset: prevReset }) {
    const { reset: currentReset } = this.props;

    if (prevReset !== currentReset && currentReset) {
      this.setState({ fieldLength: 0 });
    }
  }

  handleChange = (e) => {
    this.setState({ fieldLength: e.target.value.length });
  };

  render() {
    const {
      label,
      linesNumber,
      fieldName,
      placeholder,
      errorMessage: outerErrorMessage,
      validation,
    } = this.props;

    const { fieldLength } = this.state;

    const { characterLimit, errorMessage: innerErrorMessage } = validation.find(
      (el) => el.type === 'CHARACTER_LIMIT'
    );

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
            onChange={this.handleChange}
          />
          {fieldLength > characterLimit ? (
            <div>{innerErrorMessage}</div>
          ) : outerErrorMessage ? (
            <div>{outerErrorMessage}</div>
          ) : (
            <div>{`Осталось ${
              characterLimit - fieldLength
            }/${characterLimit} символов`}</div>
          )}
        </div>
      </div>
    );
  }
}

export default MultiLineInput;
