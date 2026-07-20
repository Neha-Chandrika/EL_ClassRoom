/*forEach() is a method in js which will iterate through an array and uses call back*/
/*EXAMPLE-1*/

let numbers = [1,2,3,4,5];
let result = 0;
//numbers.forEach(sum);
//numbers.forEach(display);
numbers.forEach(double);

/*EXAMPLE-2 */
function double(element, index, array)
{
    array[index] = element * 2;
}
console.log(numbers);

/* EXAMPLE-3*/
function sum(element)
{
    result+=element;
}
console.log(result);

/* EXAMPLE-3*/
function display(element){
    console.log(element);
}