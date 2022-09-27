import React from 'react';
import './component.css';

function InfoSending({ handleCancelButton, handleSaveButton }) {
  return (
    <div className="buttons">
      <button type="button" onClick={handleCancelButton}>
        Отмена
      </button>
      <button type="submit" onClick={handleSaveButton}>
        Сохранить
      </button>
    </div>
  );
}

export default InfoSending;
