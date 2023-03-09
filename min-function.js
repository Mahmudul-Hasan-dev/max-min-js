//declare function to find minimum of three number and take parameter from call function
function findMin(num1, num2, num3) {
    //declare variable to store initial minimum values
    var smallestNumber;

    //select one and compare with others
    if (num1 < num2 && num1 < num3) {
        console.log('smallest number is:');
        //store the inital minimum in the variable
        smallestNumber = num1;
    }
    else if (num2 < num1 && num2 < num3) {
        console.log('smallest number is:');
        smallestNumber = num2;
    }
    else {
        console.log('smallest number is:');
        smallestNumber = num3;
    }
    //return the minimum stored value
    return smallestNumber;
}

var number1 = 10;
var number2 = 12;
var number3 = 5;

//call function and send variable as parameter
var minimum = findMin(number1, number2, number3);
console.log(minimum);