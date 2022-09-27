import './App.css';
import Header from './Header/Header';
import rowData from './Data/rowData';
import QuestionLine from './QuestionLine/QuestionLine';
import InfoSending from './InfoSending/InfoSending';
import { useRef, useState, useEffect, useMemo, useCallback } from 'react';
import { validate } from './validation';
import { findObjectInArrayByFieldValue } from './utils';
import QuestionnaireResult from './QuestionnaireResult/QuestionnaireResult';

function App() {
  const [validationResult, setValidationResult] = useState(undefined);
  const [reset, setReset] = useState(false);

  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    let fields = [...ref.current.elements].filter((el) => el.id);

    const validations = rowData
      .filter((el) => el.validation)
      .map((el) => ({ label: el.label, validation: el.validation }));

    const result = validations.map(({ label, validation }) => {
      const value = fields.find((f) => f.id === label).value;
      return { label, errorMessage: validate(value, validation) };
    });

    setValidationResult(result);
  };

  const handleCancelButton = useCallback(() => {
    let fields = [...ref.current.elements].filter((el) => el.id);
    fields.forEach((f) => {
      f.value = '';
    });

    setReset(true);
    setValidationResult(undefined);
  }, [ref]);

  useEffect(() => {
    if (reset) {
      setReset(false);
    }
  }, [reset]);

  const showForm = useMemo(
    () =>
      !validationResult ||
      validationResult.some((el) => Boolean(el.errorMessage)),
    [validationResult]
  );

  return (
    <div className="App">
      {showForm ? (
        <>
          <Header content="Создание анкеты" />
          <form onSubmit={handleSubmit} ref={ref}>
            {rowData.map((config, index) => {
              const errorMessageValue =
                validationResult &&
                findObjectInArrayByFieldValue(
                  validationResult,
                  'label',
                  config.label
                )?.errorMessage;

              return (
                <QuestionLine
                  config={config}
                  key={index}
                  errorMessage={errorMessageValue}
                  reset={reset}
                />
              );
            })}
            <InfoSending handleCancelButton={handleCancelButton} />
          </form>
        </>
      ) : (
        <QuestionnaireResult
          fields={[...ref.current.elements]}
          rowData={rowData}
        />
      )}
    </div>
  );
}

export default App;
