/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
function GameObject(someObj) {
  // creation of gameobject with key and values coming from object parameter
  this.createdAt = someObj.createdAt;
  this.name = someObj.name;
  this.dimensions = someObj.dimensions;
}

GameObject.prototype.destroy = function() {
  // protype destroy function
  return `${this.name} was removed from the game.`;
};
//=======================================================================================================
// const myObj = new GameObject({
//   createdAt: new Date(),
//   name: 'Freddie',
//   dimensions: {
//     length: 2,
//     width: 1,
//     height: 1
//   }
// });

// console.log(myObj);
// console.log(myObj.destroy());
//========================================================================================================

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function CharacterStats(someCharac) {
  // characterstats object creation
  GameObject.call(this, someCharac); // inherits game objects keys
  this.healthPoints = someCharac.healthPoints; // unique key to character stats
}
CharacterStats.prototype = Object.create(GameObject.prototype); // inherits protoypes from gameobject
CharacterStats.prototype.takeDamage = function() {
  //prototype function to takedamage for characterstats
  return `${this.name} took damage`;
};

//==============================================================================================
// const Freddie = new CharacterStats({
//   createdAt: new Date(),
//   dimensions: {
//     length: 2,
//     width: 1,
//     height: 1
//   },
//   healthPoints: 5,
//   name: 'Freddie'
// });

// console.log(Freddie.destroy());
// console.log(Freddie.takeDamage());
// console.log(Freddie);

//==============================================================================================

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

function Humanoid(someHuman) {
  // creation of humanoid object
  CharacterStats.call(this, someHuman); // inherits all keys from characterstats
  this.team = someHuman.team; // unique keys and values
  this.weapons = someHuman.weapons;
  this.language = someHuman.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype); // inheriting prototype functions from character stats
Humanoid.prototype.greet = function() {
  // unique prototype function
  return `${this.name} offers a greerting in ${this.language}`;
};

/*
 * Inheritance chain: GameObject -> CharacterStats -> Humanoid
 * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
 * Instances of CharacterStats should have all of the same properties as GameObject.
 */

// Stretch task:
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!

function Hero(someHero) {
  Humanoid.call(this, someHero);
  this.occupation = someHero.occupation;
}
Hero.prototype = Object.create(Humanoid.prototype);
Hero.prototype.attackVillain = function(villain) {
  villain.healthPoints = villain.healthPoints - 5;
  return `${this.name} attacked ${villain.name} and dealt 5 damage`;
};

function Villain(someVillain) {
  Humanoid.call(this, someVillain);
  this.occupation = someVillain.occupation;
}

Villain.prototype = Object.create(Humanoid.prototype);
Villain.prototype.attackHero = function(hero) {
  hero.healthPoints = hero.healthPoints - 3;
  return `${this.name} attacked ${hero.name} and dealt 3 damage`;
};

// Test you work by un-commenting these 3 objects and the list of console logs below:

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  healthPoints: 5,
  name: 'Bruce',
  team: 'Mage Guild',
  weapons: ['Staff of Shamalama'],
  language: 'Common Tongue'
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  healthPoints: 15,
  name: 'Sir Mustachio',
  team: 'The Round Table',
  weapons: ['Giant Sword', 'Shield'],
  language: 'Common Tongue'
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 10,
  name: 'Lilith',
  team: 'Forest Kingdom',
  weapons: ['Bow', 'Dagger'],
  language: 'Elvish'
});

const heroArcher = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 10,
  name: 'Freddie',
  team: 'Forest Kingdom',
  weapons: ['Bow', 'Bazooka'],
  language: 'Elvish',
  occupation: 'Hero'
});

const evilArcher = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 10,
  name: 'Brittany',
  team: 'Forest Kingdom',
  weapons: ['Bow', 'car'],
  language: 'Elvish',
  occupation: 'Villain'
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

console.log('==================================');
console.log('Entering Battle');
console.log(`${heroArcher.name} and ${evilArcher.name} have entered battle...`);

console.log(`${heroArcher.name} has ${heroArcher.healthPoints} health`);
console.log(`${evilArcher.name} has ${evilArcher.healthPoints} health`);

while (evilArcher.healthPoints > 0 && heroArcher.healthPoints > 0) {
  console.log(heroArcher.attackVillain(evilArcher));
  console.log(evilArcher.attackHero(heroArcher));
  console.log(`${heroArcher.name} has ${heroArcher.healthPoints} health`);
  console.log(`${evilArcher.name} has ${evilArcher.healthPoints} health`);
  if (evilArcher.healthPoints == 0) {
    console.log(`Battle Over: ${heroArcher.name} defeated ${evilArcher.name}`);
    console.log(evilArcher.destroy());
  }
  if (heroArcher.healthPoints == 0) {
    console.log(`Battle Over: ${evilArcher.name} defeated ${heroArcher.name}`);
    console.log(heroArcher.destroy());
  }
}
