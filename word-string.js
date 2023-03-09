//function with word reverse
function reverse3(string) {
    let reversed = [];
    for (i = string.length - 1; i >= 0; i--) {
        // console.log(string[i]);
        reversed.push(string[i]);
    }
    return reversed;
}
function wordsplit(str) {
    var newstr = str.split(' ');
    return newstr;
}
var stringGiven3 = 'i am a good boy';
var newstring = wordsplit(stringGiven3);
var reversedString3 = reverse3(newstring);
console.log(reversedString3);


//simple way
function reverse4(string) {
    let newString = string.split(' ')
    let reversed = [];
    for (i = newString.length - 1; i >= 0; i--) {
        // console.log(string[i]);
        reversed.push(newString[i]);
    }
    return reversed;
}

var string = 'hello there welcome';
var result = reverse4(string);

//join them with space
var joinedresult = result.join(' ')
console.log(result);
console.log(joinedresult);