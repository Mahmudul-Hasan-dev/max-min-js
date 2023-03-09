var student = ['rahim', 'karim', 'nat', 'boltu'];
var number = [10, 12, 131, 4, 23, 242, 43, 43, 45];
console.log(Array.isArray(number));
console.log(Array.isArray(student));
console.log(number.includes(32));

//concat/joining two array

var newNumber = [09, 78, 98, 96];
//concat use to merge two arrays together
var allNumber = newNumber.concat(number);
console.log(allNumber);