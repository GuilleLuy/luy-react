// Dependences
import React, { Component }  from 'react';
import { Link  } from 'react-router-dom';
import items from '../../data/trabajos';

class Trabajos extends Component {
    render() {
        return (
            <div className="trabajos">
            <h1>Listado de trabasjos</h1>
            <ul className="trabajosListado">
                {items && items.map ((item,key) => 
                <li key={key}>
                <Link to={'trabajos/'+item.url}>{item.titulo}</Link>
                </li>
                )} 
            </ul>
            </div>
        )
    }
}

export default Trabajos;