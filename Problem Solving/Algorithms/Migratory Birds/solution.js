/*
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr) {
    let uniqueArr = [...new Set(arr)];
    // Find Occurance in Arr
    let counterArr = [];
    let counter = 0;
    for (let item of uniqueArr) {
        for (let item2 of arr) {
            if (item === item2) {
                counter = counter + 1;
            }
        }
        counterArr.push(counter);
        counter = 0;
    }
    // Find Max in Counter Arr
    let maxCounter = 0;
    for (let item of counterArr) {
        if (item > maxCounter) {
            maxCounter = item;
        }
    }
    // Find element with maxCounter
    let maxCounterArr = [];
    for (let i = 0; i < counterArr.length; i++) {
        if (counterArr[i] === maxCounter) {
            maxCounterArr.push(uniqueArr[i]);
        }
    }
    // Find Min type in Max Counter Arr
    let minType = maxCounterArr[0];
    for (let item of maxCounterArr) {
        if (item < minType) {
            minType = item;
        }
    }
    return minType;
}