// My code following Brad Traversy's course
// 1st solution
function calculator(num1, num2, operator){
     let sum;
     switch (operator) {
          case '+':
               sum = num1 + num2;
               break;
               case '-':
                    sum = num1 - num2;
                    break;
                    case '*':
                         sum = num1 * num2;
                         break;
                         case '/':
                              sum = num1 / num2;
                              break;
          default:
               sum = 'invalid'
               break;
     }
     console.log(sum);
     return sum;
};
calculator(5, 2, '/')
// 2nd solution
function calculator(num1, num2, operator) {
  let sum;
  if (operator == '+') {
       sum = num1 + num2;
     } else if (operator == '-') {
          sum = num1 - num2;
     } else if (operator == '*') {
          sum = num1 * num2;
     } else if (operator == '/') {
          sum = num1 / num2;
     } else {
          console.log('invalid');
     }
     console.log(sum);
     return sum;
}
calculator(5, 2, '-');
