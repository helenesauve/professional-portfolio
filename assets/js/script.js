var myText = "Seeking career change in Front-End Web Development";
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