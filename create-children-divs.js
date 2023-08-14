//create children divs that will fill #grid-content-area
function createChildrenDivs (numberOfCards){ 
    //check to see if game is over
    if(roundNumber>=(maxNumOfRounds+1)){
        gameOver();

   }else{
    gridContentArea.innerHTML="";
        for(i=1; i<=numberOfCards; i++){
           let childDiv = document.createElement("div");
           childDiv.classList.add("flash-card")
           //childDiv.innerText = i;
           gridContentArea.appendChild(childDiv);
       }
   
       //set height of divs to 50% of their default value if only four cards
       if (numberOfCards==4){
           let childrenDivs = document.querySelectorAll(".flash-card")
           for (i=0; i<childrenDivs.length; i++){
           childrenDivs[i].style.height = "50%";
           }
       }
    }
    }
   