// var

// Dependences
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Data
import { destacados } from '../../data/destacados';

class Inicio extends Component {
   
    constructor() { 
        super();
        window.scrollTo(0, 0);
        the_body.id = 'body_home';
        this.state = {
            destacados : destacados,
            puntoClick : false,
            inicioClick: true
        }
    }

    componentWillMount(){
        global.inicioOn();
    }
    componentDidMount() { 
        window.addEventListener('scroll', this.scrollBottom);

        document.getElementById('btn-clientes').classList.remove('quieto')
        document.getElementById('btn-clientes').classList.add('scroll')
        document.getElementById('btn-servicios').classList.remove('quieto')
        document.getElementById('btn-servicios').classList.add('rotate')
        punto.current.classList.remove('quieto')
        punto.current.classList.remove('hide')
    };
    componentWillUnmount() { 
        window.removeEventListener('scroll', this.scrollBottom);
        this.setState({
            puntoClick :true // para invertir siempre: !this.state.puntoClick
        });
        punto.current.classList.remove('nar')
        punto.current.classList.add('neg')
    };
      
    scrollBottom(event) {
        if (window.scrollY > 140) { 
            document.getElementById('btn-servicios').classList.add('quieto')
            document.getElementById('btn-clientes').classList.add('quieto');
            document.getElementById('btn-clientes').classList.remove('scroll');

            punto.current.classList.add('quieto');
        
        } else {                 
            document.getElementById('btn-servicios').classList.remove('quieto');
            document.getElementById('btn-clientes').classList.remove('quieto');
            document.getElementById('btn-clientes').classList.add('scroll');
            punto.current.classList.remove('quieto');
        }
        
        if (window.scrollY > 250) {   
            document.getElementById('btn-servicios').classList.remove('rotate');
        } else {
            document.getElementById('btn-servicios').classList.add('rotate');
        }
    };

    render() {
       const dests = this.state.destacados.map((dest, i) => {
        var categorias = dest.cats.replace(/[,]+/g, '</strong><strong>');
        return (
            <article className={dest.cliente.replace(/[. ]+/g, '-').toLowerCase()} id={"work_" + dest.id} key={i}>
                <h2>
                    <span>{dest.cliente}</span>
                    <strong dangerouslySetInnerHTML={{__html: categorias }} />
                </h2>
                <p>{dest.desc}</p>
                <img 
                    className="destacados"
                    id={"dest-"+dest.cliente.replace(/[. ]+/g, '-').toLowerCase()} 
                    alt={"Imagen de "+dest.cliente+" | "+dest.cats }
                    srcSet={`
                        ${require("../Global/media/img/trabajos/clientes/ss/"+dest.img_name+".jpg")} 600w, 
                        ${require("../Global/media/img/trabajos/clientes/sm/"+dest.img_name+".jpg")} 900w, 
                        ${require("../Global/media/img/trabajos/clientes/me/"+dest.img_name+".jpg")} 1300w, 
                        ${require("../Global/media/img/trabajos/clientes/hd/"+dest.img_name+".jpg")} 1920w
                    `}
                    sizes="(max-width: 600px) 580px, (max-width: 899px) 780px, (max-width: 1400px) 1180px, 1620px" 
                    src={require("../Global/media/img/trabajos/clientes/me/"+dest.img_name+".jpg")} />
            </article>
            )
        })
        return (
            <div className="Inicio">
              <section id="works">
                {dests}
              </section>
            </div>
        );
    }
}

// window.onbeforeunload = function () {
//     window.scrollTo(0, 0);
// }

export default Inicio;