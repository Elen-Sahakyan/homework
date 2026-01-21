var islandPerimeter = function(grid) {
    let perim = 0;
    const size = grid.length;

    for(let i = 0; i < size; ++i) {
        for(let j = 0; j < size; ++j) {
            if(grid[i][j] === 1) {
                perim += 4;
            }
            if(j + 1 < size && grid[i][j] === 1 && grid[i][j + 1] === 1) {
                perim -= 2;    
            }
            if(i + 1 < size && grid[i][j] === 1 && grid[i + 1][j] === 1) {
                perim -= 2;
            }
        }
    }    
    return perim;
};

const grid = [[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]];

console.log(islandPerimeter(grid));


