/*arrow function = a concise way to write function expression good for simple functions that uou use only once a SYNTAX = (parameters) => some code;*/

// setTimeout(useCallback, number(the no. of milli sepnds after which the callback should run))

const hello = function(){
    console.log("Hello");
}
hello();

const bye = () => console.log("GOOD BYE");
bye();

const numbers = [1,2,3,4,5,6];
// const num = numbers.map(squares);
// function squares (element){
//     return Math.pow(element,2);
// }

const numssqrt = numbers.map((element) => Math.pow(element));
console.log(num);

