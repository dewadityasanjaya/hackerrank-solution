/*
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function pickingNumbers(a) {
    const sortedArray = a.sort((a, b) => b - a);
    let answerArray = [];
    let answer = 0;
    for (let item of sortedArray) {
        for (let item2 of sortedArray) {
            if (item2 === item || item2 + 1 === item) {
                answerArray.push(item2);
            }
        }
        if (answerArray.length > answer) {
            answer = answerArray.length;
        }
        answerArray = [];
    }
    return answer;
}