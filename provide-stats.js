//provide game stats, which will go in #right-nav div
function provideStats(){
    rightDiv.innerHTML =""; //clear rightDiv
    let childHeading = document.createElement('h2');
    childHeading.innerText = "Player: "+playersArray[currentPlayerIndex].name;
    rightDiv.appendChild(childHeading);

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