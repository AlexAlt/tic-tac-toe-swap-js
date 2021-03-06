$(document).ready(function(){
  $(".container").hide();


  $("#friend").click(function(event){
    $(".container").fadeIn(1400);
    $(".btn").hide();

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


  $("#computer").click(function(event){
    $(".container").fadeIn(1400);
    $(".btn").hide();

    var game = new Game();
    game.computerGame();

    $(".space").each(function() {

      $(this).click(function(event){
        var space_id = this.id;
        game.gameAction(game.gameBoard.spaces[space_id]);
        $(this).append(game.gameBoard.spaces[space_id].occupiedBy);
        $(this).off();
        game.clickedSpaces.push(parseInt(this.id));



        if (game.turnCounter === -1) {
          var space_id = game.randomSpace();
          debugger;
          if (space_id || space_id >= 0){
            $("#" + space_id.toString()).append("<img src= 'css/images/ghost2.jpg' style= 'height: 85px; width: 85px;'>");
            $("#" + space_id.toString()).off();
          }
        }

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


});
