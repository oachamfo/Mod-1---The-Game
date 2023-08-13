function checkForMatch(){
if (flashCardsArray[firstClickIndex].comparatorID == flashCardsArray[secondClickIndex].comparatorID){
    outcomeMessageOfLatestClickPair ="Great! You matched.";
    provideStats();
}
 else{
   numberOfStrikes++; //increment numberOfStrikes
   outcomeMessageOfLatestClickPair = "Sorry! You did not match.";
   provideStats();
}
clickNumber = 0; //reset clickNumber
checkIfTimeForNextPlayer();
}