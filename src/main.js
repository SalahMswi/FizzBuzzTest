var versions = require('../lib/fizzbuzz');//versions is a table which contains the 3 versions

var scanf = require('scanf');

console.log('Please enter the first parameter');
var par1 = scanf('%s');
console.log('Please enter the second parameter');
var par2 = scanf('%s');
console.log("************************")
console.log("version3 with ("+par1+","+par2+") :" + versions[2](par1, par2).toString())
console.log("************************")
