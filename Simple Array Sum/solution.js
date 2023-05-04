/*
 * Complete the 'simpleArraySum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY ar as parameter.
 */

function simpleArraySum(ar) {
    let sum = 0;
    for (let item of ar) {
        sum = sum + item;
    }
    return sum;
}