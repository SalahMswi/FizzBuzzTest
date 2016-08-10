/**
 * Created by SAM3505 on 10/08/2016.
 */


var numbers = [];
for (var i = 1; i <= 100; i++) {
    numbers.push(i);
}

//should return the numbers from 1 to 100
function returnnumbers() {
    return numbers;
}

//should return the Fizz the number is multiple o three
function returnFizzOrBuzz() {
    var numbersFizz =numbers.map(function (num) {
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

module.exports = function main() {
    var numbersFizz =numbers.map(function (num) {
        if(num % 3 ===0 && num % 5 ===0){
            num ="FizzBuzz";
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
