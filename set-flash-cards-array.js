function setFlashCardsArray(){
    flashCardsArray = [];
    let length = flashCardsDb.length;
    for(i=0; i<length; i++){
    
     let randomInt = Math.floor(Math.random() * ((flashCardsDbCopy.length) - 1 + 1) + 1);
     let randomIndex = randomInt - 1;    
    
     flashCardsArray.push(flashCardsDbCopy[randomIndex]);
     flashCardsDbCopy.splice(randomIndex, 1);
    }
    
}
