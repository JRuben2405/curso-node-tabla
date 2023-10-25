const fs = require('fs');
const colors = require('colors/safe');
const crearArchivo = (base,listar,limite) => {
    return new Promise((resolve,reject)=>{
        
        let salida = '';
        let consola = '';

        const multiplicacion = (a, b) => a * b;

        for (let i = 1; i <= limite; i++) {
            consola += `${base} ${colors.green('x')} ${i} ${colors.green('=')} ${multiplicacion(base, i)}\n`;
            salida += `${base} x ${i} = ${multiplicacion(base, i)}\n`;
        }

        if(listar){
            console.log(colors.green('============================'));
            console.log(colors.green(`Tabla de multiplicar del `), colors.blue(base));
            console.log(colors.green('============================'));
            console.log(consola);
        }

        try{
            fs.writeFileSync(`./salida/tabla-${base}-hasta-${limite}.txt`, salida);
        }catch(error){
           throw reject(error);
        }
        
        resolve(`tabla-${base}-hasta-${limite}.txt`);
    })
      

}

module.exports = {
    crearArchivo,
}