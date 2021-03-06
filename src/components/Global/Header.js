
// Dependences
import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Header extends Component {
  static propTypes = {
    items: propTypes.array.isRequired
  }

  constructor(props) { 
    super(props); 

    global.header = React.createRef();
    global.punto = React.createRef();
    global.home_pres = React.createRef();
    global.h1_ref = React.createRef();

    
    
    global.scrollInicio = '900';

    this.state = {
      puntoClick : false
    }

    // this.puntoInicio = this.puntoInicio.bind(this);
    this.empiezaScroll = this.empiezaScroll.bind(this);
    // this.puntoClick = this.puntoClick.bind(this);
    


  }
  
  componentWillMount(){


    global.inicioOff = (data) => {
      this.setState({
        inicioClick:false
      });
    };
    global.inicioOn = (data) => {
      this.setState({
        inicioClick:true
      });     
    };
   }

  empiezaScroll(e) {
    e.preventDefault();
    if(e.target.id === 'btn-clientes') {
      window.scrollTo(0,scrollInicio);
    }

  }

  puntoInicio(e) {
    e.preventDefault();
      this.setState({
        puntoClick : true,  // para invertir siempre: !this.state.estadoAInvertir
        inicioClick : true
      });
      !window.scrollTo(0, 0);
      document.body.classList.toggle('over_show');
      document.getElementById('btn-servicios').classList.remove('hide');
      document.getElementById('btn-servicios').classList.add('rotate');
      document.getElementById('btn-clientes').classList.remove('hide');
      document.getElementById('btn-clientes').classList.add('scroll');
      document.getElementById('btn-trabajos').classList.add('quieto');
  };


  render() {
    const {puntoClick, inicioClick} = this.state;
    //const {} = this.state;
    const { items} = this.props;
    var { title_1 = "<strong>Guillermo Luy</strong>. " + cliente_desc } = this.props;
    var { title_2 = '<span class="h1_1">Guill<span>ermo</span></span><span class="h1_2">Luy</span><span class="h1_3">diseño &amp;</span><span class="h1_4">programación</span>' } = this.props;

    return (
      <header id="header" ref={header}>
        <p id='punto' ref={punto} className={`${puntoClick ? 'neg' : 'nar'} ` } onClick={(e) => this.puntoInicio(e)}><span>{  empezar  }</span></p>
        <div id="home-pres" ref={home_pres} className={`${puntoClick ? 'show' : 'hide'}`}><div id="pres-orange"></div><div id="pres-black"></div>
          <h1 ref={h1_ref} id={`${inicioClick ? 'h1-title' : 'h1-inicial'}`} dangerouslySetInnerHTML= {{__html : `${inicioClick ? title_2 : title_1 }`} }/>
        </div>
        <em className={`${puntoClick ? 'hide' : ''}`} > 
          <span className="che" id="pst">pst..</span>
          <span className="che" id="aca">&lt; acá</span>
          <span className="che" id="apalalala">!</span>
        </em>
        <nav id='menu' className="Header">
          <ul className="menu_principal">
            {items && items.map ((item,key) => 
            <li id={"btn-"+item.clase} className={item.clase} key={key} onClick={(e) => this.empiezaScroll(e)}>
              <Link to={'/'+item.url}>{item.title}</Link>
            </li>)} 
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
