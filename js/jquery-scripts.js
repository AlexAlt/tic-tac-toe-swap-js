$(document).ready(function(){

  var game = new Game();

  $(".space").each(function() {
    $(this).click(function(event){
      var space_id = this.id;
      game.gameAction(game.gameBoard.spaces[space_id]);
      $(this).append(game.gameBoard.spaces[space_id].occupiedBy);
      $(this).off()
      $("#info_bar").append("Player:" + game.turnCounter + ", Move: " + game.gameBoard.spaces[space_id].occupiedBy + game.winCheck())

      if (game.winCheck() === true) {
        $("#game_status").text("You won " + Player + "!");
        $("#playerX").text("");
        $("#playerO").text("");
        $(".space").off();
      }

      Player = "PlayerX";
      if (game.turnCounter === -1 && game.winCheck() == false){
        Player = "PlayerO";
        $("#playerO").text("O's turn!");
        $("#playerX").text("");
      } else if(game.turnCounter === 1 && game.winCheck() == false){
        $("#playerX").text("X's turn!");
        $("#playerO").text("");
      } else {}



    });
  });
});
