async function clearGridAtEndOfGame(){
    await timeDelay(2);

    //turns HTML collection gridContentArea.children into array
    let gridContentAreaChildrenDivs = Array.from(gridContentArea.children); //turns HTML collection into array
    gridContentAreaChildrenDivs.forEach((element)=>{
        element.remove();
     })

     let rightDivChildren = Array.from(rightDiv.children);
     rightDivChildren.forEach((element)=>{
        element.remove();
     })

}