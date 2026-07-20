// destructuring = extract values from array and objects,
//                    then assign them to variables in a convenient way
//                    [] = to perform array destructuring
//                    {} = to perfrom object destructuring

//                    EXAMPLES OF array destructuring

//----------------------Example- 1------------
//swap the value of variables
// let a = 1;
// let b= 2;
// [a, b] = [b,a];
// console.log([a,b]);

//----------------------Example- 2------------

// let colors = ["red", "blue", "black"];
// [colors[0],colors[2]] = [colors[2],colors[0]]
// console.log(colors)

//----------------------Example- 3------------

// let colors = ["red", "blue", "black", "grey", "yellow"];

// const [first, second, third, ...remaining] = colors;
// console.log(first);
// console.log(second);
// console.log(third);
// console.log(remaining);

// //----------------------Example- 4------------
// //EXTRACT VALUED FROM OBJECTS

// const person1 = {
//     fname : "neha",
//     lname : "thatinati",
//     age : 19
// }

// const {fname, lname, age, job = "Unemployed"} = person1;
// console.log(fname + " " + lname);
// console.log(lname);
// console.log(age);
// console.log(job);

//----------------------Example- 4------------
//DESTRUCTION IN FUNTION PARAMETERS

function personDetails({fname,lname,age,job="Unemployed"}){
    console.log(`${fname}\n${lname}\n${age}\n${job}`);
}

const person1 = {
    fname : "neha",
    lname : "thatinati",
    age : 19,
    job : "student",
}

const {fname, lname, age, job = "Unemployed"} = person1;


personDetails(person1);