const listaDeTareas = document.querySelector("#tareas")

const btnAgregar = document.querySelector("#agregarTarea")
const cuentaTareas = document.querySelector("#totalTareas")

let realizadas = document.querySelector("#realizadasTareas");

const tareas = []

/* Actualizamos la información en el HTML */
function renderTareas() {
    let html = ""
    for (tarea of tareas) {
    html += `<tr>
    <td>${tarea.id}</td>
    <td>${tarea.nombre}</td>
    <td> <button onclick="borrar(${tarea.id})"> x </button> </td>
    <td> <input type="checkbox" onclick="cambiarEstado(${tarea.id})" /></td>
    </tr>`;
    }
    
    
// filtro y conteo tareas realizadas, checkedas con estado en true //
const tareasRealizadas = tareas.filter((chk) => chk.estado === true);
const contador = tareasRealizadas.length;
realizadas.innerHTML = contador;
listaDeTareas.innerHTML = html;

    }



btnAgregar.addEventListener("click", () => {
    const tareaInput = document.querySelector("#nuevaTarea").value
    if (tareaInput != "") {
    //se añade a una nueva variable el valor del input del boton que definimos arriba
const nombreTarea = tareaInput.value
tareaInput.value = ""

//Creacion de objeto nuevaTarea
const nuevaTarea = ({id: Date.now(), nombre: tareaInput, estado:false });
// se agrega el nuevo valor por push al array
tareas.push(nuevaTarea);

//Contamos el largo del array para la lista total de tareas
cuentaTareas.innerHTML = tareas.length;

renderTareas()
    } else {
    alert('ingrese una tarea')
}

})

// función cambio de estado y conteo check //
function cambiarEstado(id) {
    tareas.map((ele) => {
      if (ele.id == id) ele.estado = !ele.estado;
    });
    renderTareas(tareas);
  }



//funcion para borrar tareas
function borrar(id){
    const index = tareas.findIndex((ele) => ele.id == id) /* 2.1 */
    tareas.splice(index, 1) /* 2.2 */
    /* Actualizamos la información en el HTML 3.3 */
renderTareas()
}


