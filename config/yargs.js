// El segundo parametro es una ayuda que le vamos a dar al usuario
// El tercero es un objeto que va a recibir la configuracion de parametros o de flaks que ese parametro puede recibir

const opts = {
  base: {
    demand: true,
    alias: "b",
  },
  limite: {
    alias: "l",
    default: 10,
  },
};

const argv = require("yargs")
  .command("listar", "Impirme en consola la tabla de multiplicar", opts)
  .command("crear", "Genera un archivo con la tabla de multiplicar", opts)
  .help().argv;
//node app.js listar --help
//node app.js --help

module.exports = {
  argv,
};
