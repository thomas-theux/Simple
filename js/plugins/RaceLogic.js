//=============================================================================
// RaceLogic.js
// Version: 1.00
// License: Public Domain or CC0
//=============================================================================
/*:
 * @plugindesc Implements the drafting of Racers
 * @author Logan
 *
 * @help No help needed.
 */

RaceLogic = Game_Interpreter.prototype.pluginCommand;
var _raceLogic = new RaceLogic();

Game_Interpreter.prototype.pluginCommand = function(command, args) {
    RaceLogic.call(this, command, args);

    switch(command) {
        case 'RaceLogic.init':
            _raceLogic.init();
            _raceLogic.regenerateChoicesRoutine();
            break;
        case 'RaceLogic.showChoices':
            _raceLogic.showChoices();
    }
};

RaceLogic.prototype.init = function() {
    this.characters = [
        'Mister Blob',
        'Douchebag',
        'Dr. Pylon',
        'Scheiß Huhn'
    ];

    this.choiceStates = [true, true, true, true];
    this.charactersBetOn = [false, false, false, false];
    this.playerBets = [false, false, false, false];
    this.players = [];
    this.choices = [];
    this.currentPlayer = 0;

    var playerCount = $gameVariables.value(67);

    for(var i = 0; i < playerCount; i++) {
        this.players.push(i + 1);
    }

    this.shufflePlayers();
}

RaceLogic.prototype.regenerateChoicesRoutine = function() {
    this.generateListOfChoices();
    this.selectNextPlayer();
}

RaceLogic.prototype.generateListOfChoices = function() {
    this.choices = [];

    for(var i = 0; i < this.choiceStates.length; i++) {
        this.generateChoice(i);
    }
}

RaceLogic.prototype.generateChoice = function(index) {
    if(this.choiceStates[index]) {
        var yPos = 282 + index * 96;
        this.choices.push(this.characters[index] + '<p:P' + this.players[this.currentPlayer] + 'Bet-Small,24,' + yPos + '>');
    }
}

RaceLogic.prototype.selectNextPlayer = function() {
    this.currentPlayer++;
}

RaceLogic.prototype.shufflePlayers = function() {
    this.players = this.shuffleArray(this.players);
}

RaceLogic.prototype.shuffleArray = function(arr) {
    var shuffledArray = arr;

    var j, x, i;
    for (i = shuffledArray.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = shuffledArray[i];
        shuffledArray[i] = shuffledArray[j];
        shuffledArray[j] = x;
    }

    return shuffledArray;
}

RaceLogic.prototype.showChoices = function() {
    var self = this;

    $gameMessage._choiceCallback = function(selectedChoice) {
        self.choiceCallback(selectedChoice, self);
    };
    $gameMessage.setChoices(this.choices, 0);
}

RaceLogic.prototype.choiceCallback = function(selectedCharacter, self) {
    $gameVariables.setValue(77, $gameVariables.value(77) + 1); //increment current player
    self.betOnCharacterWithPlayer($gameVariables.value(77), selectedCharacter);

    self.regenerateChoicesRoutine();
}

RaceLogic.prototype.betOnCharacterWithPlayer = function(player, character) {
    var characterIndex = this.getActiveCharacterByIndex(character);
    this.choiceStates[characterIndex] = false;
    this.playerBets[characterIndex] = this.players[player - 1]; //$gameVariables(77) starts at 1
}

RaceLogic.prototype.getActiveCharacterByIndex = function(index) {
    var activeCharacters = [];

    for(var i = 0; i < this.choiceStates.length; i++) {
        if(this.choiceStates[i] === true) {
            activeCharacters.push(i);
        }
    }

    return activeCharacters[index];
}
