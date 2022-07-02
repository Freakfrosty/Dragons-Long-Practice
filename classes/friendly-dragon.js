// Your code here
const Dragon = require('./dragon');

class FriendlyDragon extends Dragon{
    constructor(name, color, lifeGoals, friend) {
        super(name, color);
        this.lifeGoals = lifeGoals;
        this.friend = friend;
    }
    hasLifeGoals() {
        for(let i = 0; i < this.lifeGoals.length; i++){
            let goal = this.lifeGoals[i];
            console.log(`${this.name} likes to ${goal}`)
        }
    }
    helpsPeople() {
        return `${this.name} helps their friend ${this.friend}`
    }
}



module.exports = FriendlyDragon;
