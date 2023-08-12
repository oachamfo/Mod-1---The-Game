//declare globals
let numberOfCards;  //call setNumberOfCards() to initialize
let roundNumber;
let maxNumOfStrikes = 3; //number of strikes allowed
let clickNumber = 0; //will be either 1 or 2


const leftDiv = document.querySelector('#left-nav'); 
const gridContentArea = document.querySelector('#grid-content-area');   
const rightDiv = document.querySelector('#right-nav');


let currentPlayer = 0; //index of playersArra
let flashCardsDbCopy = [...flashCardsDb]; //use spread operator to copy flashCardsDb;
let flashCardsArray;




//function calls
setNumberOfCards(32);
createChildrenDivs(numberOfCards);
provideStats();
setFlashCardsArray();
//fillChildrenDivsWithFlashCards();
addEventListenerToFlashCards();