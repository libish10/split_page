var playstation=document.getElementById("playstation");
var xboxseries=document.getElementById("xboxseries");
var playstationHeading=document.getElementsByTagName("h1")[0];
var playstationAnchor=document.getElementsByTagName("a")[0];
var xboxseriesHeading=document.getElementsByTagName("h1")[1];
var xboxseriesAnchor=document.getElementsByTagName("a")[1];

function change(){
    console.log("Hai")
    playstation.classList.add("moving");
     playstationHeading.classList.add("heading");
     playstationAnchor.classList.add("anchoring");
     xboxseriesAnchor.classList.add("right_box_link");
     
}

function normal(){
    console.log("I am leaving");
    playstation.classList.remove("moving");
    playstationHeading.classList.remove("heading");
    playstationAnchor.classList.remove("anchoring");
    xboxseriesAnchor.classList.remove("right_box_link");
}
function change1(){
    playstation.classList.add("width-left");
    xboxseries.classList.add("moving-left");
    xboxseriesHeading.classList.add("moving-left-heading");
    xboxseriesAnchor.classList.add("moving-left-anchoring");
    playstationAnchor.classList.add("moving-left-box-anchoring");
}
function normal1(){
    playstation.classList.remove("width-left");
    xboxseries.classList.remove("moving-left");
    xboxseriesHeading.classList.remove("moving-left-heading");
    xboxseriesAnchor.classList.remove("moving-left-anchoring");
    playstationAnchor.classList.remove("moving-left-box-anchoring");
}
