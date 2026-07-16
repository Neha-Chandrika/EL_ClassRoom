// class Animal{
//     static alive = true;

//     eat(){
//         console.log(`this ${this.name} is eating`);
//     }

//     sleep(){
//         console.log(`this ${this.name} is sleeping`);
//     }
// }

// class Rabit extends Animal{
//     name = "rabit";
// }

// class hawk extends Animal{
//     name = "hawk";
// }

class Person{
    constructor(name, age, color){
        this.name = name,
        this.age = age,
        this.color = color
    }

    parent(){
        console.log(`Called the parent function`);
    }

}

class indian extends Person{
    constructor(name,age,color,height){
        super(name,age,color);
        this.height = height;
    }
}

const per1 = new indian("neha",19,"white",5.1);

console.log(per1.name);
console.log(per1.age);
console.log(per1.color);
console.log(per1.height);
