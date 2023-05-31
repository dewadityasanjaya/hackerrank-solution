/*
 * Complete the 'formingMagicSquare' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY s as parameter.
 */

function formingMagicSquare(s) {
    let totals = [];
    let total = 0;

    const combinationArray =
        [[[8, 1, 6], [3, 5, 7], [4, 9, 2]],
        [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
        [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
        [[2, 9, 4], [7, 5, 3], [6, 1, 8]],
        [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
        [[4, 3, 8], [9, 5, 1], [2, 7, 6]],
        [[6, 7, 2], [1, 5, 9], [8, 3, 4]],
        [[2, 7, 6], [9, 5, 1], [4, 3, 8]]];

    for (let item of combinationArray) {
        for (let i = 0; i < item.length; i++) {
            for (let j = 0; j < item[i].length; j++) {
                total = total + (Math.abs(s[i][j] - item[i][j]));
            }
        }
        totals.push(total);
        total = 0;
    }
    return Math.min(...totals)
}