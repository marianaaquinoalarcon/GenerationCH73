const itemsContainer = document.querySelector("#list-items")

function addItem(item) {
  const colourCard = document.createElement("section")
  colourCard.className = "card w-75"
  itemsContainer.append(colourCard)

  const colourCardBody = document.createElement("article")
  colourCardBody.className = "card-body"
  colourCard.append(colourCardBody)

  const colourCardTitle = document.createElement("h5")
  colourCardTitle.className = "card-title"
  colourCardTitle.innerText = item.name
  colourCardBody.append(colourCardTitle)

  const colourCardText = document.createElement("p")
  colourCardText.className = "card-text"
  colourCardText.innerText = item.pantone_value
  colourCardBody.append(colourCardText)

  const colourCardColour = document.createElement("figure")
  colourCardColour.style = "background-color: " + item.color + ";"
  colourCardColour.innerText = item.color
  colourCardBody.append(colourCardColour)

  const colourCardBreak = document.createElement("br")
  itemsContainer.append(colourCardBreak)
}

async function fetchColorsList() {
  try {
    // Consultar datos del api
    const reponse = await fetch("https://reqres.in/api/unknown");
    //  si hay algun error en la consulta y/o viene vacio 
    if (!reponse.ok) {
      throw new Error('Error al consultar los datos' + reponse.statusText);
    }

    // hacer mi respuesta en formato json
    const datos = await reponse.json();
    // mostrar datos disponibles en consola 
    console.log(datos.data);


    // captura el error y los muestra en consola 
  } catch (error) {
    console.error('Hubo un error al consultar datos');
  }
}

function loadColorsFromStorage() {

}

fetchColorsList();
loadColorsFromStorage();