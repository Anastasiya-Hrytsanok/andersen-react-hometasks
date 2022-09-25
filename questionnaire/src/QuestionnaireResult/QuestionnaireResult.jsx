import React from 'react';
import Header from '../Header/Header';
import QuestionnaireResultLine from '../QuestionnaireResultLine/QuestionnaireResultLine';
import {
  getFieldValueByFieldId,
  findObjectInArrayByFieldValue,
} from '../utils';

class QuestionnaireResult extends React.Component {
  render() {
    const { fields, rowData } = this.props;

    const headerContent = `${getFieldValueByFieldId(
      fields,
      'name'
    )} ${getFieldValueByFieldId(fields, 'surname')}`;

    return (
      <>
        <Header content={headerContent} />
        {fields
          .filter((el) => el.id)
          .map((el, index) => {
            const fieldName = findObjectInArrayByFieldValue(
              rowData,
              'label',
              el.id
            )?.fieldName;

            return (
              <QuestionnaireResultLine
                key={index}
                fieldName={fieldName}
                value={el.value}
              />
            );
          })}
      </>
    );
  }
}

export default QuestionnaireResult;
