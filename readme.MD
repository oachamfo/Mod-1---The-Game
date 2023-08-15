# About Project
    ## Title
    Title: Mod 1 - The Game: SpanishVocab CSS Grid
    DOM manipulations can create interactive GUI applications and games using JavaScript.
    This game demonstrates manipulation of the DOM and how DOM manipulation is used in JavaScript game development. The default mode of the game is a guessing game. A player is shown an empty grid. A player makes a first click on a box (also called a flash card). The player is shown either a picture or text. The player must guess and make a second click on another box that will show a corresponding picture or text. If the player guesses appropriately, a match is found. If not, the player gets a strike.
    The game can be modified by calling functions that can make the game a memory game. In the memory variation, the player will have x seconds to memorize the items on a grid. The player will then have to
    recall the grid and click on the grid in such a way that the second click is a pair of the first click.
    
    ## Motivation
    This project was built as a requirement for a PerScholas software engineering cohort.
    Students were give a week for completion. Per project specifications, game had to meet
    the following:
        1. Be two player: either player and computer or two manual players
        2. Have a win state
        3. Have a lose state
        4. A way to keep playing until the game is over
        5. Mutiple rounds   
    The motivation is the application of DOM manipulation using JavaScript
    to make an interactive game that aims to improve acquisition 
    of second language vocabulary through the use of matching pictures to written text. 
    Players take turn. In each turn, a player clicks on two boxes. 
    The order in which the cards are clicked, whether picture first or written text first 
    is irrelevant. If the two cards the player clicked match, the player scores points.
    If a player does not get a match, the player gets a strike. The maximum number 
    of strikes is by default three. After a player clicks on all cards or a player 
    strikes out, whichever comes first, the next player takes turn. A round is completed 
    when all players have taken a turn. The player with the most points after three 
    rounds wins the game. All other players lose. Although the game is by default two players,
    the code is written so that it can be scaled to add more players by adding 
    players to the array of players.

    ## Built With
    The technologies used are HTML, CSS, and JavaScript. Both CSS Grid and CSS Flexbox were used. CSS Grid was used to layout the grid that the player will click on. However, CSS Flexbox was used for the overall layout of the page such as header, body, and footer. Flexbox housed the Grid.

# How To Use Code Base
The code base of this project can be used as the basis for a memory game. The grid can be expanded and players can be given x seconds to memorize the items on the grid. The grid can then be cleared. The player will then have to, from recall, click on the grid in such a way that the second click must be the homologue for the first click. After a player clicks on a box, the content that was there before the grid was cleared 
will be displayed. The player continues to click in pairs until all the boxes have been clicked or a player strikes out. A player gets a strike when a click pair results is not a homologue. Sound may also be added to provide native level pronunciation in the case of the code being used for second language learning. Other improvements could include giving the user the ability to make and save lists of words to include on the grid, and the ability for users to share lists and scores on social media platforms.

# Recommended Strategy To Play Game
Play the game a few times to find out the minimum number of pairs that you can comfortably remember. And then aim to remember one more pair until it becomes comfortable.

# Installation
No special installation instructions. No backend DB to set up. Just deploy as one would a website.

# License
MIT (c) Owusuduah Achamfour

# Link to Game
https://oachamfo.github.io/Mod-1---The-Game/