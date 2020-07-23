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
