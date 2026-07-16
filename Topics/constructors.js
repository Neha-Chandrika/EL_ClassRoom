function persons(name,age,color){
    this.name = name,
    this.age = age,
    this.color = color
}

const per1 = new persons("neha", 19 , "white");
console.log(per1.name);
console.log(per1.age);
console.log(per1.color);

