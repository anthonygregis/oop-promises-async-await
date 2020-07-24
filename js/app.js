// Object Oriented Programming

// Prototypical Inheritance

// const dog = {
//     name: "Covid",
//     goodBoy: true,
//     gender: "girl"
// }
//
// const dogTwo = {
//     name: "Rocco",
//     color: 'Brown'
// }
//
// dogTwo.__proto__ = dog
//
// console.log(dog)
// console.log(dogTwo)
//
// console.log(dogTwo.goodBoy)
// console.log(dogTwo.name)
// console.log(dogTwo.__proto__.name)
//
// const playerStarterStats = {
//     health: 100,
//     level: 1,
//     experience: 0,
//     stamina: 100
// }
//
// const player1 = {
//     name: "Link",
//     weapon: "Sword",
//     __proto__: playerStarterStats
// }
//
// console.log(playerStarterStats)
// console.log(player1)
//
// // Constructor functions
//
// function User(name) {
//     this.name = name
//
//     // return this
// }
//
// let adam = new User('Adam')
// let pete = new User('Pete')
//
// console.log(adam)
// console.log(pete)
//
// function NBAPlayer(name, team, threePointShooter) {
//     this.name = name
//     this.team = team
//     this.threePointShooter = threePointShooter
// }
//
// let steph = new NBAPlayer("Steph Curry", "Warriors", true)
//
// console.log(steph)
//
// function PlayerCharacter(name, strength, levelUnlock, weapon, health) {
//     this.name = name
//     this.strength = strength
//     this.levelUnlock = levelUnlock
//     this.weapon = weapon
//     this.health = health
//     this.intro = function() {
//         console.log(`${name} is a character unlocked at level ${levelUnlock}, who has a strength level of ${strength} and uses a ${weapon} as their weapon.`)
//     }
// }
//
// let masterChief = new PlayerCharacter("Master Chief", "1000", "5", "Battle Rifle", "1000")
// let link = new PlayerCharacter("Link", "100", "1", "Sword", "100")
// let mario = new PlayerCharacter("Mario", "100", "1", "Hat", "100")
//
// console.log(masterChief)
// console.log(link)
// console.log(mario)
// console.log(mario.intro())
//
// class Car {
//     constructor(make, model, color, year) {
//         this.make = make
//         this.model = model
//         this.color = color
//         this.year = year
//         this.description = `This is a ${this.make} ${this.model} with a pearlescent ${this.color} made in ${this.year}`
//     }
//
//     drive() {
//         console.log("Vroom vroom")
//     }
// }
//
// let tesla = new Car('Tesla', 'Model 3', 'Red', '2019')
//
// console.log(tesla)
//
// class GithubProfile {
//     constructor(name, username, url, repoCount, followerCount, followingCount) {
//         this.name = name
//         this.username = username
//         this.url = url
//         this.repoCount = repoCount
//         this.followerCount = followerCount
//         this.followingCount = followingCount
//     }
//
//     intro() {
//         console.log(`My name is ${this.name} and I have ${this.repoCount} public repos with ${this.followerCount} followers and my username is ${this.username}`)
//     }
// }
//
// const gitApiUrl = 'https://api.github.com/users/anthonygregis'
//
// fetch(gitApiUrl)
//     .then(response => {
//         if (response.ok) {
//             return response.json()
//         }
//     })
//     .then(data => {
//         let githubUrl = data.url
//         let githubUsername = data.login
//         let githubName = data.name
//         let githubRepoCount = data.public_repos
//         let githubFollowerCount = data.followers
//         let githubFollowingCount = data.following
//
//         let anthony = new GithubProfile(githubName, githubUsername, githubUrl, githubRepoCount, githubFollowerCount, githubFollowingCount)
//
//     })
//
// let isMomHappy = false
//
// let willIGetNewPhone = new Promise((resolve, reject) => {
//   if (isMomHappy) {
//       const phone = {
//           brand: "iPhone",
//           color: "Red"
//       }
//       resolve(phone)
//   } else {
//       reject('No Phone')
//   }
// })
//
// willIGetNewPhone.then(result => {
//     console.log(result)
// })

async function printUsers() {
    const endpointAnthony = 'https://api.github.com/users/anthonygregis'
    const endpointLizz = 'https://api.github.com/users/lizzwest'
    const endpointRome = 'https://api.github.com/users/romebell'

    let anthony = await fetch(endpointAnthony).then(res => res.json())
    let lizz = await fetch(endpointLizz).then(res => res.json())
    let rome = await fetch(endpointRome).then(res => res.json())

    console.log(anthony)
    console.log(lizz)
    console.log(rome)
}

printUsers()

async function printFacebook() {
    const facebookEndpoint = 'https://api.github.com/users/facebook'

    let facebook = await fetch(facebookEndpoint).then(res => res.json())

    console.log(facebook.login)
}

printFacebook()