function removeDuplicate(array) {
    let uniq = [];
    for (let i = 0; i < array.length; i++) {
        // console.log(array[i]);
        var name = array[i];
        if (uniq.includes(name) == false) {
            uniq.push(name);
        }
    }
    return uniq;
}

var names = ['abul', 'kabul', 'habul', 'labul', 'abul', 'kabul', 'habul', 'labul', 'abul', 'kabul', 'habul', 'labul'];
var newArray = removeDuplicate(names);
console.log(newArray);