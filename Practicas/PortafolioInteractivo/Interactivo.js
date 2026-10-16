const titulo = document.getElementById("titulo");
titulo.textContent = "Titulo Proyectos";

const proyecto = document.querySelector("#proyecto");
document.querySelector("#agregar").addEventListener("click",()=>{
    const card = document.createElement("article");
    card.textContent = "proyecto de portafolio";
    proyecto.append(card);
});

//const bTema = document.querySelector("#tema");

const temaGuardado = localStorage.getItem('tema'); //obtener el tema establecido 

if (temaGuardado === "theme-dark") { //persistencia para no cambiar el ultimo tema elegido al actualizar 
    document.body.classList.add("theme-dark");
    document.body.classList.toggle("theme-dark");
}

document.querySelector("#tema").addEventListener("click",()=>{ //funcion para cambiar el tema despues del click del boton
    document.body.classList.toggle("theme-dark");
    const activo = document.body.classList.contains("theme-dark");
    localStorage.setItem("tema",activo?"theme-dark":"theme-ligth");
});




