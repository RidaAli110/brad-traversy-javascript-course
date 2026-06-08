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
