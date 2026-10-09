import {Maquillaje, Producto} from "./productos.js";



let p1 = new Producto("Rimel",150,true);
console.log(p1.mostrarinfo());
p1.cambiarDisponibilidad();
console.log(p1.mostrarinfo());

let p2 = new Producto("Labial",200,false);
let p3 = new Producto("Polvo",100,true);
let p4 = new Producto("Esmalte",120,true);
console.log(p1.mostrarinfo());
console.log(p2.mostrarinfo());
console.log(p3.mostrarinfo());
console.log(p4.mostrarinfo());

let t1 = new Maquillaje("Delineador","Azul");
console.log(t1.mostrarinformacion());