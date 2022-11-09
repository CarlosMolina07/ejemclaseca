var array;

function cargarpagina() {
  array = [
    {
      nombre: "carlos",
      codigo: "191926",
      doc: "1003237339",
      prog: "ing. de sistemas",
    },
    {
      nombre: "Alberto",
      codigo: "191926",
      doc: "1003237339",
      prog: "ing. de sistemas",
    },
    {
      nombre: "Molina",
      codigo: "191926",
      doc: "1003237339",
      prog: "ing. de sistemas",
    },
  ];
  console.log(array);
}

function calcular() {
  var nombre = $("#nombre").val();
  for (let i = 0; i < array.length; i++) {
    if (nombre == array[i].nombre) {
      console.log("El nombre encontrado es: " + nombre);
      break;
    } else {
      console.log("el nombre" + nombre + " no fue encontrado");
    }
  }
}
