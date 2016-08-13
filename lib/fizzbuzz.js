/**
 * Created by SAM3505 on 10/08/2016.
 */


//NB: at first I began from the principle of TDD: at first, I had built the test and I launched it
// (even it didn't success), and after, I developed the method.var numbers = [];//contains numbers from 1 to 100.

var numbers=[];
for (var i = 1; i <= 100; i++) {
    numbers.push(i);
}

// in this method I check the numbers (as first parameter) of the table if is multiple of par1 (it will be replaced by "Fizz") or of
// par2 (it will be replaced by "Buzz") or of the multiple of the both (it will be replaced by "FizzBuzz")
function checkIfMultipleOf(numbers,par1,par2){
    var newTable = numbers.map(function (num) {
        if (num % par1 === 0 && num % par2 === 0) { //nb:you can't put this condition after
            num = "FizzBuzz";
        }
        if (num % par1 == 0) {
            num = "Fizz";
        }
        if (num % par2 == 0) {
            num = "Buzz";
        }
        return num;
    });
    return newTable;
}
// this method returns Fizz or Buzz instead of the number in the table if it's a multiple of 3 or 5
 function v1() {
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

// in this method I check the numbers of the table if is multiple of 3 (it will be replaced by "Fizz") or of
// 5 (it will be replaced by "Buzz") or of the multiple of the both (it will be replaced by "FizzBuzz").
function v2() {
    return checkIfMultipleOf(numbers,3,5);
}


//in this method I check at first if the configuration is (3,5) so it returns what v2 method return else it returns :
//"Fizz" if the number is multiple of the first parameter
//"Buzz" if the number is multiple of the second parameter
//"FizzBuzz" if the number is multiple of the first and the second parameter.
 function v3(multiple1,multiple2) {
    if (multiple1==3 && multiple2==5){
        return v2();
    }else{
        return checkIfMultipleOf(numbers,multiple1,multiple2)
    }
}

function submitApplication() {
    console.log("v3");

}
var version1 =v1;
var version2 =v2;
var version3 =v3;
var versions=[version1,version2,version3];

module.exports=versions;
