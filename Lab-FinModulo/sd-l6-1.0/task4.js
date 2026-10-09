// Task 4: delUser(number)

export async function delUser(idEliminado) {
 
        let dato = await fetch(`http://localhost:3000/users/${idEliminado}`, {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    body: JSON.stringify({id:idEliminado})
});
    if(!dato.ok){
        console.error(`Error en la peticion ${dato.status} ${dato.statusText}`);
    }
   
}