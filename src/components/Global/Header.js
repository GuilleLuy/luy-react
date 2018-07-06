// Dependences
import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Assets
import logo from './images/logo-luy.svg';
//import './css/Header.css';

class Header extends Component {
  static propTypes = {
    title: propTypes.string.isRequired,
    items: propTypes.array.isRequired
  }

  render() {
    const { title, items} = this.props;

    return (
      <div className="Header">
        <header className="Logo">
          <img src={logo} alt="logo"/>
          <h1>{ title }</h1>
          <ul className="Menu">
            {items && items.map ((item,key) => <li key={key}><Link to={item.url}>{item.title}</Link></li>)} 
          </ul>
          </header>
      </div>
    );
  }
}

export default Header;
