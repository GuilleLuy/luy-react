// Dependencies
import webpack from 'webpack';
import path from 'path';

// Se definen paths:
const PATHS = {
    index: path.join(__dirname, 'src/index'),
    build: path.join(__dirname, '/dist'),
    src: path.join(__dirname, 'src')
}

// Una vez tenemos estas rutas las exportamos como json por defecto:
// devtool permite ver mas facil el codigo compilado, o sea que permite con source-map ver el codigo original sin verlo comprimido
// entry: [ // se llama a webpackhotmiddlee para que este atento a cambios que hagamos en nuestros archivos react.  evita ademas que refresque la web al actualizar.
// output: { // se usa cuando se compila para produccion, entonces el path o salida sería en /dist 
// loaders: [{ // expresion regular: cuando detecta archivos .js el loaders que va a cargar es babel..
//  include: PATHS.src  //  para que lo de la expresion regular lo tome unicamente en cuenta para los archivos que esten en src
// lo de css aca   al loco no le gusta porque genera el css en el head de la pagina y no en un archivo.

export default {
    devtool: 'cheap-module-eval-source-map',
    entry: [
       'webpack-hot-middleware/client?reload="true"', PATHS.index
    ],
    mode:'development',
    output: { 
        path: PATHS.build,
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    module: {
       rules: [
            {
                test: /\.js?$/, 
                include: PATHS.src,
                loaders: ['babel-loader']
            },
            {
                test: /(\.css?)$/,
                loaders: ['style-loader', 'css-loader']  
            },

            // {
            //     test: /\.less$/,
            //     use: [
            //       {
            //         loader: "style-loader"
            //       },
            //       {
            //         loader: "css-loader",
            //         options: {
            //           sourceMap: true,
            //           modules: true,
            //           localIdentName: "[local]___[hash:base64:5]"
            //         }
            //       },
            //       {
            //         loader: "less-loader"
            //       }
            //     ]
            //   },

            {
                test: /\.less$/,
                use: ['style-loader','css-loader',"less-loader"]
            },
            
            // {
            //     test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            //     loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
            // },
            {
                test: /\.(ttf|ico|svg|eot|jpg|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
                loaders: ['url-loader']
                //([?#]+[A-Za-z0-9-_]*)*$/,
            }

            // {
            //     test: /\.(jpg|png|ico|eot|svg|ttf|woff|woff2)$/,
            //     loader: 'file-loader?name=./fonts/[name].[ext]'
            //   }


        ]
    }
};





// export default {
//     entry: [
//         'webpack-hot-middleware/client', path.join(__dirname, 'client/index.js')
//     ],
//     output: {
//         path: '/',
//         publicPath: '/',
//         filename: 'bundle.js'
//     },
//     module: {
//         rules: [{
//             test: /\.js$/,
//             include: [path.join(__dirname, 'client')],
//             loader: 'babel-loader'
//         }]
//     },
//     plugins: [
//         new webpack.NamedModulesPlugin(),
//         new webpack.HotModuleReplacementPlugin(),
//         new webpack.NoEmitOnErrorsPlugin()
//     ]
// }









