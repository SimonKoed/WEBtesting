/*var first = prompt("Enter first number");
var second = prompt("Enter second number");
first
second

Number(first)
Number(second)

var sum = Number(first) + Number(second);
alert("the sum is: " + sum);

console.log("HELOOOOO");*/

/*
function multiply(a, b) {
	return a * b;
}

multiply(5,10);
*/

/*
//Example of array within an array
var list = [["Tiger", "Cat", "Bear", "Bird"]];
console.log(list[0][2]);
*/

/*
//example of object
var user = {
	name: "john",
	age: 34,
	hobby: "Soccer",
	isMarried: false,
	spells: ["Abra", "Kadabra", "Alakazam"],
	shout: function(){
		console.log("AHHHHH!");
	},
};

console.log(user.spells[1]);
*/
/*
//Facebook exercise
var user = {
	username: "Simon",
	password: "1234",
};

var database = [user];

var newsfeed = [
	{
		username: "Andy",
		password: "1234",
	},
	{
		username: "Andreas",
		password: "4321",
	},
	{
		username: "Sofie",
		password: "789",
	},
];
*/
/*
var database = [
	{
		username: "Andre",
		password: "Supersecret"
	},
];

var newsfeed = [
	{
		username: "Bobby",
		timeline: "So tired from fishing"
	},
	{
		username: "Sally",
		timeline: "I am a giant liar"
	}
];

var userNamePromt = prompt("What is your username? ");
var passwordPrompt = prompt("What is your password? ");

function signIn(username, password){
	if(username === database[0].username &&
	password === database[0].password){
		console.log(newsfeed);
	} else{
		alert("Sorry, incorrect username and password");
	}
}

signIn(userNamePromt, passwordPrompt);
*/

//DOM Events
/*
var button = document.getElementsByTagName("button")[0];

button.addEventListener("click", function() { //"click" is the operation it should react to
	console.log("click!!!");
})
*/

var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul")
var deleteBtns = document.getElementsByClassName("delete");
var items = ul.getElementsByTagName("li");



//add event listener to first 6 btns in HTML file
for(var i = 0; i < deleteBtns.length; i++){
	deleteBtns[i].addEventListener("click", removeParent, false);
}


//from StackOverflow:
function removeParent(evt) {
  evt.target.removeEventListener("click", removeParent, false);
  evt.target.parentNode.remove();
}

//click on a list item and it strikethroughs the text
function getEventTarget(e){
	e = e || window.event;
	return e.target || e.srcElement;
}


ul.onclick = function(event){
	var target = getEventTarget(event);
	target.classList.toggle("done");
}


//adding new items:

function inputLength(){
	return input.value.length;
}

function createListElement() {
	var btn = document.createElement("button");
	btn.innerHTML = "Delete";
	btn.onclick = removeParent;

	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.innerHTML = li.innerHTML + " ";
	li.appendChild(btn);

	ul.appendChild(li);
	input.value="";
}


function addToListAfterClick(){
	if(inputLength() > 0){
			createListElement();
		}
}

function addToListAfterKeypress(event){
	if(inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}


button.addEventListener("click", addToListAfterClick);

input.addEventListener("keypress", addToListAfterKeypress);
