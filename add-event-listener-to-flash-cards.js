function addEventListenerToFlashCards(){
    let childrenDivs = gridContentArea.children; //returns HTML collection
    length = childrenDivs.length;
    
    for(i=0; i<length; i++){
        let childDiv = childrenDivs[i];
        childDiv.classList.add('index'+i);   
        childDiv.addEventListener('click', function(e){
            //make element unclickable to prevent the same flash card from being selected twice
            e.target.style.pointerEvents = "none";
            
            if (clickNumber<2){
            childDiv.style.border = "dotted";
           // length = childrenDivs.length;
            for(i=0; i<length; i++){
                if(e.target.classList.contains('index'+i)){
            let object = flashCardsArray[i];
            
            if(clickNumber==0){
                firstClickIndex = i;
            }else{secondClickIndex = i;}

            if(object===undefined){
                
            }else{
                e.target.innerHTML = object.htmlCode;
            }  //closing for else that follows inner if
            } //closing for outer if
            }//closing for for loop
        }
        if (clickNumber==1){
            //check for match
            checkForMatch();
        }else{
            clickNumber++;
        }
        }); //event listener closing
    }
}