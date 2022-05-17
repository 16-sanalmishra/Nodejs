// const file = require('fs');
// file.writeFileSync("notes.txt" , "This is text from nodejs");
// file.appendFileSync()
var myutils = require('./utils');
// var n = "Sanal";
var name  = myutils.name;
var func = myutils.addM(3,4);
console.log(func);
console.log(name);