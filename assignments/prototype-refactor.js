/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

// === GameObject ===
class GameObject {
    constructor(gameObjectAttributes) {
        this.createdAt = gameObjectAttributes.createdAt;
        this.name = gameObjectAttributes.name;
        this.dimensions = gameObjectAttributes.dimensions;
    }
    destroy() {
        return `${this.name} was removed from the game.`
    }
}
// === CharacterStats ===
class CharacterStats extends GameObject {
    constructor(characterStatsAttributes) {
        super(characterStatsAttributes);
        this.healthPoints = characterStatsAttributes.healthPoints;
    }
    takeDamage() {
        return `${this.name} took damage.`;
    }
}
// === Humanoid ===
class Humanoid extends CharacterStats {
    constructor(humanoidAttributes) {
        super(humanoidAttributes);
        this.team = humanoidAttributes.team;
        this.weapons = humanoidAttributes.weapons;
        this.language = humanoidAttributes.language;
    }
    greet() {
        return `${this.name} offers a greeting in ${this.language}.`;
    }
}
