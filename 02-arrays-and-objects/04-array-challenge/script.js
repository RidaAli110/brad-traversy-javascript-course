// My code following Brad Traversy's course

//Array Challenge
const arr = [1, 2, 3, 4, 5];
arr.reverse();
arr.unshift(6);
arr.push(0);
console.log(arr);

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];
const arr3 = [...arr1, ...arr2];
arr3.splice(4, 1)
console.log(arr3);