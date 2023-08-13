function checkIfTimeForNextPlayer(){
    if(numberOfStrikes==maxNumOfStrikes || numberOfCardClicks == numberOfCards){
        nextPlayer();
    }else{
        return;
    }
}