function checkIfTimeForNextPlayer(){
    if(numberOfStrikes==maxNumOfStrikes || numberOfCardClicks == numberOfCards){       
        //disable click funtionality if player strikes out
        //player can no longer click on remaining cards
        if (numberOfStrikes==maxNumOfStrikes){
            let disableCards = gridContentArea.querySelectorAll('.flash-card')
            length = disableCards.length;
            for (i=0; i<length; i++){
                disableCards[i].style.pointerEvents = "none";
            }
        }
        if(isGameOver==false){
        nextPlayer();}
    }else{
        return;
    }
}