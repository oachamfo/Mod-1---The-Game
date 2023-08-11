//provide game stats, which will go in #right-nav div
function provideStats(){
    let childHeading = document.createElement('h2');
    childHeading.innerText = "Player: ";
    rightDiv.appendChild(childHeading);

    let childHeading1 = document.createElement('h2');
    childHeading1.innerText = "Round: ";
    rightDiv.appendChild(childHeading1);

    let childHeading2 = document.createElement('h2');
    childHeading2.innerText = "Strikes: ";
    rightDiv.appendChild(childHeading2);
   
}