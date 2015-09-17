// ###############################################
// ###############__ Player-Class__###############
// ###############################################
describe("#player", function() {
  it("will create player object and return name", function() {
    var testPlayer = new Player("Ronaldo");
    expect(testPlayer.name).to.equal("Ronaldo");
  });

  it("will create player object and return player-type (x or o)", function() {
    var testPlayer = new Player("Ronaldo", "x");
    expect(testPlayer.player_type).to.equal("x");
  });
});


// ###############################################
// ###############__ Space-Class__################
// ###############################################
describe("#space", function() {
  it("will create space object and return coordinates", function() {
    var testSpace = new Space([0,0]);
    expect(testSpace.coordinates).to.eql([0,0]);
  });

  it("will create space object, assign and return coords + occupiedBy", function() {
    var testSpace = new Space([0,0]);
    var testPlayer = new Player("Ronaldo", "x");
    testSpace.occupy(testPlayer.player_type);
    expect(testSpace.occupiedBy).to.eql("x");
  });
});


// ###############################################
// ###############__ Board-Class__################
// ###############################################
describe("#board", function() {
  it("will create the board object consisting of 9 spaces and return coordinates for one", function() {
    var testBoard = new Board();
    testBoard.populate();
    expect(testBoard.spaces[2].coordinates).to.eql([2,0]);
  });

  it("will create the board object consisting of 9 spaces and return coordinates for another one", function() {
    var testBoard = new Board();
    testBoard.populate();
    expect(testBoard.spaces[8].coordinates).to.eql([2,2]);
  });

  it("will create the board object consisting of 9 spaces , mand return null for the player-typen of an un-occupied field", function() {
    var testBoard = new Board();
    testBoard.populate();
    expect(testBoard.spaces[5].occupiedBy).to.eql(null);
  });

  it("will create the board object consisting of 9 spaces , mark one field for player 'x' and return his player_type", function() {
    var testBoard = new Board();
    testBoard.populate();
    var testPlayer = new Player("Ronaldo", "x");
    testBoard.spaces[5].occupy(testPlayer.player_type);
    expect(testBoard.spaces[5].occupiedBy).to.eql("x");
  });

    it("will create the board object consisting of 9 spaces , mark one field for player 'x' and will not mark it again for player 'o'", function() {
      var testBoard = new Board();
      testBoard.populate();
      var testPlayer = new Player("Ronaldo", "x");
      testBoard.spaces[5].occupy(testPlayer.player_type);
      var testPlayer2 = new Player("Ronalda", "o");
      testBoard.spaces[5].occupy(testPlayer2.player_type);
      expect(testBoard.spaces[5].occupiedBy).to.eql("x");
  });
});


// ###############################################
// ###############__ Game-Class__#################
// ###############################################
describe("#game", function() {
  it("will return the initial turn of player x", function() {
    var testGame = new Game();
    expect(testGame.turnCounter).to.eql(1);
  });

  it("will return the turn of the second round as the one of player o", function() {
    var testGame = new Game();
    testGame.changeTurn();
    expect(testGame.turnCounter).to.eql(-1);
  });

  it("will mark a space on first turn for playerX", function() {
    var testGame = new Game();
    testGame.mark(testGame.gameBoard.spaces[0])
    expect(testGame.gameBoard.spaces[0].occupiedBy).to.eql("x");
  });

  it("will mark a space on second turn for playerO", function() {
    var testGame = new Game();
    testGame.changeTurn();
    testGame.mark(testGame.gameBoard.spaces[0]);
    expect(testGame.gameBoard.spaces[0].occupiedBy).to.eql("o");
  });

  it("will call an action on a space, changing turn, marking space", function() {
    var testGame = new Game();
    testGame.gameAction(testGame.gameBoard.spaces[5]);
    expect(testGame.gameBoard.spaces[5].occupiedBy).to.eql("x");
    expect(testGame.turnCounter).to.equal(-1);
  });

  it("will return a win for playerX if win by row", function() {
    var testGame = new Game();
    testGame.gameBoard.spaces[0].occupy(testGame.playerX.player_type);
    testGame.gameBoard.spaces[1].occupy(testGame.playerX.player_type);
    testGame.gameBoard.spaces[2].occupy(testGame.playerX.player_type);
    expect(testGame.winCheck()).to.eql(true);
  });

  it("will not return a win for playerX if no row is marked for him", function() {
    var testGame = new Game();
    expect(testGame.winCheck()).to.eql(false);
  });

  it("will return a win for playerX if win by column", function() {
    var testGame = new Game();
    testGame.gameBoard.spaces[1].occupy(testGame.playerX.player_type);
    testGame.gameBoard.spaces[4].occupy(testGame.playerX.player_type);
    testGame.gameBoard.spaces[7].occupy(testGame.playerX.player_type);
    expect(testGame.winCheck()).to.eql(true);
  });

  it("will return a win for playerO if win by column", function() {
    var testGame = new Game();
    testGame.gameBoard.spaces[1].occupy(testGame.playerO.player_type);
    testGame.gameBoard.spaces[4].occupy(testGame.playerO.player_type);
    testGame.gameBoard.spaces[7].occupy(testGame.playerO.player_type);
    expect(testGame.winCheck()).to.eql(true);
  });

  it("will return a win for playerO if win by diagonal to lower right", function() {
    var testGame = new Game();
    testGame.gameBoard.spaces[0].occupy(testGame.playerO.player_type);
    testGame.gameBoard.spaces[4].occupy(testGame.playerO.player_type);
    testGame.gameBoard.spaces[8].occupy(testGame.playerO.player_type);
    expect(testGame.winCheck()).to.eql(true);
  });

  it("will return a win for playerO if win by diagonal to upper right", function() {
    var testGame = new Game();
    testGame.gameBoard.spaces[2].occupy(testGame.playerO.player_type);
    testGame.gameBoard.spaces[4].occupy(testGame.playerO.player_type);
    testGame.gameBoard.spaces[6].occupy(testGame.playerO.player_type);
    expect(testGame.winCheck()).to.eql(true);
  });

  it("will not return a win for playerO if diagonal to upper right is incomplete", function() {
    var testGame = new Game();
    testGame.gameBoard.spaces[2].occupy(testGame.playerO.player_type);
    testGame.gameBoard.spaces[4].occupy(testGame.playerX.player_type);
    testGame.gameBoard.spaces[6].occupy(testGame.playerO.player_type);
    expect(testGame.winCheck()).to.eql(false);
  });

  it("will not return a win for playerO if one in diagonal to upper right is not occupied", function() {
    var testGame = new Game();
    testGame.gameBoard.spaces[2].occupy(testGame.playerO.player_type);
    testGame.gameBoard.spaces[6].occupy(testGame.playerO.player_type);
    expect(testGame.winCheck()).to.eql(false);
  });

 it("will allow a user to play against the computer", function() {
   var testGame =  new Game();
   testGame.computerGame();
   expect(testGame.playerO.name()).to.equal("computer");
 });

});
