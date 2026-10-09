export class Player {
    constructor(name,level) {
      this.name = name; 
      this.level = level;
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
}