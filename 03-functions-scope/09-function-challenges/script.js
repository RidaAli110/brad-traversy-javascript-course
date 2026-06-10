// My code written following Brad Traversy's course
const getCelsius = (f) => {
  const celsius = ((f - 32) * 5) / 9;
  return Math.round(celsius);
};
console.log(`The temptature is ${getCelsius(32)} \xB0C`);

function minMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return {
    min,
    max,
  };
};
console.log(minMax([1, 2, 3, 4, 5, 6, 7]));
function countEvenNumbers(arr) {
  let count = 0;
  for (const num of arr) {
    if (num % 2 === 0) {
      count++;
    }
  }
  return count;
}
console.log(countEvenNumbers([1, 2, 3, 4, 5, 6]));
function capitalizeName(name) {
  return name[0].toUpperCase() + name.slice(1).toLowerCase();
}
console.log(capitalizeName('aLEX'));