//declare globals
let numberOfCards; // use setNumberOfCards() to initialize
let roundNumber;
let checkIfCardsMatch = false; //must be initialized to false for logic to work




//check to make sure numberOfCards is even
function setNumberOfCards(num){
    //if no argument then default number is 10
    if(num == undefined || num == 0 || num == null || num<4){
        numberOfCards = 4;
        return
    }//else if argument is even, then number of cards equals argument
    else if (num%2==0){
        numberOfCards = num;
        return;
    }//else if argument is odd, then add 1
    else{
        numberOfCards = num + 1;
    }
    setNumberOfCards(numberOfCards); //use recursion to validate numberOfCards
}

function setCheckIfCardsMatch(){
    checkIfCardsMatch = !(checkIfCardsMatch);
}

//function calls
setNumberOfCards(10);
createChildrenDivs(numberOfCards);