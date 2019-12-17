var gameMarker = "X";
var id = 1;

function changeMarkerToX() {
    gameMarker = "X";
    console.log("The X button was clicked!");
}

function changeMarkerToO() {
    gameMarker = "O";
    console.log("The O button was clicked!");
}

function placeMark () {
    console.log(gameMarker)
    var currentBox = document.getElementById(id);
    currentBox.innerHTML = gameMarker;
    id += 1;
}