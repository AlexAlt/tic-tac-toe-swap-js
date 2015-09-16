// ###############################################
// ###############__ Player-Class__###############
// ###############################################
function Player(name, player_type) {
  this.name = name;
  this.player_type = player_type;
}


// ###############################################
// ###############__ Space-Class__################
// ###############################################
function Space(coordinates) {
  this.occupiedBy = null;
  this.coordinates = coordinates;
}

Space.prototype.occupy = function(markedType) {
  if (this.occupiedBy === null){
    this.occupiedBy = markedType;
  }
}


// ###############################################
// ###############__ Board-Class__################
// ###############################################
function Board() {
  this.spaces = [];
}

Board.prototype.populate = function(){
  var Space0 = new Space([0,0]);
  this.spaces.push(Space0);
  var Space1 = new Space([1,0]);
  this.spaces.push(Space1);
  var Space2 = new Space([2,0]);
  this.spaces.push(Space2);
  var Space3 = new Space([0,1]);
  this.spaces.push(Space3);
  var Space4 = new Space([1,1]);
  this.spaces.push(Space4);
  var Space5 = new Space([2,1]);
  this.spaces.push(Space5);
  var Space6 = new Space([0,2]);
  this.spaces.push(Space6);
  var Space7 = new Space([1,2]);
  this.spaces.push(Space7);
  var Space8 = new Space([2,2]);
  this.spaces.push(Space8);
}

// ###############################################
// ###############__ Game-Class__################
// ###############################################
function Game() {
  this.gameBoard = new Board();
  this.gameBoard.populate();
  this.playerX = new Player("playerX", "x");
  this.playerO = new Player("playerO", "o");
  this.turnCounter = 1;
}


Game.prototype.gameAction = function(whichSpace){
  var whichSpace = whichSpace;
  this.mark(whichSpace);
  this.changeTurn();
}

Game.prototype.changeTurn = function(){
  this.turnCounter = this.turnCounter * -1;
  return this.turnCounter;
}

Game.prototype.mark = function(whichSpace){
  var markType = "";
  if (this.turnCounter === 1) {
    var markType = "x";
  } else {
    var markType = "o";
  }
  whichSpace.occupy(markType);

}
