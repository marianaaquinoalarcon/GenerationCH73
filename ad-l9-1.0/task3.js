
function Contar() {
    const links = document.querySelectorAll('a');
    
    if (links.length > 0) {
        const primero = links[0].href;
        const ultimo = links[links.length - 1].href;

        alert(`Numero de liks en la pagina: ${ links.length }
            Primer link: ${primero}
            Ultimo link: ${ultimo} `);
    } else {
        alert(`No hay links en la pagina`);
    }
}