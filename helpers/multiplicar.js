const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base = 5, listar = false,limite = 10) => {

  try{
    

        let salida = '';
        let consola = '';

    for(let num = 1; num <= limite; num++){
        
        salida+= `${ base } x ${num} = ${base*num}\n`;
        consola+= `${ base } ${ 'x'.green } ${num} ${'='.yellow} ${base*num}\n`;
    }


    if(listar === true){

    
    console.log('=============='.green);
    console.log('Tabla del:'.yellow,colors.green(base) );
    console.log('=============='.green);

    console.log(consola);
    }
    fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);

    return`tabla-${base}.txt`;
  }catch(err){
    throw err;
  }
    


}

module.exports = {
    crearArchivo 
}


// fs.writeFileSync( `tabla-${base}.txt`, salida, (err) =>{
//     if( err ) throw err;
//     console.log(`tabla-${base}.txt creado`);
// } )