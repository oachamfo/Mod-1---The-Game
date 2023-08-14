function setPlayersArray(){
    //player 1
    const player1 = new HumanPlayer();
    player1.name = "Player 1";
    player1.score = 0;

    //player 2
    const player2 = new HumanPlayer();
    player2.name = "Player 2";
    player2.score = 0;
    
    playersArray = [player1, player2];
}

