//this is a keyword which is given/assigned to a function dynamically depending upon the function is invoked
//TYPES OF WRITING THIS

//1.Default binding
const user = {
    name : "neha",
    greet(){
    console.log(this);
}
};
user.greet();

//2.implicit binding
const user1 = {
    name : "bhargavi",
    greet(){
        console.log(`Hello ${this.name}`)
    }
};
user1.greet();

//explicit binding
//i) call()
//ii)apply()
//iii)bind()

//i)call(obj, arg1, agr2 so on); AND object using constructor function

function user2(name, age){
    this.name = name;
    this.age = age;
}
const greet = function (greeting){
        console.log(`${greeting} ${this.name}`);
    };
const userobj = new user2("samvida",19);
greet.call(userobj,"hi");

//ii)apply(obj,[arg1,arg2 so on]) AND object using Object.create() => inherits from parent obj

function user3(name,age,grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
    
}

const greet1 = function greet(greeting,status){
    console.log(`${greeting} ${this.name} she is a ${status}`);
}

const userobj1 = new user3("bhargavi",40,90);
greet1.apply(userobj1, ["hi", "topper"]);
greet1("hi","topper");


//iii)bind(obj) // binds permanently

const parentAnimal={
    isAlive : true,
    eat(){
        return "eating...";
    }
}

const dog = Object.create(parentAnimal);
dog.food = "bones";

function breedofDog(breed) {
    console.log(`the ${breed} dog ${this.isAlive} and ${this.eat()} ${this.food}`);
}

const boundbreed = breedofDog.bind(dog);
boundbreed("street dog");

//4.new Binding AND object by functions
const per1 = new Object;
per1.name = "aparajita";
per1.age = 16;
console.log(`my name is ${per1.name} , i am ${per1.age} years old`);

//5.lexical this(Arrow Functions) AND factory functions

function Person(name, age){
    return{
        name,
        age,
    greet2(){
        const arrow = () => console.log(name,age);
        arrow();
        }
    };
}

const p1 = Person("Durga",16);
p1.greet2();

//6.lexical functions
const user4 = {
    name : "Shiva",
    age : 18,
    greet3(){
        console.log(`I am currently in regular function`);
        const arrow = () => {console.log(`I am ${this.name}. I am the creator of this world. My age is ${this.age}. I am currently in arrow function`)}
        arrow();
    }
}
user4.greet3();




