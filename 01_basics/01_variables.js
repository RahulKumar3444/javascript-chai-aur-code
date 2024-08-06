const accountId = 144553
let accountEmail = "rahul@google.com"
var accountPassword = "12345"
accountCity = "Muzaffarpur"
let accountState;

accountEmail ="rk@k.com"
accountPassword = "7654"
accountCity = "Indore"

/*
Prefer not to use var because of issue in block scope and functional scope
*/

console.log(accountId)
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])