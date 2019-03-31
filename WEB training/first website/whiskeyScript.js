var button = document.getElementById("enter");
var input = document.getElementById("user input");
var tr = document.querySelector("tr");

function inputLength(){
	return input.value.length;
}

function createListElement(){
	var th = document.createElement("th");
	tr.appendChild(document.createTextNode(input.value));
	tr.appendChild(tr);
	input.value = "";
}


function addListAfterClick(){
	//console.log(input.value);
	if(inputLength() > 0){
		createListElement();
	}
}

function addListAfterKeypress(event){
	//console.log(input.value);
	if(inputLength() > 0 && event.keyCode === 13){
		createListElement();
	}
}


//adding point to list via mouseclick
button.addEventListener("click", addListAfterClick)


//adds point to list via "enter"
input.addEventListener("keypress", addListAfterKeypress)