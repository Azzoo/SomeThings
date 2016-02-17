var values = [];

for (var i = 0; i < 7; i++)
    for(var j = 0; j < 7; j++)
        values[i, j] = parseInt(Math.random()*10);

var results = findNeighbors(4, 1);

function findNeighbors(cells, col, row, value){
    var checked = {};
    var results = [];
    function lookRecursively(col, row){
        //Used to prevent checking cells already verified
        if (checked[col + "_" + row]) return;
        results.push([col, row]);
        //Store checking fact
        checked[col + "_" + row] = true;
        if (col > 0 && values[col - 1, row] == value)
            lookRecursively(col-1, row);
        if (col < 6 && values[col + 1, row] == value)
            lookRecursively(col+1, row);
        if (row > 0 && values[col, row - 1] == value)
            lookRecursively(col, row - 1);
        if (row < 6 && values[col, row + 1] == value)
            lookRecursively(col, row + 1);
    }
    lookRecursively(col, row);
    return results;
}