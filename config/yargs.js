const descripcion = {
  demand: true,
  describe: 'descripcion breve de tarea',
  alias: 'd'
}
const completado = {
  describe: 'estado de tarea boolean',
  alias: 'c',
  default: true,
  type: 'boolean'
}

const argv = require('yargs')
  .command('crear', 'Crea una nueva tarea To Do', {
    descripcion
  })
  .command('actualizar', 'Actualiza el estado de una tarea a completado', {
    descripcion,
    completado
  })
  .command('borrar', 'Borra una tarea del listado', {
    descripcion
  })
  .command('listar', 'Muestra el listado de tareas')
  .help()
  .argv;

  module.exports = {
    argv
  }