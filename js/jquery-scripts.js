$(document).ready(function(){


  var game = new Game();
  $(".space").each(function() {
    $(this).click(function(event){
      var space_id = this.id;
      // debugger;
      game.gameAction(game.gameBoard.spaces[space_id]);
      $(this).append(game.gameBoard.spaces[space_id].occupiedBy);
      $(this).off()
      $("#info_bar").append("Player:" + game.turnCounter + ", Move: " + game.gameBoard.spaces[space_id].occupiedBy + game.winCheck())
// debugger;
      var Player = "PlayerO";
      if (game.turnCounter === -1){
        Player = "PlayerX";
        $("#playerX").text("X");
        $("#playerO").text("")
      } else {
        $("#playerO").text("O");
        $("#playerX").text("")
      }
      if (game.winCheck() === true) {
        $("#game_status").text("You won " + Player + "!");
      }

    });
  });
});
