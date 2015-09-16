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

  it("will create the board object consisting of 9 spaces , mark one field for player 'x' and return his player_type", function() {
    var testBoard = new Board();
    testBoard.populate();
    var testPlayer = new Player("Ronaldo", "x");
    testBoard.spaces[5].occupy(testPlayer.player_type);
    expect(testBoard.spaces[5].occupiedBy).to.eql("x");
  });



});
