// Task 3: addUser(first_name, last_name, email)

export async function addUser(nombre,apellido,correo) {
    var nuevoID;
    //obtener ID a partir de un end point json
    const consulta = await fetch("http://localhost:3000/users");
    const ultimoDato = await consulta.json();
    
    if(!ultimoDato || ultimoDato.length === 0){
        nuevoID = 1;
    }
    const ids = ultimoDato.map(item => Number(item.id));
    const maxId = Math.max(...ids);
    nuevoID = maxId + 1;

    //ordenar inormacion para hacer el regisstro nuevo
    const nuevoDato = {
    id: nuevoID,
    first_name:nombre,
    last_name:apellido,
    email:correo
   }

   //funcion que envia los datos a la base de datos
    let datos =  fetch("http://localhost:3000/users", {
        method: "POST",
        body: JSON.stringify(nuevoDato),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    });

}