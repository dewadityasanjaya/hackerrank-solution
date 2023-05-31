/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    let sum1 = 0;
    let sum2 = 0;
    let i = 0;
    let j = arr.length - 1;
    for (let item of arr) {
        sum1 += item[i];
        sum2 += item[j];
        i++;
        j--;
    }
    return Math.abs(sum1 - sum2)
}