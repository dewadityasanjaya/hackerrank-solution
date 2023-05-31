/*
 * Complete the 'aVeryBigSum' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER_ARRAY ar as parameter.
 */

function aVeryBigSum(ar) {
    let sumAr = 0;
    for (let item of ar) {
        sumAr += item;
    }
    return sumAr;
}