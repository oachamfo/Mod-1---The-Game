function provideStats(){
//provide game stats, which will go in #right-nav div
    
    //if statement added to make sure a roundNumber that
    //is larger than maxNumOfRounds will not be displayed
    //this will be the stats displayed while game has not ended
    if(roundNumber<=maxNumOfRounds){
    rightDiv.innerHTML =""; //clear rightDiv
    let childHeading = document.createElement('h2');
    childHeading.innerText = "Player: "+playersArray[currentPlayerIndex].name;
    rightDiv.appendChild(childHeading);

    let childHeading4 = document.createElement('h2');
    childHeading4.innerText = "Score: "+playersArray[currentPlayerIndex].score;
    rightDiv.appendChild(childHeading4);

  
    let childHeading1 = document.createElement('h2');
    childHeading1.innerText = "Round: "+roundNumber;
    rightDiv.appendChild(childHeading1);
    

    let childHeading2 = document.createElement('h2');
    childHeading2.innerText = "Strikes: "+numberOfStrikes+"/"+ maxNumOfStrikes;
    rightDiv.appendChild(childHeading2);
  
    let childHeading3 = document.createElement('h2');
    childHeading3.innerText = outcomeMessageOfLatestClickPair;
    rightDiv.appendChild(childHeading3);
    } 
}