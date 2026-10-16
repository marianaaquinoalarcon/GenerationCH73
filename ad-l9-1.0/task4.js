// seleccionar id contenedor
const contenedor = document.querySelector("#container");

// seleccionar todo de la clase segundo
const claseSeg = document.querySelectorAll(".second");

// seleccionar todo de la clase tercero que esta dentro de etiqueta ol
const claseTer = document.querySelector("ol .third");

// crear un nuevo comentario (p) dentro de id contenedor 
const nuevoTexto = document.createElement("p");
nuevoTexto.textContent = "¡Hola!";
contenedor.appendChild(nuevoTexto);

// Añade la clase principal al div con una clase de pie de página
const piePag = document.querySelector(".footer");
piePag.classList.add("principal");

// Eliminar la clase principal en el div con una clase de pie de página.
piePag.classList.remove("principal");

// Crea un nuevo elemento li
// Dale al li el texto "cuatro"
// Añade el li al elemento ul
const lista = document.querySelector("ul");
const nuevoli = document.createElement("li");
nuevoli.textContent = "Cuatro";
lista.appendChild(nuevoli); 
