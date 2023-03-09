//declare function and take parameter from call function
function maxArray(array) {
    //suppose first index element is largest and we will compare one to one with it from array element
    var largest = array[0];
    for (i = 0; i < array.length; i++) {
        var currentElement = array[i];//currentelement value will change by loop

        //currentElement compare with initial largest and if it is larger than that then we have to set the current element as the largest
        if (currentElement > largest) {
            largest = currentElement;
        }

    }
    return largest;
}

var arr = [12, 14, 15, 16, 24, 31, 21, 11, 30, 45];

//call function and send array as parameter
var maxInArray = maxArray(arr);
console.log(maxInArray);