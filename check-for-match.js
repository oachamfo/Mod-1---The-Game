function checkForMatch(){
if (flashCardsArray[firstClickIndex].comparatorID == flashCardsArray[secondClickIndex].comparatorID){
    outcomeMessageOfLatestClickPair ="Great! You matched.";
    playersArray[currentPlayerIndex].score +=2;
    provideStats();
}
 else{
   numberOfStrikes++; //increment numberOfStrikes
   outcomeMessageOfLatestClickPair = "Sorry! You did not match.";
   provideStats();
}
clickNumber = 0; //reset clickNumber
checkIfTimeForNextRound();
checkIfTimeForNextPlayer();
}