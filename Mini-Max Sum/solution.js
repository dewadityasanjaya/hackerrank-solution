/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
    let minSum = 0;
    let maxSum = 0;
    let tempSum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i != j) {
                tempSum += arr[j];
            }
        }
        if (tempSum > maxSum) {
            maxSum = tempSum;
        }
        if (tempSum < minSum || minSum == 0) {
            minSum = tempSum;
        }
        tempSum = 0;
    }
    console.log(`${minSum} ${maxSum}`);
}