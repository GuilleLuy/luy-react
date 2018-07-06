// Dependences
import React, { Component } from 'react';

import propTypes from 'prop-types';

import './Global/less/_import_diseno.less';

// Components
import Header from './Global/Header';
import Content from './Global/Content';
import Footer from './Global/Footer';

// Data
import items from '../data/menu';
import { lang } from '../data/es';

class App extends Component {
  static propTypes = { 
    children: propTypes.object.isRequired
  }

  render() {    
    const { children } = this.props;
    var l = lang[0];
    return (
      <div className="App">
        <Header title={"Guillermo Luy. " + l.cliente_desc} 
        items={ items } />
          <Content body={children} />
        <Footer />
      </div>
    );
  }
}

export default App;