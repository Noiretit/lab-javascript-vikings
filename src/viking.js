// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    };
    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else if (this.health === 0) {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry() {
        return `Odin Owns You All!`;
    }
};


// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else if (this.health === 0) {
            return `A Saxon has died in combat`
        }
    }
};

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(Viking) {
        this.vikingArmy.push(Viking);
    }
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);
    }
    vikingAttack() {
        let result = "";
        this.vikingArmy.forEach(viking => this.saxonArmy.forEach((saxon, index) => {
            saxon.receiveDamage(viking.strength);
            if (saxon.health <= 0) {
                this.saxonArmy.splice(index, 1);
                result = "A Saxon has died in combat"
            }
        }))
        return result;
    }

    saxonAttack() {
        let result = "";
        this.saxonArmy.forEach(saxon => this.vikingArmy.forEach((viking, index) => {
            viking.receiveDamage(saxon.strength);
            if (viking.health <= 0) {
                this.vikingArmy.splice(index, 1);
                result = `${this.vikingArmy.name} has died in act of combat`
            }
        }))
        return result;
    }
    showStatus() {

    }
}