// Definir variables base
const btnAgregar = document.querySelector('#btnAgregar')
const listadoTareas = document.querySelector("#tbody");
let total = document.querySelector("#totalTareas");
let realizadas = document.querySelector("#realizadasTareas");
let arrayTareas = [];
let id = 0

// boton principal, 'agregar' tareas
btnAgregar.addEventListener("click", () => {
    const tarea = document.querySelector("#input-tarea").value;

    //revisar que no esté vacio
    if (tarea != "") {

        //contador para id, agregar 1
        id++

        //Creacion de objeto tarea
    const tareaObjeto = { id: id, nombreTarea: tarea, estado: false };

    //Agregar objeto dentro del Array con push
    arrayTareas.push(tareaObjeto);
//creacion de funcion para mostar en html
mostrarLista(arrayTareas);
//resetear el input para poder agrear una tarea diferente

//Lo que pasa si el input esta en blanco
document.querySelector("#input-tarea").value = "";
} else {
    alert("Debes ingresar una tarea");
  }
});

// Mostrar lista tareas en html
function mostrarLista(array) {
    // mostrar total de elementos en el Array
    total.innerHTML = array.length;
    // Vaciar Realizadas
    realizadas.innerHTML = "";
    // Vaciar Lista de tareas
    let html = "";
    for (let elemento of array) {
        html += `
            <tr>
                <td>${elemento.id}</td>
                <td>${elemento.nombreTarea}</td>
                <td>
                   <input type="checkbox" onclick="cambiarEstado(${elemento.id})" "" />
                </td>
                <td>
                    <button id="eliminartarea" type="button" class="btn-eliminar" onclick="eliminarTarea(${elemento.id})">Eliminar</button>
                </td>
            </tr>`;
      }
    
    // filtro y conteo tareas realizadas, checkedas con estado en true //
  const tareasRealizadas = array.filter((chk) => chk.estado === true);
  const contador = tareasRealizadas.length;
  realizadas.innerHTML = contador;
  listadoTareas.innerHTML = html;
}

// función cambio de estado y conteo check //
function cambiarEstado(id) {
  arrayTareas.map((ele) => {
    if (ele.id == id) ele.estado = !ele.estado;
  });
  mostrarLista(arrayTareas);
}

// función eliminar tarea completada //
function eliminarTarea(id) {
  arrayTareas = arrayTareas.filter((ele) => ele.id != id);
  mostrarLista(arrayTareas);
}
