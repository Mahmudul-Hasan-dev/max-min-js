//declare function to find minimum value from the array
function minArray(array) {

    //suppose the first element of array is the smallest and compare it to one by one with the array element
    var minimum = array[0];
    for (i = 0; i <= array.length; i++) {
        //currentElement is the value of array element
        var currentElement = array[i];
        if (currentElement < minimum) {
            //if current element is smaller than the initial small than set the current element as initial small
            minimum = currentElement;
        }
    }
    return minimum;
}
//declare array
var arr = [10, 34, 67, 84, 32, 11, 9];

//call function and send the array as parameter
var minOfArray = minArray(arr);
console.log(minOfArray);
