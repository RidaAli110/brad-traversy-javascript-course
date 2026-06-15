// my code
const person = {
  firstName: 'Ali',
  age: 25,
  city: 'London',
};
for (const key in person) {
  console.log(person[key]);
}
const car = {
  brand: 'Toyota',
  model: 'Corolla',
  year: 2022,
  color: 'Blue'
};
for (let key in car) {
     console.log(`${key}: ${car[key]}`);
}



