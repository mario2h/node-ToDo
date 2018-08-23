const argv = require('./config/yargs').argv;
const colors = require('colors');

const toDo = require('./to-do/to-do');

let comando = argv._[0];

switch (comando) {
  case 'crear':
    let tarea = toDo.crear(argv.descripcion);
    console.log(tarea);
    break;
  case 'listar':
    let listado = toDo.getListado();

    console.log('======= Lista Tareas ========='.green.bold);
    console.log();
    for (let tarea of listado) {
      console.log('======= Tarea ========='.green);
      console.log(tarea.descripcion.yellow);
      console.log(`Estado: ${tarea.completada ? colors.green.bold('Terminada!') : colors.white('Por Hacer')}`.yellow);
      console.log('======================='.green);
      console.log();
    }
    break;
  case 'actualizar':
    let actualizado = toDo.actualizar(argv.descripcion, argv.completada);
    console.log(actualizado ? colors.green.bold('Tarea actualizada!') : colors.red('Error al actualizar tarea'));
    break;
  case 'borrar':
    let borrado = toDo.borrar(argv.descripcion);
    console.log(borrado ? colors.green.bold('Tarea eliminada!') : colors.red('Error al eliminar tarea'));
    break;
  default:
    console.log('comando no reconocido!');
    break;
}