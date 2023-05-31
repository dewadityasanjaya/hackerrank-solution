/*
 * Complete the 'findDigits' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function findDigits(n) {
    let counter = 0;
    let nString = n.toString();
    for (let item of nString) {
        if (n % Number(item) == 0) {
            counter++;
        }
    }
    return counter;
}