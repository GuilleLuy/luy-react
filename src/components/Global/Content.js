// Dependences 
import React, { Component } from 'react';
import propTypes from 'prop-types'; 

// -- segun el tutorial se incluye para los props items de body (links del menu), que se definen en static propTypes, lo cierto es que sin estas dos cosas tambi'en funciona

// Assets
import './css/Content.css';

class Content extends Component {
  static propTypes = { 
    body: propTypes.object.isRequired
  };

  render() {
    const { body } = this.props;
    return (
      <div className="Content">
        {body}
      </div>
    );
  }
}
export default Content;