/*
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scores) {
    // Write your code here
    let minRecord = scores[0];
    let maxRecord = scores[0];
    let minCount = 0;
    let maxCount = 0;
    for (let item of scores) {
        if (item > maxRecord) {
            maxRecord = item;
            maxCount += 1;
        } else if (item < minRecord) {
            minRecord = item;
            minCount += 1;
        }
    }
    return [maxCount, minCount]
}