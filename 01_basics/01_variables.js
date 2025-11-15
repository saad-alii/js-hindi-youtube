const accountId = 144553
let accountEmail = "saad@gmail.com"
var accountPassword = "12345"
accountCity = "rwp"

// accountId = 2 // not allowed
accountEmail = "s@g.com"
accountPassword = "dwers"
accountCity = "isb"
let accountState;
 
console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])