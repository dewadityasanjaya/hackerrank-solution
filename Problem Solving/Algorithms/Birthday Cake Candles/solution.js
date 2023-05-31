/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

function birthdayCakeCandles(candles) {
    // Write your code here
    let maxCandles = 0;
    let counter = 0;
    for (let item of candles) {
        if (item > maxCandles) {
            counter = 0;
            maxCandles = item;
            counter += 1;
        } else if (item == maxCandles) {
            counter += 1;
        }
    }
    return counter;
}