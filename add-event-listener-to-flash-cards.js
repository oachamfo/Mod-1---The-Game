function addEventListenerToFlashCards(){
    let childrenDivs = gridContentArea.children; //returns HTML collection
   //console.log(flashCardsArray);
    length = childrenDivs.length;
    for(i=0; i<length; i++){
        let childDiv = childrenDivs[i];
        childDiv.addEventListener('click', function(){
            childDiv.style.border = "dotted";
            
        }); //event listener closing
    }
}