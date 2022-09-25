import React from 'react';
import './component.css';

class Header extends React.Component {
  render() {
    const { content } = this.props;
    return <h1>{content}</h1>;
  }
}

export default Header;
