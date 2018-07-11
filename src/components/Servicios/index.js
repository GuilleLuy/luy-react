// var


// con css



// Dependences
import React, { Component }  from 'react';

class Servicios extends Component {

    constructor(props) {
        super(props);
        this.state = {
            puntoClick : false
        }
        the_body.id = 'body_servs';
        window.scrollTo(0, 0);          
        global.servs_aside = React.createRef(); 
        
    }

    componentWillMount(){
        global.inicioOff();
    }
    
    componentDidMount() { 
        window.addEventListener('scroll', this.scrollBottom); 
        document.getElementById('home-pres').classList.remove('hide');
        document.getElementById('btn-clientes').classList.remove('scroll');
        document.getElementById('btn-clientes').classList.remove('hide');
        document.getElementById('btn-clientes').classList.add('quieto');
        document.getElementById('btn-trabajos').classList.add('quieto');
        document.getElementById('punto').classList.add('hide');

        // title_position = title_position.innerWidth;
        
        // h1_ref.current.style.left= title_position;

        // var $title_position = $('#pres-orange').css("width");
        // $title
        //   .css({'left':$title_position})
        // ;

    };

    componentWillUnmount() { 
        window.removeEventListener('scroll', this.scrollBottom);
    };
    
    scrollBottom(event) {
        if (window.scrollY > 10) { 
            document.getElementById('btn-clientes').classList.add('prescroll');
        } else {                 
            document.getElementById('btn-clientes').classList.remove('prescroll');
            servs_aside.current.style.marginTop="0vh";
        }
        
        if (window.scrollY > 150) { servs_aside.current.style.marginTop="-10vh"; }
        if (window.scrollY > 300) { servs_aside.current.style.marginTop="-20vh"; }

        if (window.scrollY > 450) { 
            servs_aside.current.style.marginTop="-30vh";
            document.getElementById('btn-clientes').classList.add('scroll');
            document.getElementById('btn-clientes').classList.remove('quieto');
        } else {                 
            document.getElementById('btn-clientes').classList.add('quieto');
            document.getElementById('btn-clientes').classList.remove('scroll');
        }
        if (window.scrollY > 600) { servs_aside.current.style.marginTop="-40vh"; }
        if (window.scrollY > 750) { servs_aside.current.style.marginTop="-50vh"; }
        if (window.scrollY > 900) { servs_aside.current.style.marginTop="-60vh"; }
        // if (window.scrollY > 700) { servs_aside.current.style.marginTop="-70vh"; }
        // if (window.scrollY > 800) { servs_aside.current.style.marginTop="-80vh"; }
    };


    render() {
        return (
<aside id='services' className="Servicios">
    <div id='texto_init'>
    <p dangerouslySetInnerHTML={{__html: cv_texto_init_1 }} />
      <p dangerouslySetInnerHTML={{__html: cv_texto_init_2 }} />
      <p dangerouslySetInnerHTML={{__html: cv_texto_init_3 }} />
      <p dangerouslySetInnerHTML={{__html: cv_texto_init_4 }} />
      <p dangerouslySetInnerHTML={{__html: cv_texto_init_5 }} />
      <p dangerouslySetInnerHTML={{__html: cv_texto_init_6 }} />
      <p dangerouslySetInnerHTML={{__html: cv_texto_init_7 }} />
      <p dangerouslySetInnerHTML={{__html: cv_texto_init_8 }} />
      <p dangerouslySetInnerHTML={{__html: cv_texto_init_9 }} />
      <ul>
        <li className='link'><a href="{ url_linkedin }" title="Linkedin"><span>Linkedin</span></a></li>
        <li className='face'><a href="https://www.facebook.com/luy.com.ar" title="Facebook"><span>Facebook</span></a></li>
      </ul>
    </div>
    <section id="servs_links" ref={servs_aside}>
      <div id='links'>
        <h1>{ servicios_title }</h1>
        <ul>
          <li id='dis_web'>
            <span>{ serv_dis_des }:</span>
              <a href="https://thedarksideseeds.com" target="_blank" className="col_1 fon_2">TheDarkSideSeeds</a>
              <a href="http://minfraestructura.com.ar" target="_blank" className="col_1_2 fon_3">MInfraestructura</a>
              <a href="http://vialfe.com.ar" target="_blank" className="col_2 fon_3">Vialfe</a>
              <a href="http://bounousmaquinarias.com" target="_blank" className="col_3 fon_2">Bounous</a>
              <a href="http://madebel.es" target="_blank" className="col_4 fon_1" >Madebel (2008)</a>
              <a href="http://rinconrh.com.ar" target="_blank" className="col_5 fon_1">Rincon R.H.</a>
          </li>
          <li id='dis_3d'>
            <span>{ serv_3d }:</span>
              <a href="https://www.youtube.com/watch?v=Ni398cztwpY" target="_blank" className="col_1 fon_1">Carla XX</a>
              <a href="{ img_trab_url }ss/4-auto-v5.jpg" data-fancybox data-type="image" className="link-auto-v5 col_2 fon_3">Auto 5.0</a>
              <a href="{ img_trab_url }ss/10-bodyski.jpg" data-fancybox data-type="image" className="link-bodyski col_3 fon_1">BodySki</a>
          </li>
          <li id='dis_impr'>
           <span dangerouslySetInnerHTML={{__html: serv_impr }} />
              <a href="{ img_trab_url }ss/12-carteles.jpg" data-fancybox data-type="image" className="link-carteles col_2 fon_2">C.A. Colón</a>
              <a href="{ img_trab_url }ss/9-cyd-schaffer.jpg" data-fancybox data-type="image" className="link-cyd-schaffer col_3 fon_1">C&D Schaffer</a>
{ 
    // <a className="col_1 fon_2">La Higuera de Bartolo</a>
}
              <a href="{ img_trab_url }ss/3-pronto-express.jpg" data-fancybox data-type="image" className="link-pronto-express col_1_2 fon_3">Pronto Express</a>
              <a href="{ img_trab_url }ss/5-canapina.jpg" data-fancybox data-type="image" className="link-canapina col_3 fon_2">Canapina</a>
              <a href="{ img_trab_url }ss/8-folletos.jpg" data-fancybox data-type="image" className="link-folletos col_5 fon_1">{ serv_folletos }</a>
          </li>
          <li id='dis_vid'>
            <span>{ serv_vid }:</span>
              <a href="{ video_trab_url }canapina-face-1.php" data-fancybox data-type="ajax" className="col_3 fon_2">Canapina</a>
              <a href="{ video_trab_url }pronto-express-spot.php" data-fancybox data-type="ajax" className="col_1 fon_3">Pronto Express</a>
{
    // <a href="https://www.youtube.com/watch?v=zj8gwFbZp1g" target="_blank" className="col_5 fon_2">Chambones Producyon's</a> 
}
          </li>
          <li id='dis_red'>
            <span>{ serv_redes }:</span>
{
    // <a href="https://www.facebook.com/Renzullimotos/" target="_blank" className="col_4 fon_1">Renzulli Motos</a>
}
              <a href="https://www.facebook.com/canapina.sta.fe/" target="_blank" className="col_2 fon_2">Canapina</a>
              <a href="https://www.facebook.com/Pronto-Express-451144031638476/" target="_blank" className="col_3 fon_3">Pronto Express</a>
          </li>
          <li>
            <span>{ ademas }:</span>
              <a className="col_1 fon_1">{ serv_regist }.</a>
              <a className="col_2 fon_1">{ serv_gestion }</a>
          </li>
        </ul>
      </div>
    </section>
</aside>
        );
    }
}

// window.onbeforeunload = function () {
//     window.scrollTo(0, 0);
// }

export default Servicios;