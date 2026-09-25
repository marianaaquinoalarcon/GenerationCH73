import PromptSync from "prompt-sync";
const prompt = PromptSync();
export class Player {
    constructor(name,level) {
      this.name = name; 
      this.level = level;
      this.array = [];
      this.invObj = [];
    }
    info(){
      return this.name +" has reached Level " + this.level + "!";
    }
    levelUp(){
      this.level += 1;
    }
    
    exp(){
      let expP = 0;
      for (let i = 0; i < 10; i++) { //simulador de puntos de experiencia por partida
        let points = Math.floor(Math.random()*2); 
        expP += points;
      }
      if (expP >= 5) {
        this.levelUp();
      }
      console.log(expP); //puntos acumuldos durante el juego
    }
    arr(){
      this.array.push([this.name,this.level]);
    }

    agregarInventario (){
      
      let obj = prompt("Que elemento quieres agregar al inventario?");
      this.invObj.push(obj);
    }
    eliminarinventario (){
      
      let obj = prompt("Que elemento quieres quitar del inventario?");
      let posicion = this.invObj.indexOf(obj);
      if (posicion === -1) {
        console.log("Este onjeto no se encuentra en el onventario");
      } else {
        this.invObj.splice(posicion,1);
      }
    }
}
