//declare data types of global scope
let roundNumber=1; //must be initialized to 1
let maxNumOfRounds=3; //must be initialized
let numberOfCards;  //call setNumberOfCards() to initialize
let numberOfCardClicks=0; //must be initialized to 0
let numberOfStrikes=0; //must be initialized to 0
let maxNumOfStrikes=3; //number of strikes allowed; must be initialized
let clickNumber=0; //must be initialized to 0; range of value will be either 0 or 1
let firstClickIndex; //index of flashCardsArray
let secondClickIndex; //index of flashCardsArray
let currentPlayerIndex = 0; //index of playersArray


//strings
let outcomeMessageOfLatestClickPair ="";

//querySelector()
const flexContainer = document.querySelector('.flex-container');
const leftDiv = document.querySelector('#left-nav'); 
const gridContentArea = document.querySelector('#grid-content-area');   
const rightDiv = document.querySelector('#right-nav');


//data structures of global scope
let flashCardsDbCopy = [...flashCardsDb]; //use spread operator to copy flashCardsDb;
let flashCardsArray = [];
let playersArray = [];



//function calls
setPlayersArray(); //create players
setNumberOfCards(6); //number of cards
createChildrenDivs(numberOfCards); //create cards on screen
provideStats();
setFlashCardsArray();
addEventListenerToFlashCards();
//fillChildrenDivsWithFlashCards();
