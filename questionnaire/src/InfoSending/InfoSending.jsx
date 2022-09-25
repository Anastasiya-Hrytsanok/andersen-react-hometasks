import React from 'react';
import './component.css';

class InfoSending extends React.Component {
  render() {
    return (
      <div className="buttons">
        <button type="button" onClick={this.props.handleCancelButton}>Отмена</button>
        <button type="submit" onClick={this.props.handleSaveButton}>Сохранить</button>
      </div>
    );
  }
}

export default InfoSending;
