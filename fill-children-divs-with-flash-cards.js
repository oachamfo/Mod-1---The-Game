function fillChildrenDivsWithFlashCards(){
    let childrenDivs = gridContentArea.children; //returns HTML collection
   //console.log(flashCardsArray);
    length = flashCardsArray.length;
    for(i=0; i<length; i++){
        let childDiv = childrenDivs[i];
       // console.log(childDiv);
        let object = flashCardsArray[i];
        childDiv.innerHTML = object.htmlCode;

    }   
}