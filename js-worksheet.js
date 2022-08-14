/*
  By default simple arrow functions return result of statement
  without operator return. '()' helps to avoid using return
  in some cases.

  Below is a function that constructs object from a parameters and
  uses '()' to avoid using operator return:
*/
const person = (firstName, lastName) => ({
    first: firstName,
    last: lastName
})

console.log(person("Flad", "Hanson"))

/*
   Regular functions does not block this. In case of usage regular
   function:
   
   setTimeout(function() {
    console.log(this.mountains.join(", "))
   }, delay)

   causes to error message, because 'this' is unknown
 */
const tahoe = {
    mountains: ["Freel", "Rose", "Tallac", "Rubicon", "Silver"],
    print: function (delay = 1000) {
    setTimeout(() => {
        console.log(this.mountains.join(", "))
        }, delay); 
    }
}

tahoe.print(50)

/*
  Destructuring Objects
 */
const sandwich = {
    bread: "dutch crunch",
    meat: "tuna",
    cheese: "swiss",
    toppings: ["lettuce", "tomato", "mustard"]
}
const { bread, meat } = sandwich // destructing object, extract part of values
console.log(bread, meat)

// destruction objects in case of having subojbect
// (regularPerson.spouse.firstname)
const lordify = ( { spouse: { firstname } } ) => {
    console.log(`${firstname} of Canterbury`)
}
const regularPerson = {
    firstname: "Bill",
    lastname: "Wilson",
    spouse: {
        firstname: "Phil",
        lastname: "Wilson"
    }
}
lordify(regularPerson)

/*
   Destructing arrays
*/
// first element from array
const [firstAnimal] = ["Horse", "Mouse", "Cat"] 
console.log(firstAnimal)

// last element from array (in case if size of array is known)
const [, , thirdAnimal] = ["Horse", "Mouse", "Cat"]
console.log(thirdAnimal)

/*
  Object Literal Enhancement (opposite to destructing)
*/
const personName = "Tallac"
const elevation = 9738
const print = function() {
    console.log(`Mt. ${this.personName} is ${this.elevation} feet tall`)
}
// enhancement itself: gather data and function in one object
const funHike = { personName, elevation, print }
funHike.print()

// Another usage of object literal enhancement
const author = "Author1"
const sound = "beep"
const skier = {
    author, // value by default (previosly was author:author)
    sound,  // value by default (previosly was sound:sound)

    powderYell() { // no keyword 'function'
        let yell = this.sound.toUpperCase()
        console.log(`${yell} ${yell}, ${yell}!!!`)
    },

    speed(mph) { // no keyword 'function'
        this.speed = mph
        console.log("speed:", mph)
    }
}
skier.powderYell()
skier.speed(10)

/*
   The Spread Operator '...'. Usages:
     - combining content of arrays
     - make a copy of exist array
     - get the remaining items in the array
     - collect function arguments as an array
     - combining content of objects
*/
const peaks = ["Tallac", "Ralston", "Rose"]
const canyons = ["Ward", "Blackwood"]
const tahoe1 = [...peaks, ...canyons] // combining content of arrays
console.log(tahoe1.join(", "))

const [last] = [...peaks].reverse() // make a copy of exist array
console.log(last)
console.log(peaks.join(", "))

const lakes = ["Donner", "Marlette", "Fallen Leaf", "Cascade"]
// get the remaining items in the array:
const [first, second, ...others] = lakes 
console.log(others.join(", "))

function directions(...args) { // collect function arguments as array
    let [start, ...remaining] = args
    let [finish, ...stops] = [...remaining].reverse()
    console.log(`drive through ${args.length} towns`)
    console.log(`start in ${start}`)
    console.log(`the destination is ${finish}`)
    console.log(`stopping ${stops.length} times in between`)
}
directions("Truckee", "Tahoe City", "Sunnyside", "Homewood", "Tahoma")

const morning = {
    breakfast: "oatmeal",
    lunch: "peanut butter and jelly"
}
const dinner = "mac and cheese"
const backpackingMeals = { // combining content of objects
    ...morning,
    dinner
}
console.log(backpackingMeals)

// recursion
const countdown = (value, fn, delay = 1000) => {
    fn(value)
    return value > 0
    ? setTimeout(() => countdown(value - 1, fn, delay) , delay)
    : value
}
const log = value => console.log(value)
countdown(10, log)