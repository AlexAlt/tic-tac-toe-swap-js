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
        var clickedSpaces = [];

      $(this).click(function(event){
        var space_id = this.id;
        game.gameAction(game.gameBoard.spaces[space_id]);
        $(this).append(game.gameBoard.spaces[space_id].occupiedBy);
        $(this).off();
        clickedSpaces.push(this.id);
        $("#info_bar").append("Player:" + game.turnCounter + ", Move: " + game.gameBoard.spaces[space_id].occupiedBy + game.winCheck());

        if (game.turnCounter === -1) {
          var randomNumber = Math.floor(Math.random()* 8);
          do {
            space_id = randomNumber;
            game.gameAction(game.gameBoard.spaces[space_id]);
            $("#" + space_id.toString()).append(game.gameBoard.spaces[space_id].occupiedBy);
            $("#" + space_id.toString()).off();
            clickedSpaces.push(space_id);
          }while (clickedSpaces.indexOf(randomNumber) < 0);

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
