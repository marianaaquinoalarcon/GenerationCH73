
    //modifica el contenido del primer h1 que encuentre en html
document.addEventListener('DOMContentLoaded',()=>{
    const titulo1 = document.querySelector('h1');
    if (titulo1) {
        titulo1.textContent = "!Adios mundo¡";
    }
});
    //modifica el color del segundo titulo de html
document.addEventListener('DOMContentLoaded',()=>{
    const titulo2 = document.querySelectorAll('h1');
    if (titulo2.length >=2) {
        titulo2[1].style.color = "orange";
    }
});

const encabezado = document.querySelector("h1");
encabezado.addEventListener("click", function() {
  this.style.color = "brown";
});