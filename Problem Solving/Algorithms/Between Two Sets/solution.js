/*
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function getTotalX(a, b) {
    let integerConsidered = 0;
    for (let i = 1; i <= 100; i++) {
        if (a.every(x => (i % x == 0))) {
            if (b.every(y => (y % i == 0))) {
                integerConsidered += 1;
            }
        }
    }
    return integerConsidered;
}