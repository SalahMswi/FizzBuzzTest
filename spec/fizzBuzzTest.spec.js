/**
 * Created by SAM3505 on 10/08/2016.
 */
var fizzBuzz = require('../lib/fizzbuzz');

describe("the tests of fizzBuzz project", function () {

    // it("should return the numbers from 1 to 100", function () {
    //     var numbers = fizzBuzz();
    //     for (var i = 0; i < numbers.length; i++) {
    //         expect(i+1).toBe(numbers[i]);
    //     }
    // })


    // it("should return the Fizz the number is multiple o three", function () {
    //     var numbers = fizzBuzz();
    //     console.log(fizzBuzz());
    //     console.log(10%5)
    //     expect("Fizz").toBe(numbers[2]);//pour le 3
    //     expect("Fizz").toBe(numbers[8]);//pour le 9
    //     expect("Buzz").toBe(numbers[4]);//pour le 5
    //     expect("Buzz").toBe(numbers[9]);//pour le 10
    // })

    it("should return the Fizz or Buzz or FizzBuzz the number is multiple o three", function () {
        var numbers = fizzBuzz();
        expect("Fizz").toBe(numbers[2]);//pour le 3
        expect("Fizz").toBe(numbers[8]);//pour le 9
        expect("Buzz").toBe(numbers[4]);//pour le 5
        expect("Buzz").toBe(numbers[9]);//pour le 10
        expect("FizzBuzz").toBe(numbers[14]);//pour le 15
        expect("FizzBuzz").toBe(numbers[44]);//pour le 45
    })

});
