/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {
    const uniqueSocks = [...new Set(ar)];
    let counterSocks = [];
    let counter = 0;
    for (let item of uniqueSocks) {
        for (let item2 of ar) {
            if (item == item2) {
                counter = counter + 1;
            }
        }
        counterSocks.push(Math.trunc(counter / 2));
        counter = 0;
    }
    for (let item of counterSocks) {
        counter = counter + item;
    }
    return counter;
}