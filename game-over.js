async function gameOver(){
    isGameOver = true;

    /*clear gridContentArea*/
    clearGridAtEndOfGame();
    
    /*await timeDelay() is used to pause the execution of lines of code below.
    Without await timeDelay(), clearGridAtEndOfGame() and code down below will
    be executed synchronously, which leads to undesired results. The end of game
    stats will not be displayed. setTimeout could have been used, but all the
    numerous lines of code will be contained in a callback function or will have to be
    put in a separate function and then passed to setTimeout.
    */
    await timeDelay(2);

    /*write game over stats to gridContentArea*/
    gridContentArea.innerHTML = "<h2>Game Over</h2>";
   
    let gameOverChildHeading = document.createElement('h2');
    gameOverChildHeading.innerText = "Player 1 score: "+playersArray[0].score + " Player 2 score: "+playersArray[1].score
    gridContentArea.appendChild(gameOverChildHeading);

   if(playersArray[0].score > playersArray[1].score){
    let gameOverChildHeading1 = document.createElement('h2');
    gameOverChildHeading1.innerText = "Player 1 won!";
    gridContentArea.appendChild(gameOverChildHeading1);
   }else if(playersArray[0].score < playersArray[1].score){
    let gameOverChildHeading1 = document.createElement('h2');
    gameOverChildHeading1.innerText = "Player 2 won!";
    gridContentArea.appendChild(gameOverChildHeading1);
   }else{
    let gameOverChildHeading1 = document.createElement('h2');
    gameOverChildHeading1.innerText = "It's a draw!";
    gridContentArea.appendChild(gameOverChildHeading1);
 
   }
}