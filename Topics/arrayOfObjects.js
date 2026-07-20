const fruits = [{name: "apple", color: "red", calories: 95},
                {name: "orange", color: "orange", calories: 45},
                {name: "banana", color: "yellow", calories: 105},
                {name: "coconut", color: "white", calories: 159},
                {name: "pineapple", color: "yellow", calories: 37}];


//---------------FOR EACH--------------
fruits.forEach(fruit => console.log(fruit.name));

//---------------MAP--------------
const newFruits = fruits.map(fruit => fruit.color);
console.log(newFruits)

//---------------FILTER--------------
const maxcalories = fruits.filter(fruit => fruit.calories>100 );
console.log(maxcalories)

//---------------REDUCE--------------
const maxCalories = fruits.reduce((max, fruit)=>
                                       fruits.calories > max.calories ? fruit : max );
console.log(maxCalories)


                                        