module.exports = function solveSudoku(matrix) {
  for (var row = 0; row < 9; row++) {
    for (var col = 0; col < 9; col++) {
      if (matrix[row][col] === 0) {
        var array = [];

        //little square
        for (var i = 0; i < 9; i ++) {
          array.push(matrix[i][col]);
          array.push(matrix[row][i]);
          var smallRow = Math.floor(row / 3) * 3;
          var smallCol = Math.floor(col / 3) * 3;
          var squareNumbers = matrix[smallRow + i % 3][smallCol + Math.floor(i / 3)];
          array.push(squareNumbers);
        }


        var excessNumber = [];
        var all = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        for (var c = 0; c < all.length; c++) {
          if (array.indexOf(all[c]) < 0) {
            excessNumber.push(all[c]); 
          }
        }

        for (var d = 0; d < excessNumber.length; d++) {
          matrix[row][col] = excessNumber[d];
          var solved = solveSudoku(matrix);
          if (solved !== false) {
          return solved;
          }
        }
        matrix[row][col] = 0;
        return false; 
      }
    }
  }
  return matrix;
}
