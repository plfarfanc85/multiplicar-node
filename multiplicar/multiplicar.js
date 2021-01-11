const { rejects } = require("assert");
const fs = require("fs");
var colors = require("colors");

let listarTabla = (base, limite = 10) => {
  let data = "";

  for (let i = 1; i <= limite; i++) {
    data += `${base} * ${i} = ${base * i}\n`;
  }
  console.log("=================".green);
  console.log(`Tabla de ${base}`.green);
  console.log("=================".green);
  console.log(data);
};

let crearArchivo = (base, limite) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject(`El valor intrducido ${base} no es un número`);
      return;
    }

    let data = "";

    for (let i = 1; i <= limite; i++) {
      data += `${base} * ${i} = ${base * i}\n`;
    }

    fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
      if (err) reject(err);
      else resolve(`tabla-${base}-al-${limite}.txt`);
    });
  });
};

module.exports = {
  crearArchivo,
  listarTabla,
};
