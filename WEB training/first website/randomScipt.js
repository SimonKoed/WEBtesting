const player = 'bobby';
let experience = 100;
let wizardLevel = false;

if(experience > 90) {
	let wizardLevel = true;
	console.log('inside', wizardLevel);
}

console.log('outside', wizardLevel);

const obj = { // the object is constant and coannot be reassigned, but the proerpties of the object can
	player: 'bobby',
	experience: 100,
	wizardLevel: false
}

obj.wizardLevel = true;

//destructuring

const obj = {
	player: 'bobby',
	experience: 100,
	wizardLevel: false
}

const{player, experience} = obj; // pulls the properties from the object
let {wizardLevel} = obj;


const a = "Simon";
const b = true;
const c = {};

const obj1 = { // will pull the abovementioned variables into the object
	a,
	b,
	c
}

console.log(obj1.a);
console.log(obj1.b);
console.log(obj1.c);


//template strings
const name = "Sally";
const age = 34;
const pet = "horse";

const greetingBest = `Hello ${name} you seem to be ${age-10} and owns a ${pet}`; // uses backticks

//default arguemnt
function greet(name='', age = 30, pet='cat'){
	return `Hello ${name} you seem to be ${age-10} and owns a ${pet}`;
}


// Arrow functions
function add(a,b) {
	return a+b;
}

const add = (a,b) => a+b; // same as the function above


//Advanced Functions//////////////////////////////////////////////////////
const first = () =>{
	const greet = 'Hi';
	const second = () =>{
		alert(greet);
	}
	return second;
}

const newFunc = first();
newFunc();

//currying: Comverting a function taht takes several parameters into a function that takes them one at a time
const multiply = (a,b) => a*b;
const currieddMultiply = (a) => (b) => a*b;

currieddMultiply(3)(4); // 3 = a, 4 = b

//compose: Putting teo functions together to form a 3'd function, where the input 
//of one function is the output of the other

const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;

compose(sum, sum)(5); // both 'f' and 'g' = sum and 'a' = 5 
//(section 13, lecture 138 "advanced functions")


////Advanced arrays//////////////////////////////////////////////////////////////

const array = [1, 2, 10, 16];
const double = []

const newArray = array.forEach(num => {
	double.push(num * 2);
})

console.log('for each', double);


//map, filter, reduce

// map iterates through the array and performs an action to each index, and 
//creates a new array. The original array stays the same. map always returns something
const mapArray = array.map(num => { // map always returns something
	return num * 2;
});

/*
// alternate way of writing function above, since it returns something:
const mapArray = array.map(num => num * 2);
*/
console.log('map', mapArray);

// filter

// will print values above 5
const filterArray = array.filter(num => num > 5);

console.log('filter', filterArray);


// Reduce: can do both map and filter

const reduceArray = array.reduce((accumulator, num) => {
	return accumulator + num
}, 0); // '0' defines the starting value of accumulator

console.log('reduce', reduceArray);



/////Exercises for adavanced arrays////////////////
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames

let newArray = [] // empty array
array.forEach(user => {
	let { username } = user; // new empty object, fills with user
	username = username + "!"; // adds the '!'
	newArray.push(username); // pushes to the new array
})
console.log(newArray);

//Create an array using map that has all the usernames with a "? to each of the usernames

let mapArray = array.map(user => {
	let {username} = user;
	return username + "?";
})
console.log(mapArray);

//Filter the array to only include users who are on team: red

const filterArray = array.filter(user => {
	return user.team === "red";
})

console.log('filter', filterArray);

//Find out the total score of all users using reduce

const reduceArray = array.reduce((accumulator, user) => {
	return accumulator + user.score
}, 0); // '0' defines the starting value of accumulator

console.log('reduce', reduceArray);

// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	return num * 2;
})

console.log(newArray);
//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const answer = array.map(user => {
	user.items = user.items.map(item => {
		return item + "!"
	});
	return user;
})
console.log(answer);


//////Advanced objects///////////////////////////////////////

//context vs scope
//'this' refers to the object that you are currently in. 

//instantiation
class Player {
	constructor(name, type) {
		console. log(this);
		this.name = name;
		this.type = type;
	}

	introduce() {
		console.log(`Hi I am ${this.name}, I am a ${this.type}`);
	}
}

class Wizard extends Player {
	constructor(name, type) {
		super(name, type) // Needs to be done when extending, to have acces to the constructor of the mother class
	}

	play() {
		console.log(`WEEEEE I am a ${this.type}`);
	}
}

const wizard1 = new Wizard('Shelly', 'healer');
const wizard2 = new Wizard('David', 'Asshole');


//Type Coercion
//When the operands are different types, one of them will be converted
1 == '1' // will be read as: 1 == 1, since the program removes the ''
//Coercion is done by using == instead of ===

if(1){ // '1' will be coerced as true
	console.log(5);
}

if(0) { // will be coerced as false
	console.log(5);
}


//ES7
//includes() // is used to see if something is included in a string or array
const pets = ["dog", "cat", "wolf"];

pets.includes("wolf");
pets.includes("Bird");

//exponential operator

const square = (x) => x**2 // 'x' to the power of '2'
const cube = (x) => x**3 // 'x' to the power of '3'

//Exercises for ES7:
// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

dragons.includes('John') // false

// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

dragons.filter(name => name.includes('John')) // ['Johnathan']

// #3) Create a function that calulates the power of 100 of a number entered as a parameter
const power100 = (x) => x**100


//ES8

'Turtle'.padStart(10); // will add 10 spaces before 'turtle'
'turtle'.padEnd(10); // will add 10 spaces after 'turtle'

// syntax change that is better for git
const fun = (a,b,c,d,) => {
	console.log(a);
}

fun(1,2,3,4,)

// end of syntax

Object.values
Object.entries
Object.keys

let obj = {
	username0: 'Santa',
	username1: 'Rudolf',
	username2: 'Asshole'
}

Object.keys(obj).forEach((key, index) => { // allows the object to be handled like an
// array ie. using the forEach command
	console.log(key, obj[key]);


Object.values(obj).forEach(value => {// will print the value of each object
	console.log(value); 
})

Object.entries(obj).forEach(value => { // will print the object as strings
	console.log(value);
})

Object.entries(obj).map(value => {
	return value[1] + value[0].replace('username', '');
	// value[1] = 'Santa'. The rest replaces the 'username' with and empty string
})


//Exercises for ES8:
// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

// when you do:
console.log(startLine);
console.log(turtle.padStart(9));
console.log(rabbit.padStart(9));


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');
//.padEnd(9, '='); the turle takes up 2 spaces. The '=' will take up the remaining 7 spaces


// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
'my name is Rudolf the raindeer'



//end of Exercises

//Advanced loops
const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
	apples: 5,
	oranges: 10,
	grapes: 1000,
}

//for of loop. for Arrays
for (item of basket) {
	console.log(item);
}


// for in loop. For objects - loops over and sees the object properties
//We are enumerating, not iterating. properties are called Enumerables
for (item in detailedBasket) {
	console.log(item);
}

//Exercises

// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1,0,3,100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0

function biggestNumberInArray(arr) {

  for (let i = 0; i < arr.length; i++) {
    console.log(Math.max(arr));
  }
}

  function biggestNumberInArray2(arr) {
  let highest = 0;
  arr.forEach(item => {
    if (highest < item) {
      highest = item;
    }
  })
  return highest;
}


function biggestNumberInArray3(arr) {
  let highest = 0;
  for (item of arr) {
    if (highest < item) {
      highest = item;
    }
  }
  return highest;
}


// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
  glasses: 1
  books: 2
  floss: 100
}

function checkBasket(basket, lookingFor) {
  for (item in basket) {
    if (item === lookingFor) {
      return `${lookingFor} is in your basket`
    }
  }
  return 'that does not exist in your basket'
}

// End of exercises