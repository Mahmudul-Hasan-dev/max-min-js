function findMax(num1, num2, num3) {
    var largeNumber;
    if (num1 > num2 && num1 > num3) {
        console.log('the largest is:');
        largeNumber = num1;
    }
    else if (num2 > num1 && num2 > num3) {
        console.log('the largest is:');
        largeNumber = num2;
    }
    else {
        console.log('the largest is');
        largeNumber = num3;
    }
    return largeNumber;
}

var number1 = 100;
var number2 = 17;
var number3 = 12;
var max = findMax(number1, number2, number3);
console.log(max);