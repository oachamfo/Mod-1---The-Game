function checkForMatch(){
if (flashCardsArray[firstClickIndex].comparatorID == flashCardsArray[secondClickIndex].comparatorID){
    console.log('equality');
}else{
    console.log('not equal');
}
clickNumber = 0; //reset clickNumber
}