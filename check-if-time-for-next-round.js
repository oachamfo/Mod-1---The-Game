function checkIfTimeForNextRound(){
    //if last player in players array completes clicking on cards, then time for a new round 
    if(numberOfCardClicks==numberOfCards && playersArray.length-1==currentPlayerIndex){
        roundNumber++ //increment roundNumber
        if(isGameOver==false){
        nextPlayer(); //next player takes turn; next round is essentially next player        
        }
    }
}