var versions = require('../src/lib/fizzbuzz');//versions is a table which contains the 3 versions
console.log("version1 :"+versions[0]().toString())
console.log("************************")
console.log("version2 :"+versions[1]().toString())
console.log("************************")
console.log("version3 with (3,5) same as the version2 :"+versions[2](3,5).toString())
console.log("************************")
console.log("version3 with (2,5) :"+versions[2](2,5).toString())
console.log("************************")
