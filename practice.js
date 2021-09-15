// Variables and functions 
let name = 'Max';
let age = 29; 
let hasHobbies = true; 

age = 30; 

function summarizeUser(userName, userAge, userHobby) {
    return ('Name is ' + userName + ', age is ' + userAge);
};

console.log(summarizeUser(name, age, hasHobbies));

// Arrow Functions 

const add = (a, b) =>  a + b;

console.log(add(1, 3));

const addOne = a => a + 1; //If you only have one parameter, then there is no need for parenthesis 

console.log(addOne(1));

//Working with Objects, Properties and Methods 

const person = {
    name: 'Kathy',
    year: 22,
    greet() {
        console.log('Hi, I am ' + this.name); //The word this refers to the object
    } //Do not use an arrow function because it will be undefined 
};

console.log(person);

person.greet();


//Arrays and Array Methods 
const hobbies = ['Sports', 'Cooking']; //The array can have any value
for (let hobby of hobbies) { //The word in will return the number value of the array 
    console.log(hobby); 
}

console.log(hobbies.map(hobbi => 'Hobby: ' + hobbi)); //This allows you to transform an array, it will return a new array
console.log(hobbies); //This will be the original array 

hobbies.push('Programming');
console.log(hobbies); //This is a reference type. It points to the storage not the actual array. That is why the const has not changed


//Spread and Rest Operators 
const copiedArray = hobbies.slice(); 
console.log(copiedArray); //This copies the original array 

const copyArray = [hobbies]; //This creates a nested array

const copieArray = [...hobbies]; //No nested array, and this is a copy of the old array
// The ...(aka spread operator) works on arrays and objects 
console.log(copieArray); //Spread operator pulls the original info and copies it over to the new array one by one
// The spread operator is used to pull elements or properties from an array or an object


//Rest Operator 
const toArray = (arg1, arg2, arg3) => {
    return [arg1, arg2, arg3]; 
};

console.log(toArray(1, 2, 3));  //This works but it is not flexible 

//More flexible example using rest 
// Rests is used to merge multiple arguments into an array, used in an argument list of a function 
const anArray = (...args) => { //
    return args;
};

console.log(anArray(4, 5, 6, 7));

//Destructuring 
