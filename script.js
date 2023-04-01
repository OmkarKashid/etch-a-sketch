function createRows(totalRows){
    let rowsHtml = "";
    for(let i = 1; i <= totalRows; i++){
        rowsHtml += `<div id="row${i}" class="div-row"></div>`;
    }
    document.querySelector("#grid").innerHTML = rowsHtml;
}

function createSquares(totalSquaresRow){
    const rows = document.querySelectorAll(".div-row");
    rows.forEach(row => {
        let squaresHtml = "";
        for(let i = 1; i <= totalSquaresRow; i++){
            squaresHtml += `<div id="square${i}" class="div-square"></div>`;
        }
        row.innerHTML =  squaresHtml;
    });
}

const totalRows = 16;
const totalSquaresRow = 16;
createRows(totalRows);
createSquares(totalSquaresRow);