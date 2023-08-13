function clearGrid(){
    let childrenDivs = gridContentArea.children; //returns HTML collection
     length = flashCardsArray.length;
     for(i=0; i<length; i++){
         let childDiv = childrenDivs[i];
         let object = flashCardsArray[i];
         childDiv.innerHTML = "";
 
     }   
}