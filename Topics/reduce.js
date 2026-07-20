/* .reduce(callback) is a method of js which returns a particular single value of the list based on the condition of the callback function*/
const grades = [58, 81, 58 ,98,95 ,84];
let maximum = grades.reduce(max);

function max(accumulator, element){
    return Math.max(accumulator,element);
}

console.log(maximum);