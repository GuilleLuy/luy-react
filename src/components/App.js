// Dependences
import React, { Component } from 'react';
import propTypes from 'prop-types';

// Components
import Header from './Global/Header';
import Content from './Global/Content';
import Footer from './Global/Footer';

// Menu
import items from '../data/menu';
// Idioma
import '../data/es.js';
// less
import './Global/less/_import_diseno.less';

class App extends Component {
  static propTypes = { 
    children: propTypes.object.isRequired,
  }

  constructor(props) { 
    super(props); 
      window.the_body = document.body;
      

      // document.getElementsByClassName('menu_principal')[0];
  }

  
  componentDidMount() { 

  document.getElementById('btn-servicios').classList.remove('rotate');
  document.getElementById('btn-servicios').classList.remove('quieto');

  document.getElementById('btn-clientes').classList.remove('scroll');
  document.getElementById('btn-clientes').classList.remove('quieto');
  

};


  render() {
    

    const { children } = this.props;
    
    return (
      <div className="App">
        <Header items={ items } />
          <Content body={children} />
        <Footer />
      </div>
    );
  }
}



export default App;