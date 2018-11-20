
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

var greeting = Math.floor(Math.random() * 6);
console.log(greeting);
 
if (greeting ==0) {
     document.getElementById("greeting").innerHTML = "Hello!"
 }
if (greeting  ==2) {
     document.getElementById("greeting").innerHTML = "Hey there!"
 }
if (greeting  ==3) {
     document.getElementById("greeting").innerHTML = "Hello!"
 }
if (greeting  ==4) {
     document.getElementById("greeting").innerHTML = "Greetings!"
 }
if (greeting ==5) {
     document.getElementById("greeting").innerHTML = "Hi!"
 }
if (greeting  ==1) {
     document.getElementById("greeting").innerHTML = "Welcome!"
 }


