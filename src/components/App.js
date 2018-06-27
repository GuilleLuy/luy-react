// Dependences
import React, { Component } from 'react';
import propTypes from 'prop-types';

// Components
import Header from './Global/Header';
import Content from './Global/Content';
import Footer from './Global/Footer';

// Data
import items from '../data/menu';

class App extends Component {
  static propTypes = { 
    children: propTypes.object.isRequired
  };
  render() {
    const { children } = this.props;
    return (
      <div className="App">
        <Header title="Guillermo Luy. Diseño Gráfico &amp; Programación" items={ items } />
          <Content body={children} />
        <Footer />
      </div>
    );
  }
}

export default App;