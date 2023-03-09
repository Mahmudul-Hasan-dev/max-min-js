var number = [10, 12, 131, 4, 23, 242, 43, 43, 45];
console.log(number);
//splice will remove the element from array and return as an array

//splice(startindex,endindex,what to insert in that position)
//splice structure
var partial = number.splice(2, 5, 10, 12, 13);
console.log(partial);
console.log(number);
