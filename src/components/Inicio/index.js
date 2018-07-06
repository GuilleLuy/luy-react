// Dependences
import React, { Component } from 'react';

//import propTypes from 'prop-types';
//import { Link } from 'react-router-dom';

import { lang } from '../../data/es';





// // Data
import { destacados } from '../../data/destacados.json';


class Inicio extends Component {
    constructor() {
        super();
        this.state = {
            destacados
        }
    }

    render() {
      var l = lang[0]
      document.body.classList.add('body_home');

       const dests = this.state.destacados.map((dest, i) => {
        return (
            <article className={dest.cliente.replace(/[. ]+/g, '-').toLowerCase()} id={"work_" + dest.id} key={i}>
                <h2>
                    <span>{dest.cliente}</span>
                    <strong>{dest.cats}</strong>
                </h2>
{/*             
                    <strong>{{ cats_utf8|replace({',':'</strong><strong>'})|raw }}</strong>
                    {dest.cats.replace(/[., ]+/g, '</strong><strong>')}
                    <strong>Impresos</strong> <strong>Marca</strong><strong>Diseño Web</strong><strong>Redes sociales</strong>
                    
*/}
                <p>{dest.desc}</p>

                <img 
                id={"dest-"+dest.cliente.replace(/[. ]+/g, '-').toLowerCase()} 
                alt={"Imagen de "+dest.cliente+" | "+dest.cats }
                srcSet={`
                ${require("../Global/media/img/trabajos/ss/"+dest.img_name+".jpg")} 600w, 
                ${require("../Global/media/img/trabajos/sm/"+dest.img_name+".jpg")} 900w, 
                ${require("../Global/media/img/trabajos/me/"+dest.img_name+".jpg")} 1300w, 
                ${require("../Global/media/img/trabajos/hd/"+dest.img_name+".jpg")} 1920w
                `}
              
                sizes="(max-width: 600px) 580px, (max-width: 899px) 780px, (max-width: 1400px) 1180px, 1620px" 
                src={require("../Global/media/img/trabajos/me/"+dest.img_name+".jpg")} />
            </article>
            
            

            )
        })


        return (
<div className="Inicio">

    <header id='header_home'>
        <p id='punto' className='nar'><span>{ l.empezar }</span></p>
            <nav id='menu'>
                <ul>
                {/* <li class='servicios' title="{{ lanservicios }}"><a href="javascript:"><span>{{ servicios }}</span></a></li>
                <li class='trabajos' title="{{ clientes }}"><a href="javascript:"><span>{{ clientes }}</span></a></li>
                <li class='portfolio'><a href="/{{ url_works  }}   "><span>{{ portfolio }}</span></a></li>
                <li class='flags flag_{{ idioma_2 }}'><a href="{{ lang_url }}" title="{{ idioma_2_text }}"><span>{{ idioma_2_text }}</span></a></li>
                <li class='mail'><a href="/{{ contact_url }}" data-fancybox data-type="ajax" title="{{ form_send }} Email"><span>Email</span></a></li>
                <li class='messenger'><a href="/facebook" target="_blank" title="Messenger Facebook"><span>Messenger Facebook</span></a></li>
                <li class='skype' title="Skype"><span>Skype</span></li> */}
                </ul>
            </nav>



     <div id='home-pres'>
       {/* <h1 id='h1-title'>{{ title_home|raw }}</h1> */}
     </div>
   </header>



              <section>
                {dests}
              </section>
              

            </div>
        );

    }
}


export default Inicio;