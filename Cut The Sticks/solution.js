/*
 * Complete the 'cutTheSticks' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function cutTheSticks(arr) {
    let process = true;
    let arrProcess = arr;
    let minNum = getMinNumber(arrProcess);
    let counter = 0;
    let answer = []
    while (process) {
        for (let i = 0; i < arrProcess.length; i++) {
            arrProcess[i] = arrProcess[i] - minNum;
            counter++;
        }
        answer.push(counter);
        arrProcess = filterArr(arrProcess);
        minNum = getMinNumber(arrProcess);
        counter = 0;
        if (arrProcess.length === 0) {
            process = false;
        }
    }
    return answer;
}

function getMinNumber(arr) {
    return Math.min(...arr);
}

function filterArr(arr) {
    return arr.filter((item) => item > 0);
}