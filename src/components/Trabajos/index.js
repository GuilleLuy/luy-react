
// Dependences
import React, { Component }  from 'react';
import { Link  } from 'react-router-dom';
import items from '../../data/trabajos';

class Trabajos extends Component {
    
    constructor() {
        super(); 
        the_body.id = 'body_works';
        // lo que sea que ponga aca a las variables lo hace fuera de esto, / actua como willmount?
        //document.getElementById('btn-clientes').classList.remove('hide');
        
        
        
    }

    componentDidMount() { 
        //window.addEventListener('scroll', this.scrollBottom); 
        document.getElementById('btn-clientes').classList.remove('scroll');
        document.getElementById('btn-clientes').classList.remove('hide');
        document.getElementById('btn-clientes').classList.add('quieto');
        document.getElementById('punto').classList.add('hide');
    };


    
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