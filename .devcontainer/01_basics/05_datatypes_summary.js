// datatypes: 2 types

// 1.primitive

// >> call by value >> changes are made in copy 
// 7 types
// 1. String, 2. Number, 3. Boolean, 4. null (empty) 5. undefined (variable declared but value not provided)
// 6. Symbol(unique) 2 Symbol with same value are not equal
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId)
console.log(typeof anotherId)

// , 7. BigInt (scientific)
const bigNumber = 932443244234234234324324324234n
console.log(bigNumber)
console.log(typeof bigNumber)


// javascript is dynamically typed whereas typescript is not
 const score = 100
 const outsideTemp = null
 let userEmail;



// 2. non-Primitive

// >> call by reference >> changes made in orignal 
// 1. Array, 2. objects, 3. Functions

const heros = ["shaktiman", "naagraj", "doga"]
console.log(heros)
let myObj = {
    name:"ukb",
    age: 21,
}
console.log(myObj)
  
const myFunction = function(){
    console.log("Namaste ! Bharat")
}
console.log(myFunction)
console.log(typeof myFunction)

 

