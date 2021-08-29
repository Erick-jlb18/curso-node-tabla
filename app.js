
//const { boolean, option } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors');


console.clear();



crearArchivo(argv.b,argv.l,argv.h)
.then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
.catch( err => console.log(err));


// const [,,arg3 = 'base=5'] = process.argv;
// const [, base] = arg3.split('=');

//console.log(base);


//const base = 5;






