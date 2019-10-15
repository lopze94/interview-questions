/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    const rows = board.length
    const cols = board[0].length
    const neighbors = [0, 1, -1]
    
    let row, col
    for(row = 0; row < rows; row++)
        for(col = 0; col < cols; col++){
            
            let liveCount = 0
            
            for(let i = 0; i < 3; i++){
                for(let j = 0; j < 3; j++){
                    if(!(neighbors[i] == 0 && neighbors[j] == 0)){
                        const r = (row + neighbors[i])
                        const c = (col + neighbors[j])
                        
                        if((r < rows && r >= 0) && 
                           (c < cols && c >= 0) && 
                           (Math.abs(board[r][c]) == 1)){
                            liveCount +=1
                        }
                    }
                }
            }
            
            if((board[row][col] == 1) && (liveCount < 2 || liveCount > 3))
                board[row][col] = -1
            
            if(board[row][col] == 0 && liveCount == 3)
                board[row][col] = 2
        }
    
    for(row = 0; row < rows; row++)
        for(col = 0; col < cols; col++){
            if(board[row][col] > 0)
                board[row][col] = 1
            else board[row][col] = 0
        }
};