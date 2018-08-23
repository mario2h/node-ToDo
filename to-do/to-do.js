const fs = require('fs');

let listToDo = [];

const guardarDB = () => {
  let data = JSON.stringify(listToDo);
  fs.writeFile('db/data.json', data, (err) => {
    if (err) throw new Error('No se pudo grabar data', err);
  });
}

const cargarDB = () => {
  try {

    listToDo = require('../db/data.json');
    
  } catch (error) {

    listToDo = [];

  }
}

const crear = (descripcion) => {
  
  cargarDB();

  let toDo = {
    descripcion,
    completada: false
  };

  listToDo.push(toDo);
  
  guardarDB();

  return toDo;
}

const getListado = () => {

  cargarDB();
  
  return listToDo;
}

const actualizar = (descripcion, completada = true) => {

  cargarDB();
  let index = listToDo.findIndex( tarea => tarea.descripcion === descripcion);

  if (index >=0) {
    listToDo[index].completada = completada;
    guardarDB();
    return true;
  } else {
    return false;
  }
}

const borrar = (descripcion) => {
  
  cargarDB();
  let index = listToDo.findIndex( tarea => tarea.descripcion === descripcion);
  
  if (index >=0) {
    listToDo.splice(index, 1);
    guardarDB();
    return true;
  } else {
    return false;
  }
}

module.exports = {
  crear,
  getListado,
  actualizar,
  borrar
}