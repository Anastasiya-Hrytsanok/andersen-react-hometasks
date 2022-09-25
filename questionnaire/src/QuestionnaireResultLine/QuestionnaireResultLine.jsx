import React from 'react';
import './component.css';

class QuestionnaireResultLine extends React.Component {
  render() {
    const { fieldName, value } = this.props;

    return (
      <div className="result_field">
        <p className="field_name">{fieldName}</p>
        <p className="field_value">{value}</p>
      </div>
    );
  }
}

export default QuestionnaireResultLine;
