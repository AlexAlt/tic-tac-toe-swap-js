$(document).ready(function(){


  var game = new Game();
  $(".space").each(function() {
    $(this).click(function(event){
      var space_id = this.id;
      // debugger;
      game.gameAction(game.gameBoard.spaces[space_id]);
      $(this).append(game.gameBoard.spaces[space_id].occupiedBy);
      $("#info_bar").append("Player:" + game.turnCounter + ", Move: " + game.gameBoard.spaces[space_id].occupiedBy)
    });
  });
});
