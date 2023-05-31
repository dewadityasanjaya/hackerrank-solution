/*
 * Complete the 'hurdleRace' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY height
 */

function hurdleRace(k, height) {
    let maxHeight = 0;
    for (let item of height) {
        if (item > maxHeight) {
            maxHeight = item;
        }
    }
    if (maxHeight > k) {
        return maxHeight - k;
    } else {
        return 0;
    }
}