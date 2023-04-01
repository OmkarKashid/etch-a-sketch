function createRows(totalRows){
    let rowsHtml = "";
    for(let i = 1; i <= totalRows; i++){
        rowsHtml += `<div id="row${i}" class="div-row"></div>`;
    }
    document.querySelector("#grid").innerHTML = rowsHtml;
}

function createSquares(totalSquaresRow){
    const rows = document.querySelectorAll(".div-row");
    let squareNo = 1 ;
    rows.forEach(row => {
        let squaresHtml = "";
        for(let i = 1; i <= totalSquaresRow; i++){
            squaresHtml += `<div id="square${squareNo}" class="div-square"></div>`;
            squareNo++;
        }
        row.innerHTML =  squaresHtml;
    });
}

function changeSquareColor(event){
    const squareId = event.target.id;
    const square = document.querySelector(`#${squareId}`);
    square.classList.add("hover");

}
const totalRows = 16;
const totalSquaresRow = 16;
createRows(totalRows);
createSquares(totalSquaresRow);
const squares = document.querySelectorAll(".div-square");
const squaresArray = [...squares];
squaresArray.forEach(square => {
    square.addEventListener("mouseover", (event) => changeSquareColor(event));
});
console.log("end");
