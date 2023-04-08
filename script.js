/* Function to create div rows */
function createRows(totalRows){
    let rowsHtml = "";
    for(let i = 1; i <= totalRows; i++){
        rowsHtml += `<div id="row${i}" class="div-row"></div>`;
    }
    document.querySelector("#grid").innerHTML = rowsHtml;
}

/* Function to create individual square divs */
function createSquares(totalSquaresRow){
    const rows = document.querySelectorAll(".div-row");
    let squareNo = 1 ;    //increasing counter for individual square id
    rows.forEach(row => {
        let squaresHtml = "";
        for(let i = 1; i <= totalSquaresRow; i++){
            squaresHtml += `<div id="square${squareNo}" class="div-square"></div>`;
            squareNo++;
        }
        row.innerHTML =  squaresHtml;
    });
}

/* Function for adding hover class to single square div */
function changeSquareColor(event){
    const squareId = event.target.id;
    const square = document.querySelector(`#${squareId}`);
    square.classList.add("hover");

}
function removeSquareColor(event){
    const squareId = event.target.id;
    const square = document.querySelector(`#${squareId}`);
    square.classList.remove("hover");
}
/* Function to resize Grid */
function resizeGrid(){
    let newRows = parseInt(prompt("Please write number of rows (Max 70)","16"));
    let newSquaresRow = parseInt(prompt("Please write number of squares per row (Max 70)", "16"));
    if(!Number.isInteger(newRows) || !Number.isInteger(newSquaresRow)) return ;
    if((newRows > 70) || (newSquaresRow >70)){
        newRows = 70;
        newSquaresRow = 70;
    }
    createGrid(newRows, newSquaresRow);
}
/* Function to create a new grid */
function createGrid(totalRows, totalSquaresRow){
    createRows(totalRows);
    createSquares(totalSquaresRow);
    const squares = document.querySelectorAll(".div-square");
    const squaresArray = [...squares];
    squaresArray.forEach(square => {
        square.addEventListener("mouseover", (event) => changeSquareColor(event)); //add function when muse hovers
    });
}
const totalRows = 16; //total div rows to be created
const totalSquaresRow = 16; //total squares per row to be created
createGrid(totalRows, totalSquaresRow);
const btnResize = document.querySelector("#btn_resize");
btnResize.addEventListener("click", e => resizeGrid());
const btnErase = document.querySelector("#btn_erase");
btnErase.addEventListener("click", e => removeSquareColor(e));

