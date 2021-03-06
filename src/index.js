// Dependences
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

// Routes
import AppRoutes from './routes';

render(
    <Router>
        <AppRoutes/>
    </Router>,
    document.getElementById('root')
);

registerServiceWorker();