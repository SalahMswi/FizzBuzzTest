/**
 * Created by SAM3505 on 10/08/2016.
 */
var versions = require('../lib/fizzbuzz');

describe("the tests of fizzBuzz test", function () {

    //NB: to launch the tests you have to install "jasmine" by a package manager like the npm .
    //After you have to put "jasmine-node spec/" in the terminal of intellijIDEA or Git bash.

    //Test of version1
    it("should return Fizz or Buzz instead of the number in the table if it's a multiple of 3 or 5", function () {
        var numbers = versions[0]();
        expect("Fizz").toBe(numbers[2]);//pour le 3
        expect("Fizz").toBe(numbers[8]);//pour le 9
        expect("Buzz").toBe(numbers[4]);//pour le 5
        expect("Buzz").toBe(numbers[9]);//pour le 10
    })

    //Test of version2
    it("should return Fizz or Buzz or FizzBuzz instead of the number in the table if it's a multiple of 3 or 5 or of the both", function () {
        var numbers = versions[1]();
        expect("Fizz").toBe(numbers[2]);//3:it's multiple of 3.
        expect("Fizz").toBe(numbers[8]);//9:it's multiple of 3.
        expect("Buzz").toBe(numbers[4]);//5:it's multiple of 5.
        expect("Buzz").toBe(numbers[9]);//10:it's multiple of 5.
        expect("FizzBuzz").toBe(numbers[14]);//15:it's multiple of 3 and 5.
        expect("FizzBuzz").toBe(numbers[44]);//45:it's multiple of 3 and 5.
    })

});
