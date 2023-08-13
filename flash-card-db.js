const card1A = new FlashCard();
card1A.comparatorID = 1;
card1A.contentType = "pic";
card1A.htmlCode = `<img class="flash-card" src="/images/apple.png">`

const card1B = new FlashCard();
card1B.comparatorID = 1;
card1B.contentType = "text";
card1B.htmlCode = "una manzana";

const card2A = new FlashCard();
card2A.comparatorID = 2;
card2A.contentType = "pic";
card2A.htmlCode = `<img class="flash-card" src="/images/black-beans.png">`

const card2B= new FlashCard();
card2B.comparatorID = 2;
card2B.contentType  = "text";
card2B.htmlCode = "frijoles negros"

//card 3
const card3A = new FlashCard();
card3A.comparatorID = 3;
card3A.contentType = "pic";
card3A.htmlCode = `<img class="flash-card" src="/images/car.png">`

const card3B= new FlashCard();
card3B.comparatorID = 3;
card3B.contentType  = "text";
card3B.htmlCode = "un coche"




const flashCardsDb = [card1A, card1B, card2A, card2B, card3A, card3B];
