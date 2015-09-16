# Tic Tac Toe

##### Web app to play Tic-Tac-Toe, latest revision 15 September 2015

#### By **Christoph Pirringer & Clayton Easterbrooks**

## Description

The app creates a Player-, Space-, Board- and Game-class.  
The Player-class contains the player_type property, x or o.

The Space-class contains the occupiedBy attribute, which is set when Player clicks on a space to the current player_type. Also, it contains the coordinates of the space, which as of now have no functionality attached.  

The Board-class contains a spaces-array of the 9 spaces making up the game-board.  

The Game-class, on loading the page, creates a new game, new board, populates the board with spaces, creates two players and sets the turnCounter to 1. The turnCounter switches between -1 and 1 each turn to differentiate the active player.

The gameAction function of the Game-class is called when a space is clicked. It calls on the mark-function, which in turn calls on the occupy-function to mark the space for the active player. Next, the changeTurn function switches the turnCounter to change the active Player. An X or O is inserted into the space to indicate the move, and the click-listener is removed from the space so it can not be marked again. The game then checks to see if someone has won with the winCheck method. If so, it removes all click listeners, and displays a win message.

The top bar contains 3 divisions. The two divs on the ends show whose turn it is. The center div shows the game status: in-progress, or won. Tie conditions have not been implemented.



## Setup

* Clone repo locally
* Run TicTacToe.html
* ?Profit

## Technologies Used
This app uses JavaScript and jQuery. Mocha and Chai were used for testing.


### Legal



Copyright (c) 2015 **Cristoph Pirringer & Clayton Easterbrooks**

This software is licensed under the MIT license.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
