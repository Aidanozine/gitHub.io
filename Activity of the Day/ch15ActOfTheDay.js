var todayDate = document.getElementById("todaysdate");
var todoButton = document.getElementById("whattodo");
var thing = document.getElementById("thingToDo");

todoButton.addEventListener("click", displayActivity);

var d = new Date();

displayDate();

function displayDate() {
    todayDate.innerHTML = d.toDateString();
}

function displayActivity() {
    var dayOfWeek = d.getDay();

    var youShould;

    switch (dayOfWeek) {
        case 1:
            youShould = "Get ready for a long week!";
            break;

        case 2:
            youShould = "Find a song to psych yourself up!";
            break;
        
        case 3:
            youShould = "Eat something that will give you energy!";
            break;

        case 4:
            youShould = "Keep your head up, almost there!";
            break;

        case 5:
            youShould = "Braai day!";
            break;

        case 6:
            youShould = "Take away!";
            break;

        case 7:
            youShould = "cooking day!";
            break;

        default:
            youShould = "Nice try! That's not a real day!"
    }
    //document.getElementById("thingToDo").innerHTML = youShould;
    thing.innerHTML = youShould;
}
