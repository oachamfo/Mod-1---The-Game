//declare globals
let numberOfCards = 100;

function createChildrenDivs (numberOfCards){
 let gridContentArea = document.querySelector('#gridContentArea');   
    for(i=1; i<=numberOfCards; i++){
        let childDiv = document.createElement("div");
        childDiv.innerText = 'Div '+ i;
        gridContentArea.appendChild(childDiv);
    }
}
createChildrenDivs(numberOfCards);