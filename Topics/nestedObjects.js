class Person{
    constructor(name,age,...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address{
    constructor(st,city,country){
        this.st = st;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("neha", 19, "shantiNagar", "Patancheru", "India");

console.log(person1.name, person1.age);
for(address1 in person1.address){
    console.log(address1)
}