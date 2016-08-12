/**
 * Created by SAM3505 on 10/08/2016.
 */


var numbers = [];//contains numbers from 1 to 100.
for (var i = 1; i <= 100; i++) {
    numbers.push(i);
}

// this method returns Fizz or Buzz instead of the number in the table if it's a multiple of 3 or 5
var version1 = function version1() {
    var numbersFizz = numbers.map(function (num) {
        if (num % 3 == 0) {
            num = "Fizz";
        }
        if (num % 5 == 0) {
            num = "Buzz";
        }
        return num;
    });
    return numbersFizz;
}

// this method returns Fizz or Buzz or FizzBuzz instead of the number in the table if it's a multiple of 3 or 5 or of the both
var version2 = function version1() {
    var numbersFizz = numbers.map(function (num) {
        if (num % 3 === 0 && num % 5 === 0) {
            num = "FizzBuzz";
        }
        if (num % 3 == 0) {
            num = "Fizz";
        }
        if (num % 5 == 0) {
            num = "Buzz";
        }
        return num;
    });
    return numbersFizz;
}

var version3 = function () {

}

var versions=[version1,version2,version3];

module.exports=versions;
