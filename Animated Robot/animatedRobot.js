var rightEye = document.getElementById("righteye");

rightEye.addEventListener("click", moveUpDown);

var leftEye = document.getElementById("lefteye");

leftEye.addEventListener("click", moveUpDown);

var leftArm = document.getElementById("leftarm");

leftArm.addEventListener("click", moveRightLeft);

var rightArm = document.getElementById("rightarm");

rightArm.addEventListener("click", moveDownUp);

var nose = document.getElementById("nose");

nose.addEventListener("click", moveUpDwn);

function moveUpDown (e) {
    var robotPart = e.target;
    var top = 0;

    var animation = setInterval (frame, 10) //redraw every 10ms

    function frame() {
        robotPart.style.top = top + '%'; // 0%
        top++;
        if (top === 20){
            clearInterval(animation); //stops animation
        }
    }
}

function moveRightLeft (e) {
    var robotPart = e.target;
    var left = 0;

    var animation = setInterval (frame, 10) //redraw every 10ms

    function frame() {
        robotPart.style.left = left + '%'; // 0%
        left++;
        if (left === 70){ // original position from css
            clearInterval(animation); //stops animation
        }
    }
}

function moveDownUp (e) {
    var robotPart = e.target;
    var top = 0;

    var animation = setInterval (frame, 10) //redraw every 10ms

    function frame() {
        robotPart.style.top = top + '%'; // 0%
        top++;
        if (top === 35){
            clearInterval(animation); //stops animation
        }
    }
}

function moveUpDwn (e) {
    var robotPart = e.target;
    var top = 0;

    var animation = setInterval (frame, 10) //redraw every 10ms

    function frame() {
        robotPart.style.top = top + '%'; // 0%
        top++;
        if (top === 50){
            clearInterval(animation); //stops animation
        }
    }
}