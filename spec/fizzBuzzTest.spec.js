/**
 * Created by SAM3505 on 10/08/2016.
 */
var versions = require('../lib/fizzbuzz');//versions is a table which contains the 3 versions

describe("the tests of fizzBuzz test", function () {

    //NB: to launch the tests you have to install "jasmine" by a package manager like the npm .
    //After you have to put "jasmine-node spec/" in the terminal of intellijIDEA or Git bash (but you have to install
    // the jasmine-node global).

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

    //Test of version3
    it("should return the new version", function () {
        var numbersOfVersion2 = versions[2](3,5);
        var numbersOfNewVersion = versions[2](2,5);
console.log(numbersOfVersion2.toString())
        //tests if its parametred by (3,5) so it should return same as the version 2.
        expect("Fizz").toBe(numbersOfVersion2[2]);//3:it's multiple of 3.
        expect("Fizz").toBe(numbersOfVersion2[8]);//9:it's multiple of 3.
        expect("Buzz").toBe(numbersOfVersion2[4]);//5:it's multiple of 5.
        expect("Buzz").toBe(numbersOfVersion2[9]);//10:it's multiple of 5.
        expect("FizzBuzz").toBe(numbersOfVersion2[14]);//15:it's multiple of 3 and 5.
        expect("FizzBuzz").toBe(numbersOfVersion2[44]);//45:it's multiple of 3 and 5.

        //tests if its parametred by (2,5) so it should return "Fizz" if the number is multiple of 2 ,"Buzz" if
        // it's multiple of 5 and "FizzBuzz" if it's multiple of 2 and 5.
        expect("Fizz").toBe(numbersOfNewVersion[1]);//2:it's multiple of 2.
        expect("Fizz").toBe(numbersOfNewVersion[7]);//8:it's multiple of 2.
        expect("Buzz").toBe(numbersOfNewVersion[4]);//5:it's multiple of 5.
        expect("FizzBuzz").toBe(numbersOfNewVersion[9]);//10:it's multiple of 2 and 5.
         expect("Buzz").toBe(numbersOfNewVersion[14]);//15:it's multiple of 5.
        expect("Fizz").toBe(numbersOfNewVersion[15]);//16:it's multiple of 2.
        expect("Fizz").toBe(numbersOfNewVersion[15]);//16:it's multiple of 2.
        expect("Fizz").toBe(numbersOfNewVersion[17]);//18:it's multiple of 2.
        expect("FizzBuzz").toBe(numbersOfNewVersion[19]);//20:it's multiple of 2 and 5.
     })

    });
