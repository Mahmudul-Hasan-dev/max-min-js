//declare function to find maximum of three number and take parameter from call function
function findMax(num1, num2, num3) {

    //declare a variable to store the initial max number from condition
    var largeNumber;

    //select one and compare with others
    if (num1 > num2 && num1 > num3) {
        console.log('the largest is:');
        //store as max if condition is true
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
    //return the stored max
    return largeNumber;
}

//declare variable
var number1 = 100;
var number2 = 17;
var number3 = 12;

//call function and send variable as parameter of call function
var max = findMax(number1, number2, number3);
console.log(max);