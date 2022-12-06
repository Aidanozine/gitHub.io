generateRandomInsult = function () {
    var randomBodyParts = ["Face", "Nose", "Hair"];
    var randomAdjectives = ["Smelly", "Boring", "Stupid"];
    var randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];
    // Join all the random strings into a sentence:
    var randomString = "Your " + pickRandomWord(randomBodyParts) +
    " is like a " + pickRandomWord(randomAdjectives) +
    " " + pickRandomWord(randomWords) + "!!!";
    return randomString;
    };

    var pickRandomWord = function (words) {
        return words[Math.floor(Math.random() * words.length)];
    };
    alert(generateRandomInsult());
    alert(generateRandomInsult());
    alert(generateRandomInsult());