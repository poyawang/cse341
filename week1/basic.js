// arrow function
let name = 'anna'
let age = 25
let hobby= 'dance'

const arrowFunction = (userName, userAge, userHobby) => {
    return (
        'name is' + 
        userName + 
        ', age is ' + userAge + 
        ', hobby is' + userHobby)
}

console.log(arrowFunction(name, age, hobby))

// object

const person = {
    name:'eli', 
    age:21, 
    greet() {
        console.log('hi i am ' + this.name)
    }
}

person.greet()

// destructuring

// const printName = (personData) => {
//     console.log(personData.name)
// }
const printName = ({name}) => {
    console.log(name)
}

printName(person)

const hobbiesList = ['sport', 'cooking'] 
const [hobby1, hobby2] =  hobbiesList
console.log(hobby1, hobby2)


// array
const hobbies = ['sport', 'cooking']
// console.log(hobbies.map(hobby => 'hobby: ' + hobby))
// console.log(hobbies)

hobbies.push('programming')
console.log(hobbies)

// copy array
const copyArray = hobbies.slice()
console.log(copyArray)

// copy and create new array
const copyCreateArray = [hobbies]
console.log(copyCreateArray)

const threeDotCopy = [...hobbies]
console.log(threeDotCopy)

// rest arg (the argument numbers are flexible)
const toArray =(...args) => {
    return args;
}

console.log(toArray(1,2,3,4))