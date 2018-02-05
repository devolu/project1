"use strict";
let counter1 = 0
let date = new Date();
    date = date.setDate(date.getDate() + 5);
	
// Cookie Management
function write_cookie(name, value) {
  var cookie = [name, '=', JSON.stringify(value), '; domain=.', window.location.host.toString(), '; path=/', '/C:/Users/rasmus.breyer/Documents/project1/index.html', ';'].join('');
  document.cookie = cookie;
}

function read_cookie(name) {
 var result = document.cookie.match(new RegExp(name + '=([^;]+)'));
 result && (result = JSON.parse(result[1]));
 return result;
}

// Anwendungscode
window.addEventListener("load", function() {
let indicator = document.getElementById("boxindicator");
indicator.addEventListener("click", function() {
indicator.classList.toggle("panik-two");
}, false);
}, false); 

window.addEventListener("load", function() {
let heading = document.getElementById("heading1");
    heading.innerHTML = "Wie viele Verträge möchtest du überprüfen?";
}, false); 


window.addEventListener("load", function() {
    let panel = document.getElementById("p");
    console.log(panel.innerHTML);
}, false); 

    window.addEventListener("load", function() {
    let heading = document.getElementById("heading1");
	heading.addEventListener("click", function() {
    counter1 = counter1 + 1;
    heading.innerHTML = "Ich habe " + counter1 + " Verträge bereits überprüft";
	write_cookie("Counter", counter1);
	console.log(read_cookie("Counter"));
	}, false); 
	}, false);


window.addEventListener("click", function() {
    let heading1 = document.getElementById("p");
    heading1.className = "panel panel-danger";
    }, false); 

window.addEventListener("mouseover", function() {
    let Button1 = document.getElementById("h1");
    Button1.innerHTML = "Heute ist der: " + date + " Tag im Monat";
}, false); 

window.addEventListener("mouseout", function() {
    let Button1 = document.getElementById("h1");
    Button1.innerHTML = "this is over";
}, false); 

window.addEventListener("load", function() {
    let header = document.getElementById("heading2");
    header.addEventListener("click", function() {
    let headerr = document.getElementById("Title2");
    headerr.classList.toggle("panik-two");
    }, false);
    }, false);

