console.log("dates.js running");
var person = require("./person")

console.log("person : "+JSON.stringify(person));
person.name = "avi";
console.log("person : "+JSON.stringify(person));
function dates(){
  console.log("dates function");  
}
module.exports = dates();