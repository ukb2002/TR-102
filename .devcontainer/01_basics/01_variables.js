const accountId=144553
let accountEmail = "ukb@gmail.com"
var accountPassword = "12345" /*prefer not to use var bcoz block scope{ } or functional scope */
accountCity = "mathura"
let accountState

//accountId = 2 // not allowed

accountEmail= "uv@gmail.com"
accountPassword = "54321"
accountCity = "ludhiana"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity ,accountState])
