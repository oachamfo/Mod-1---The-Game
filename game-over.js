function gameOver(){
    gridContentArea.innerHTML = "<h1>Game Over</h1>";
    let childHeading = document.createElement('h2');
    childHeading.innerText = "Player 1 score: "+playersArray[0].score + " Player 2 score: "+playersArray[1].score
    gridContentArea.appendChild(childHeading);

   if(playersArray[0].score > playersArray[1].score){
    let childHeading1 = document.createElement('h2');
    childHeading1.innerText = "Player 1 won!";
    gridContentArea.appendChild(childHeading1);
   }else if(playersArray[0].score < playersArray[1].score){
    let childHeading1 = document.createElement('h2');
    childHeading1.innerText = "Player 2 won!";
    gridContentArea.appendChild(childHeading1);
   }else{
    let childHeading1 = document.createElement('h2');
    childHeading1.innerText = "It's a draw!";
    gridContentArea.appendChild(childHeading1);
 

   }
}