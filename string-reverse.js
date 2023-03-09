//function for normal string print
// function reverse(string) {
//     let reversed = '';
//     for (i = 0; i < string.length; i++) {
//         console.log(string[i]);
//     }
// }
// var stringGiven = 'i am a good boy';
// var reversedString = reverse(stringGiven);
// console.log(reversedString);

//function for reverse
function reverse2(string) {
    let reversed = '';
    for (i = string.length - 1; i >= 0; i--) {
        // console.log(string[i]);
        var element = string[i];
        reversed = reversed + element;
    }
    return reversed;
}
var stringGiven2 = 'i am a good boy';
var reversedString2 = reverse2(stringGiven2);
console.log(reversedString2);


console.log('step 3')

