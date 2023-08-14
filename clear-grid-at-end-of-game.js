async function clearGridAtEndOfGame(){
    await timeDelay(2);

    //turns HTML collection gridContentArea.children into array
    let childrenDivs = Array.from(gridContentArea.children); //turns HTML collection into array
    childrenDivs.forEach((element)=>{
        element.remove();
     })

}