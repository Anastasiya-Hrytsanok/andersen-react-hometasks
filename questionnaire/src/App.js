import './App.css';
import Header from './Header/Header';
import rowData from './Data/rowData';
import QuestionLine from './QuestionLine/QuestionLine';
import InfoSending from './InfoSending/InfoSending';
import { Component, createRef } from 'react';
import { validate } from './validation';
import { findObjectInArrayByFieldValue } from './utils';
import QuestionnaireResult from './QuestionnaireResult/QuestionnaireResult';

class App extends Component {
  constructor() {
    super();
    this.state = { validationResult: undefined, reset: false };
  }

  ref = new createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    let fields = [...this.ref.current.elements].filter((el) => el.id);

    const validations = rowData
      .filter((el) => el.validation)
      .map((el) => ({ label: el.label, validation: el.validation }));

    const result = validations.map(({ label, validation }) => {
      const value = fields.find((f) => f.id === label).value;
      return { label, errorMessage: validate(value, validation) };
    });

    this.setState({ validationResult: result });
  };

  handleCancelButton = () => {
    let fields = [...this.ref.current.elements].filter((el) => el.id);
    fields.forEach((f) => {
      f.value = '';
    });

    this.setState({ reset: true, validationResult: undefined }, () => {
      this.setState({ reset: false });
    });
  };

  render() {
    return (
      <div className="App">
        {!this.state.validationResult ||
        this.state.validationResult.some((el) => Boolean(el.errorMessage)) ? (
          <>
            <Header content="Создание анкеты" />
            <form onSubmit={this.handleSubmit} ref={this.ref}>
              {rowData.map((config, index) => {
                const errorMessageValue =
                  this.state.validationResult &&
                  findObjectInArrayByFieldValue(
                    this.state.validationResult,
                    'label',
                    config.label
                  )?.errorMessage;

                return (
                  <QuestionLine
                    config={config}
                    key={index}
                    errorMessage={errorMessageValue}
                    reset={this.state.reset}
                  />
                );
              })}
              <InfoSending handleCancelButton={this.handleCancelButton} />
            </form>
          </>
        ) : (
          <QuestionnaireResult
            fields={[...this.ref.current.elements]}
            rowData={rowData}
          />
        )}
      </div>
    );
  }
}

export default App;
