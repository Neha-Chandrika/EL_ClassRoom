// class Rectangle{
//     constructor(width, height){
//         this.width = width;
//         this.height = height;
//     }

//     set width(newWidth){
//         if(newWidth > 0){
//             this._width = newWidth;
//         }
//         else{
//             console.error("Width must be a positive number");
//         }
//     }

//     set height(newheight){
//         if(newheight > 0){
//             this._height = newheight;
//         }
//         else{
//             console.error("height must be a positive number")
//         }
//     }



//     get width(){
//         return this._width;
//     }

//     get height(){
//         return this._height;
//     }

// }

// const rectangle = new Rectangle(3,4);

// rectangle.height = "chapati"
// console.log(rectangle.width);
// console.log(rectangle.height);


class Person {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName){
        if(typeof newFirstName === "string" && newFirstName.length > 0){
            this._firstName = newFirstName;
        }
        else{
            console.error("the First name must be a non empty string");
        }
    }

    get firstName(){
        return this._firstName;
    }

    set lastName(newLastName){
        if (typeof newLastName === "string" && newLastName.length>0){
            this._lastName = newLastName;
        }
        else{
            console.error("the Last name must be a non empty string");
        }
    }

    get lastName(){
        return this._lastName;
    }

    set age(newAge){
        if(newAge > 0){
            this._age = newAge;
        }
        else{
            console.error("Age must be a number greater that 0");
        }
    }

    get age(){
        return this._age;
    }


}

const person = new Person("pizza", "beakery", 5);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
