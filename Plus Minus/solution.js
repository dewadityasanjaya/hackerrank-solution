/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    let plusSum = 0;
    let negSum = 0;
    let zeroSum = 0;
    for (let item of arr) {
        if (item > 0) {
            plusSum += 1;
        } else if (item < 0) {
            negSum += 1;
        } else if (item == 0) {
            zeroSum += 1;
        }
    }
    console.log(plusSum / arr.length);
    console.log(negSum / arr.length);
    console.log(zeroSum / arr.length);
}