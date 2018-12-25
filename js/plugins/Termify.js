Termify = Game_Interpreter.prototype.pluginCommand;
var _termification = new Termify();

var genre = [];
var topic = [];
var numberPlayers = [];
var graphicsType = [];
var sideScrollTypes = [];
var moreThanOne = [];

var whatType;
var graphicsTypeRandom;
var genreRandom;
var numberPlayersRandom;
var whatMode;
var topicRandom;

Game_Interpreter.prototype.pluginCommand = function(command, args) {
    Termify.call(this, command, args);

    switch(command) {
        case 'asSentence':
            getTerms();
            asSentence();
            break;
        case 'asList':
            getTerms();
            asList();
            break;
    }
};


function getTerms() {

// First we list all the genres
    genre = [
        "Horror",
        "Action",
        "Platformer",
        "Simulation",
        "Shooter",
        "Sports",
        "Adventure",
        "Beat 'em Up",
        "Music",
        "RPG",
        "Strategy",
        "Minigames",
        "Open World",
        "Shoot 'em Up",
        "Racing",
        "Boardgames",
        "Quiz"
    ];

    genreRandom = genre[Math.floor(Math.random()*genre.length)];

// The we add a topic
    topic = [
        "Space",
        "Underground",
        "Sea",
        "Underwater",
        "Fire",
        "Water",
        "Earth",
        "Wind",
        "Dogs",
        "Movies",
        "Dinosaurs",
        "Apocalypse",
        "War",
        "Medieval",
        "BBQ",
        "Fun",
        "Pizza"
    ];

    topicRandom = topic[Math.floor(Math.random()*topic.length)];

// Determine the number of players
    numberPlayers = [
        "1 Player",
        "2 Players",
        "3 Players",
        "4 Players",
        "5 Players",
        "6 Players and more",
        "1-2 Players",
        "1-3 Players",
        "1-4 Players",
        "1-5 Players",
        "2-3 Players",
        "2-4 Players",
        "2-5 Players",
        "3-4 Players",
        "3-5 Players",
        "4-5 Players",
    ];

    numberPlayersRandom = numberPlayers[Math.floor(Math.random()*numberPlayers.length)];

// Set a graphics style
    graphicsType = [
        "Side Scroller",
        "3D",
        "2D",
    ];

    graphicsTypeRandom = graphicsType[Math.floor(Math.random()*graphicsType.length)];

    // If the graphicsType is "Side Scroller" we need the subcategory
    if (graphicsTypeRandom == "Side Scroller") {
        sideScrollTypes = [
            "Horizontal",
            "Vertical",
            "Diagonal"
        ];
        whatType = sideScrollTypes[Math.floor(Math.random()*sideScrollTypes.length)] + " ";
    } else { whatType = ""; }
}

function asSentence() {
// If the number of players is bigger than One, we need another category for the game mode
    if (numberPlayersRandom !== "1 Player" ) {
        moreThanOne = [
            "Coop",
            "Versus"
        ];
        whatMode = "\\c[0]" + " with a " + "\\c[23]" + moreThanOne[Math.floor(Math.random()*moreThanOne.length)] + "\\c[0]" + " mode";
    } else { whatMode = ""; }

// And get the result
    $gameMessage.add(
        "Let's create a "
        + "\\c[7]"
        + whatType
        + graphicsTypeRandom + " "
        + "\\c[23]"
        + genreRandom
        + "\\c[0]"
        + " game for "
        + "\\c[23]"
        + numberPlayersRandom
        + whatMode
        + "\\c[0]"
        + "."
        + "\n"
        + "And the topic is "
        + "\\c[23]"
        + topicRandom
        + "\\c[0]"
        + "."
    );
}

function asList() {
// If the number of players is bigger than One, we need another category for the game mode
    if (numberPlayersRandom !== "1 Player" ) {
        moreThanOne = [
            "Coop",
            "Versus"
        ];
        whatMode = moreThanOne[Math.floor(Math.random()*moreThanOne.length)];
    } else { whatMode = ""; }

// And get the result
    $gameMessage.add(
        "\\c[0]" + "Type " + "\\c[23]" + whatType + graphicsTypeRandom + "\n" +
        "\\c[0]" + "Genre " + "\\c[23]" + genreRandom + "\n" +
        "\\c[0]" + "Player " + "\\c[23]" + numberPlayersRandom + "\n" +
        "\\c[0]" + "Mode " + "\\c[23]" + whatMode + "\n" +
        "\\c[0]" + "Topic " + "\\c[23]" + topicRandom
    );
}
