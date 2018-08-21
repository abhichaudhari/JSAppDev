
var woolOwners = [
    {
        "master": 1
    },
    {
        "dame": 1
    },
    {
        "name": "little boy",
        "location": "down the lane"
    }
];

//var boy = Object.keys(woolOwners[2]);
//console.log(boy);
var littleBoy = woolOwners[2];
var littleBoyName = littleBoy.name;
var whereHeLives = littleBoy.location;

var haveYouAnyWool = function () {
    for (var i = 0; i < woolOwners.length; i++) {
        var totalBags = totalBags + i;
    }
    return (totalBags);
};

var bags = haveYouAnyWool();

function baabaaBlackSheep() {
    console.log("BaaBaa BlackSheep have you any wool?");
    if (bags > 0) {
        console.log("yes sir, yes sir " + bags + " bags full");
    }
}

function oneForMy() {
    for (var i = 0; i < 2; i++) {
        people = Object.keys(woolOwners[i]);
        var person = people.toString();
        console.log("one for my " + person);
    }
}

baabaaBlackSheep();
oneForMy();


console.log("one for the " + littleBoyName + " that lives " + whereHeLives);