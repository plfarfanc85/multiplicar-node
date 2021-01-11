// Requireds
// Hay 3 tipos, libreias propias de Node, Librerias externas que instalamos, y archivos del proyecto
//const fs = require("express");
//const fs = require("./fs");
const argv = require("./config/yargs").argv;
var colors = require("colors/safe");

const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar");

// Module
// Es un objeto global que esta disponible a lo largo de toda la aplicación

let comando = argv._[0];

switch (comando) {
  case "listar":
    listarTabla(argv.base, argv.limite);
    break;

  case "crear":
    crearArchivo(argv.base, argv.limite)
      .then((archivo) => console.log(`Archivo creado:`, colors.green(archivo)))
      .catch((e) => console.log(e));
    break;

  default:
    console.log("Comando no reconocido");
}

//let base = "abc";
//console.log(process.argv);
let argv2 = process.argv;
//let parametro = argv[2];
//let base = parametro.split("=")[1];

console.log(argv);
//console.log("Limite ", argv.limite);
//console.log(argv2);
