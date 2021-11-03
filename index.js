var playstation=document.getElementById("playstation");
var xboxseries=document.getElementById("xboxseries");
var playstationHeading=document.getElementsByTagName("h1")[0];
var playstationAnchor=document.getElementsByTagName("a")[0];


function change(){
    console.log("Hai")
    playstation.classList.add("moving");
     playstationHeading.classList.add("heading");
     playstationAnchor.classList.add("anchoring");
}

function normal(){
    console.log("I am leaving");
    playstation.classList.remove("moving");
    playstationHeading.classList.remove("heading");
    playstationAnchor.classList.remove("anchoring")
}
function change1(){
    
}
function normal1(){

}