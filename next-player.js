function nextPlayer(){
if (currentPlayerIndex == 0){
    currentPlayerIndex = 1;
}else{
    currentPlayerIndex = 0;
}
numberOfCardClicks=0; //must be initialized to 0
numberOfStrikes=0; //must be initialized to 0
clickNumber=0; //must be initialized to 0; range of value will be either 0 or 1
let firstClickIndex; //index of flashCardsArray
let secondClickIndex; //index of flashCardsArray
flashCardsDbCopy = [];
flashCardsDbCopy = [...flashCardsDb]; //use spread operator to copy flashCardsDb;
flashCardsArray = [];

createChildrenDivs(numberOfCards);
setFlashCardsArray();
addEventListenerToFlashCards();
provideStats();   
}