// Object Oriented Programming

// Prototypical Inheritance

const dog = {
    name: "Covid",
    goodBoy: true,
    gender: "girl"
}

const dogTwo = {
    name: "Rocco",
    color: 'Brown'
}

dogTwo.__proto__ = dog

console.log(dog)
console.log(dogTwo)

console.log(dogTwo.goodBoy)
console.log(dogTwo.name)
console.log(dogTwo.__proto__.name)

const playerStarterStats = {
    health: 100,
    level: 1,
    experience: 0,
    stamina: 100
}

const player1 = {
    name: "Link",
    weapon: "Sword",
    __proto__: playerStarterStats
}

console.log(playerStarterStats)
console.log(player1)

// Constructor functions

function User(name) {
    this.name = name

    // return this
}

let adam = new User('Adam')
let pete = new User('Pete')

console.log(adam)
console.log(pete)

function NBAPlayer(name, team, threePointShooter) {
    this.name = name
    this.team = team
    this.threePointShooter = threePointShooter
}

let steph = new NBAPlayer("Steph Curry", "Warriors", true)

console.log(steph)

function PlayerCharacter(name, strength, levelUnlock, weapon, health) {
    this.name = name
    this.strength = strength
    this.levelUnlock = levelUnlock
    this.weapon = weapon
    this.health = health
}

let masterChief = new PlayerCharacter("Master Chief", "1000", "5", "Battle Rifle", "1000")
let link = new PlayerCharacter("Link", "100", "1", "Sword", "100")
let mario = new PlayerCharacter("Mario", "100", "1", "Hat", "100")

console.log(masterChief)
console.log(link)
console.log(mario)