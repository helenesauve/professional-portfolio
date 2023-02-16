// text in jumbotron types when opening the page
var myText = "Front-End Web Developer based in Bristol";
var myArray = myText.split("");
var loopTimer;
function frameLooper() {
    if(myArray.length > 0) {
        document.getElementById("type-text").innerHTML += myArray.shift();
    } else {
        clearTimeout(loopTimer);
        return false;
    }
    loopTimer = setTimeout("frameLooper()", 70);
}
frameLooper()