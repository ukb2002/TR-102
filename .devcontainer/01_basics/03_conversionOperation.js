// ********************* Conversion ******************

let score = "33abc"
let score1 = null

console.log(typeof score)
console.log(typeof (score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber) // NaN not a number but type is number in Number.

let valueInNumber1 = Number(score1)
console.log(typeof valueInNumber1)

// true => 1 and false => 0
// "33" => 33
// "33abc" => NaN

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// "" => false
// 1 => true
// 0 => false
// "abc" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof stringNumber)
console.log(stringNumber)


// ************************ Operations *************************

let value = 3
let negValue = -value
console.log(negValue) 
console.log(2+2)

let str1 = "hello !"
let str2 = "Uddhav"
let str3 = str1 + str2
console.log(str3)

console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 2)
console.log(3 + 2 + "3")  // notice 3+2

console.log(true)
console.log(+true) // bad practice
console.log(+"")  // bad practice

let num1, num2, num3 
num1 = num2 = num3 = 2+2 // not a good practice

let gameCounter = 100
++gameCounter           // prefix and postfix operator . study on js mdn
console.log(gameCounter)




