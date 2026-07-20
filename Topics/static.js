class person{
    static count = 0;
    constructor(name,age,color){
        this.name = name,
        this.age = age,
        this.color = color
        person.count++;
    }

    display(){
        console.log(`the name is${this.name}`);
        console.log(`the age is${this.age}`);
        console.log(`the color is${this.color}`);
        
    }
}

const per1 = new person("neha", 19, "white");
per1.display();
console.log(person.count);