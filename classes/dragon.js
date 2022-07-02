// Your code here
class Dragon {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  breathesFire(name) {
    return `${this.name} breathes fire everywhere! BURN!!!!`
  }

  static getDragons(...dragon) {
    let dragons = [];
    dragon.forEach((name => dragons.push(name.name)))
    return dragons;
  }
}


const puff = new Dragon("Puff", "green");
console.log(puff);
console.log(puff.breathesFire());

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}
