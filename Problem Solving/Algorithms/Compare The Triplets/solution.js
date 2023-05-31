/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function compareTriplets(a, b) {
    let aScore = 0;
    let bScore = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            aScore += 1;
        } else if (a[i] < b[i]) {
            bScore += 1;
        } else if (a[i] == b[i]) {
            aScore += 0;
            bScore += 0;
        }
    }
    return [aScore, bScore];
}