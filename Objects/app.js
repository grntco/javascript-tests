/*
1. Create an empty object user.
2. Add the property name with the value John.
3. Add the property surname with the value Smith.
4. Change the value of the name to Pete.
5. Remove the property name from the object.
*/
let user = {
    name: "John",
    surname: "Smith",
}
user["name"] = "Pete";
delete user.name;

//Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
let emptyObj = {};
function isEmpty(obj) {
    for (prop in obj) {
        return false;
    }
    return true;
}
console.log(isEmpty(emptyObj));

//We have an object storing salaries of our team:
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
//Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
//If salaries is empty, then the result must be 0.
let sum = 0;
function sumSalaries(obj) {
    for (let prop in obj) {
        sum += obj[prop];
    }
    return sum;
}
console.log(sumSalaries(salaries));

//Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for (let prop in obj ) {
        if (typeof obj[prop] == "number") {
            obj[prop] *= 2;
        }
    }
}
multiplyNumeric(menu);
console.log(menu.width);
console.log(menu.height);
console.log(menu.title);



//MDN article on Objects Basics
const person = {
    name: {
      first: 'Bob',
      last: 'Smith',
    },
    age: 32,
    bio() {
      console.log(`${this.name.first} ${this.name.last} is ${this.age} years old.`);
    },
    introduceSelf: function() {
      console.log(`Hi! I'm ${this.name.first}.`);
    }
  };

  person.age = 45;
  person['name']['last'] = 'Cratchit';
  person['eyes'] = 'hazel';
  person.farwell = function() {
    console.log('Bye everybody!');
  }

  const myDataName = 'height';
  const myDataValue = '1.75m';
  person[myDataName] = myDataValue;

  function Person(name) {
    this.name = name;
    this.introduceSelf = function() {
      console.log(`Hi! I'm ${this.name}.`);
    }
  }
  const salva = new Person('Salva');
  const frankie = new Person('Frankie');
