// Task 2: listUsers()
export async function listUsers() {
   let dato = await fetch("http://localhost:3000/users", {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    },
})
   .then(response => response.json())
   .then(datos => console.log(datos));
   
}
