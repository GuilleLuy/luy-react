// Dependences
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from './components/App';
import Inicio from './components/Inicio';
import Servicios from './components/Servicios';
import Trabajos from './components/Trabajos';
import Page404 from './components/Page404';


// <Switch> // donde dos rutas coinciden la ejecuta y corta

const AppRoutes = () =>
<App>
    <Switch>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/servicios" component={Servicios} />
        <Route exact path="/Trabajos" component={Trabajos} />
        <Route component={Page404} />
    </Switch>
</App>

export default AppRoutes;