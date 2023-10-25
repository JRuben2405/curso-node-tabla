const { crearArchivo } = require('./helpers/multiplicar.js');
const colors = require('colors/safe');
const argv = require('./config/yargs.js');

console.clear();

crearArchivo(argv.b,argv.l,argv.h)
    .then(nombreArchivo => console.log(colors.rainbow(nombreArchivo), 'creado'))
    .catch(err => { console.log(err) })





