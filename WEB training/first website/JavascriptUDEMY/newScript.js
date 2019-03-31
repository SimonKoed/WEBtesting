

document.getElementByTagName("h1");
document.getElementByClassName("second");
document.getElementById("first");

/*query selector works like CSS. These are reccomended by pro */
document.querySelector("li"); /* Will select the first element of the given name */
document.querySelectorAll("li"); /* Will select all elements of the given name */

document.querySelector("li").getAttribute("random"); /* Is used for finding the value of a given element
For example the width and height of a given image or similar */

document.querySelector("li").setAttribute("random", "1000"); /* Will change the value of a given element*/

document.querySelectorAll("h1").style.background = "yellow"; /* Allows you to change a specific CSS attribute */

document.querySelector("h1").className="coolTitle"; /* will change the class of an element*/
document.querySelector("h1").className.remove("coolTitle"): /*Will remove the class*/

