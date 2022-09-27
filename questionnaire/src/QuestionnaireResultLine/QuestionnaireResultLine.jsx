import React from 'react';
import './component.css';

function QuestionnaireResultLine({ fieldName, value }) {
  return (
    <div className="result_field">
      <p className="field_name">{fieldName}</p>
      <p className="field_value">{value}</p>
    </div>
  );
}

export default QuestionnaireResultLine;
