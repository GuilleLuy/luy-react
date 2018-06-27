// Dependences
// import express from 'express';
const express = require('express');
import webpack from 'webpack';
import path from 'path';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import open from 'open'; // para que cuando no haya errores de compilación automaticamente abra la pagina en el navegador

// Webpack Configuration:
import webpackConfig from '../../webpack.config.dev';

// Server port:
const port = 3000;

// Se crean las aplicaciones:

// Express app
const app = express();

// Webpack compiler
const webpackCompiler = webpack(webpackConfig); 
// const webpackCompiler = webpack(webpackConfig): una vez que tenemos la configuracion de webpack :webpackConfig from .., se la pasamo a nuestro paquete webpack y eso nos va a 
// dar un compilado ya con toda la configuracion cargada  (webpackCompiler)    

// luego hay que meter esto a middleware:
app.use(webpackDevMiddleware(webpackCompiler));
app.use(webpackHotMiddleware(webpackCompiler));

// ahora mandamos todo el trafico de la app hacia react:
app.get('*',(req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html')) // aca se imprime el html de la carpeta public   
});

// escuchamos el puerto.. 
app.listen(port, err => {
    if (!err) {
        //open(´http://localhost:${port}´);
        open('http://localhost:3000');
    }
});
