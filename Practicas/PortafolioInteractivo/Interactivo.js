const titulo = document.getElementById("titulo");
titulo.textContent = "Titulo Proyectos";

const proyecto = document.querySelector("#proyecto");
document.querySelector("#agregar").addEventListener("click",()=>{
    const card = document.createElement("article");
    card.textContent = "proyecto de portafolio";
    proyecto.append(card);
});