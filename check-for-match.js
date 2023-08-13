function checkForMatch(){
if (flashCardsArray[firstClickIndex].comparatorID == flashCardsArray[secondClickIndex].comparatorID){
    playersArray[currentPlayerIndex].score +=2;
    outcomeMessageOfLatestClickPair ="Great! You matched.";
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