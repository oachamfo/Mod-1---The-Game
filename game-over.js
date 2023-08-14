function gameOver(){

    //clear gridContentArea
    
    //gridContentArea.firstElementChild may substitute gridContentArea.lastElementChild
    let child = gridContentArea.lastElementChild; 
    while (child) {
        gridContentArea.removeChild(child);
        child = gridContentArea.lastElementChild;
    }
    
    while (gridContentArea.hasChildNodes()) {
        gridContentArea.removeChild(gridContentArea.firstChild);
      }

    let remainigFlashCards = document.querySelectorAll('.flash-card');
    while (child) {
        remainigFlashCards.removeChild(child);
        child = remainigFlashCards.lastElementChild;
    }

    while (rightDiv.hasChildNodes()) {
        rightDiv.removeChild(rightDiv.firstChild);
      }
     
    rightDiv.innerHTML = "";
    
    clearGrid();

    //write game over stats to gridContentArea
    gridContentArea.innerHTML = "<h1>Game Over</h1>";
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