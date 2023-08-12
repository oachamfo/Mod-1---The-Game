function addEventListenerToFlashCards(){
    let childrenDivs = gridContentArea.children; //returns HTML collection
    length = childrenDivs.length;
    
    for(i=0; i<length; i++){
        let childDiv = childrenDivs[i];
        childDiv.classList.add('index'+i);   
        childDiv.addEventListener('click', function(e){
            childDiv.style.border = "dotted";  
           // length = childrenDivs.length;
            for(i=0; i<length; i++){
                if(e.target.classList.contains('index'+i)){
            let object = flashCardsArray[i];
            if(object===undefined){

            }else{
                e.target.innerHTML = object.htmlCode;
            }  //closing for else that follows inner if
            } //closing for outer if
            }
        }); //event listener closing
    }
}