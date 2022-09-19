import React from 'react';

class MultiLineInput extends React.Component {
  handleKeyPress = (event) => {
    var textarea = document.getElementById(this.props.label),
      text = textarea.value,
      numberOfLines = (text.match(/\n/g) || []).length + 1,
      maxRows = parseInt(textarea.getAttribute('rows'));
      console.log(textarea);

    if (event.which === 13 && numberOfLines === maxRows) {
      return false;
    }
  };

  render() {
    const { label, linesNumber, fieldName, placeholder } = this.props;

    return (
      <div className="questionLine">
        <label htmlFor={label}>{fieldName}</label>
        <textarea
          id={label}
          placeholder={placeholder}
          rows={linesNumber}
          onKeyPress={this.handleKeyPress}
        ></textarea>
      </div>
    );
  }
}

export default MultiLineInput;
