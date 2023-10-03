// Definir una variable para almacenar la lista de mascotas disponibles
let listaMascotas = [];

// Clase para representar una mascota
class Mascota {
  constructor(nombre, tipo, fechaNacimiento) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.fechaNacimiento = fechaNacimiento;
  }

  calcularEdad() {
    const hoy = new Date();
    const nacimiento = new Date(this.fechaNacimiento);
    const edad = Math.floor((hoy - nacimiento) / (1000 * 60 * 60 * 24 * 365));
    return edad;
  }
}

// Función para agregar una mascota a la lista
function agregarMascota(nombre, tipo, fechaNacimiento) {
  const mascota = new Mascota(nombre, tipo, fechaNacimiento);
  listaMascotas.push(mascota);
  console.log(`${nombre} ha sido agregado a la lista de mascotas.`);
}

// Función para eliminar una mascota de la lista
function eliminarMascota(nombre) {
  for (let i = 0; i < listaMascotas.length; i++) {
    if (listaMascotas[i].nombre === nombre) {
      let mascotaEliminada = listaMascotas.splice(i, 1);
      console.log(`${mascotaEliminada[0].nombre} ha sido eliminado de la lista de mascotas.`);
    
    }
  }
  console.log(`${nombre} no se encontró en la lista de mascotas.`);
}

// Función para mostrar la lista de mascotas
function mostrarListaMascotas() {
  if (listaMascotas.length === 0) {
    console.log('La lista de mascotas está vacía.');
  } else {
    console.log('Lista de mascotas disponibles:');
    for (let i = 0; i < listaMascotas.length; i++) {
      const mascota = listaMascotas[i];
      console.log(`${mascota.nombre} - ${mascota.tipo} - Edad: ${mascota.calcularEdad()} años`);
    }
  }
}

// Menú principal
while (true) {
  console.log('Bienvenido a la tienda de mascotas');
  console.log('1. Agregar mascota');
  console.log('2. Eliminar mascota');
  console.log('3. Mostrar lista de mascotas');
  console.log('4. Salir');

  const opcion = prompt('Por favor, ingrese el número de la opción que desea:');

  switch (opcion) {
    case '1':
      const nombre = prompt('Ingrese el nombre de la mascota:');
      const tipo = prompt('Ingrese el tipo de la mascota:');
      const fechaNacimiento = prompt('Ingrese la fecha de nacimiento (AAAA-MM-DD):');
      agregarMascota(nombre, tipo, fechaNacimiento);
      break;

    case '2':
      const nombreEliminar = prompt('Ingrese el nombre de la mascota a eliminar:');
      eliminarMascota(nombreEliminar);
      break;

    case '3':
      mostrarListaMascotas();
      break;

    case '4':
      console.log('Gracias por visitar la tienda de mascotas. ¡Hasta luego!');
      break;

    default:
      console.log('Opción no válida. Por favor, elija una opción válida.');
  }
}
